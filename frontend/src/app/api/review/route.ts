import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, stars, text } = await req.json();

  if (!stars || !text?.trim()) {
    return NextResponse.json({ error: 'Faltan campos' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const starStr = '⭐'.repeat(stars);
  const today   = new Date().toISOString().split('T')[0];

  await transporter.sendMail({
    from: `"ShortStayMX Reseñas" <${process.env.EMAIL_USER}>`,
    to: 'alicewinters2202@gmail.com',
    subject: `Nueva reseña pendiente de aprobación — ${starStr}`,
    html: `
      <h2>Nueva reseña pendiente de aprobación</h2>
      <p><strong>Nombre:</strong> ${name || 'Anónimo'}</p>
      <p><strong>Calificación:</strong> ${starStr} (${stars}/5)</p>
      <p><strong>Fecha:</strong> ${today}</p>
      <p><strong>Reseña:</strong></p>
      <blockquote style="border-left:3px solid #C9A84C;padding-left:12px;color:#555;">
        ${text.replace(/\n/g, '<br/>')}
      </blockquote>
      <hr/>
      <p style="color:#888;font-size:12px;">
        Para publicar esta reseña, agrégala al archivo<br/>
        <code>frontend/src/components/home/ReviewsSection.tsx</code><br/>
        en el arreglo REVIEWS con estos datos:<br/><br/>
        <code>{ text: '${text.replace(/'/g, "\\'")}', date: '${today}', initials: '${(name || 'AN').substring(0,2).toUpperCase()}', color: '#6B7280', stars: ${stars} }</code>
      </p>
    `,
  });

  return NextResponse.json({ ok: true });
}
