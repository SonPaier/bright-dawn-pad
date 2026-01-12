import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

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

    // Determine if contact is email or phone
    const isEmail = contact.includes("@");
    const contactType = isEmail ? "email" : "phone";

    // Initialize Supabase client with service role for database insert
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Save to database
    const { data: dbData, error: dbError } = await supabase
      .from("contact_submissions")
      .insert({
        contact,
        contact_type: contactType,
      })
      .select()
      .single();

    if (dbError) {
      console.error("Error saving to database:", dbError);
      // Continue with email even if DB save fails
    } else {
      console.log("Contact saved to database:", dbData.id);
    }

    // Create SMTP client for IONOS
    const client = new SMTPClient({
      connection: {
        hostname: Deno.env.get("SMTP_HOST")!,
        port: parseInt(Deno.env.get("SMTP_PORT") || "465"),
        tls: true,
        auth: {
          username: Deno.env.get("SMTP_USER")!,
          password: Deno.env.get("SMTP_PASS")!,
        },
      },
    });

    // Send email notification
    const contactTypeDisplay = isEmail ? "Email" : "Telefon";
    await client.send({
      from: Deno.env.get("SMTP_FROM")!,
      to: "hello@n2wash.com",
      subject: `Nowe zapytanie o prezentację - N2Wash.com`,
      html: `
        <h2>Nowe zapytanie o prezentację</h2>
        <p><strong>${contactTypeDisplay}:</strong> ${contact}</p>
        <p><strong>Data:</strong> ${new Date().toLocaleString("pl-PL", { timeZone: "Europe/Warsaw" })}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">Wiadomość wysłana automatycznie z formularza na stronie n2wash.com</p>
      `,
    });

    await client.close();

    console.log("Email sent successfully to hello@n2wash.com");

    return new Response(
      JSON.stringify({ success: true, message: "Contact saved and email sent" }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Error processing contact submission:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
