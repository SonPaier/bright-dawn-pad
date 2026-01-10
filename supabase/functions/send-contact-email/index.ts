import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import nodemailer from "https://esm.sh/nodemailer@6.9.9";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  contact: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { contact }: ContactRequest = await req.json();

    if (!contact) {
      return new Response(
        JSON.stringify({ error: "Contact is required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Create transporter with IONOS SMTP
    const transporter = nodemailer.createTransport({
      host: Deno.env.get("SMTP_HOST"),
      port: parseInt(Deno.env.get("SMTP_PORT") || "465"),
      secure: true, // Port 465 uses SSL
      auth: {
        user: Deno.env.get("SMTP_USER"),
        pass: Deno.env.get("SMTP_PASS"),
      },
    });

    // Determine if contact is email or phone
    const isEmail = contact.includes("@");
    const contactType = isEmail ? "Email" : "Telefon";

    // Send email notification
    await transporter.sendMail({
      from: Deno.env.get("SMTP_FROM"),
      to: "hello@n2wash.com",
      subject: `Nowe zapytanie o prezentację - N2WASH`,
      html: `
        <h2>Nowe zapytanie o prezentację</h2>
        <p><strong>${contactType}:</strong> ${contact}</p>
        <p><strong>Data:</strong> ${new Date().toLocaleString("pl-PL", { timeZone: "Europe/Warsaw" })}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">Wiadomość wysłana automatycznie z formularza na stronie n2wash.com</p>
      `,
    });

    console.log("Email sent successfully to hello@n2wash.com");

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
