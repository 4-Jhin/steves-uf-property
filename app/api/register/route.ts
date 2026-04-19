import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, phone, budget, strategy, message } = await req.json();

  const { error } = await resend.emails.send({
    from: "UF Property Group <onboarding@resend.dev>",
    to: "steveufuoma505@gmail.com",
    subject: `New Investor Registration — ${name}`,
    html: `
      <h2>New Investor Registration</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Budget:</strong> ${budget || "Not specified"}</p>
      <p><strong>Strategy:</strong> ${strategy || "Not specified"}</p>
      <p><strong>Message:</strong> ${message || "None"}</p>
    `,
  });

  if (error) return NextResponse.json({ error }, { status: 500 });
  return NextResponse.json({ success: true });
}
