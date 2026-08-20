import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { contact, message } = await req.json();

  if (!message || !String(message).trim()) {
    return NextResponse.json({ error: 'Falta el mensaje' }, { status: 400 });
  }

  const contactInfo = contact && String(contact).trim() ? String(contact).trim() : 'No proporcionado';
  const isEmail = /\S+@\S+\.\S+/.test(contactInfo);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Sitio web TemporaryRentalsMexico" <${process.env.EMAIL_USER}>`,
    to: 'alicewinters2202@gmail.com',
    replyTo: isEmail ? contactInfo : undefined,
    subject: `Nuevo mensaje desde TemporaryRentalsMexico`,
    html: `
      <h2>Nuevo mensaje desde el formulario de contacto</h2>
      <p><strong>Contacto (email o teléfono):</strong> ${contactInfo}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${String(message).replace(/\n/g, '<br/>')}</p>
    `,
  });

  return NextResponse.json({ ok: true });
}
