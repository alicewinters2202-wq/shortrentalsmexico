import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, contact, message } = await req.json();

  if (!name || !String(name).trim()) {
    return NextResponse.json({ error: 'Falta el nombre' }, { status: 400 });
  }
  if (!contact || !String(contact).trim()) {
    return NextResponse.json({ error: 'Falta el correo o teléfono' }, { status: 400 });
  }

  const contactInfo = String(contact).trim();
  const isEmail = /\S+@\S+\.\S+/.test(contactInfo);
  const finalMessage = message && String(message).trim()
    ? String(message).trim()
    : 'Quiero más información.';

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('Contact form: EMAIL_USER or EMAIL_PASS is not set');
    return NextResponse.json({ error: 'Servidor de correo no configurado' }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Sitio web TemporaryRentalsMexico" <${process.env.EMAIL_USER}>`,
      to: 'alicewinters2202@gmail.com',
      replyTo: isEmail ? contactInfo : undefined,
      subject: `Nuevo mensaje desde TemporaryRentalsMexico — ${String(name).trim()}`,
      html: `
        <h2>Nuevo mensaje desde el formulario de contacto</h2>
        <p><strong>Nombre:</strong> ${String(name).trim()}</p>
        <p><strong>Contacto (email o teléfono):</strong> ${contactInfo}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${finalMessage.replace(/\n/g, '<br/>')}</p>
      `,
    });
  } catch (err) {
    console.error('Contact form: failed to send email:', err);
    return NextResponse.json({ error: 'No se pudo enviar el correo' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
