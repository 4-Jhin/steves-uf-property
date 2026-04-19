import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const { email } = await req.json();

  const { error } = await resend.emails.send({
    from: "UF Property Group <onboarding@resend.dev>",
    to: "steveufuoma505@gmail.com",
    subject: "New Mailing List Signup",
    html: `<p><strong>${email}</strong> just joined the mailing list.</p>`,
  });

  if (error) return NextResponse.json({ error }, { status: 500 });
  return NextResponse.json({ success: true });
}
