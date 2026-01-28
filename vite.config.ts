import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  // Keep types permissive here because some Vite/Rollup plugins ship slightly different typings.
  const plugins: any[] = [react(), mode === "development" && componentTagger()].filter(Boolean);

  // Prerender ONLY for production build so dev builds (and build:dev) stay fast & stable.
  if (mode === "production") {
    const { default: prerender } = await import("@prerenderer/rollup-plugin");

    plugins.push(
      prerender({
        routes: ["/", "/polityka-prywatnosci", "/regulamin"],
        renderer: "@prerenderer/renderer-puppeteer",
        rendererOptions: {
          // Give the SPA a moment to hydrate and render dynamic content.
          renderAfterTime: 2000,
        },
      })
    );
  }

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
