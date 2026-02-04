import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, company, email, phone, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { success: false, error: 'Name, email and message are required.' },
                { status: 400 }
            );
        }

        const host = process.env.SMTP_HOST || process.env.NEXT_PUBLIC_SMTP_HOST;
        const port = parseInt(process.env.SMTP_PORT || process.env.NEXT_PUBLIC_SMTP_PORT || '587', 10);
        const user = process.env.SMTP_USER || process.env.NEXT_PUBLIC_SMTP_USER;
        const pass = process.env.SMTP_PASSWORD || process.env.NEXT_PUBLIC_SMTP_PASSWORD;
        const fromEmail = process.env.FROM_EMAIL || process.env.NEXT_PUBLIC_FROM_EMAIL;
        const toEmail = process.env.TO_EMAIL || process.env.NEXT_PUBLIC_TO_EMAIL;

        if (!host || !user || !pass || !toEmail) {
            console.error('Missing SMTP env: host, user, pass, or toEmail');
            return NextResponse.json(
                { success: false, error: 'Email service is not configured.' },
                { status: 503 }
            );
        }

        const transporter = nodemailer.createTransport({
            host,
            port,
            secure: port === 465,
            auth: { user, pass },
        });

        const safe = (s) => (s || '').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
        const safeName = safe(name);
        const safeCompany = safe(company);
        const safeEmail = email || '';
        const safePhone = safe(phone);
        const safeMessage = (message || '').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>');

        const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>COREKAV Inquiry</title>
</head>
<body style="margin:0; padding:0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f0f0f0;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f0f0f0;">
    <tr>
      <td style="padding: 24px 16px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e0e0e0;">
          <tr>
            <td style="background-color: #0B1F3B; color: #ffffff; padding: 20px 24px; border-bottom: 3px solid #C9A24D;">
              <h1 style="margin:0; font-size: 20px; font-weight: 700; letter-spacing: 0.05em;">COREKAV</h1>
              <p style="margin: 6px 0 0 0; font-size: 12px; opacity: 0.9;">New website inquiry</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 28px 24px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                    <span style="display: inline-block; width: 100px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #0B1F3B;">Name</span>
                    <span style="font-size: 15px; color: #222;">${safeName}</span>
                  </td>
                </tr>
                ${safeCompany ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                    <span style="display: inline-block; width: 100px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #0B1F3B;">Company</span>
                    <span style="font-size: 15px; color: #222;">${safeCompany}</span>
                  </td>
                </tr>
                ` : ''}
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                    <span style="display: inline-block; width: 100px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #0B1F3B;">Email</span>
                    <a href="mailto:${safeEmail}" style="font-size: 15px; color: #0B1F3B; font-weight: 600;">${safeEmail}</a>
                  </td>
                </tr>
                ${safePhone ? `
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee;">
                    <span style="display: inline-block; width: 100px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #0B1F3B;">Phone</span>
                    <span style="font-size: 15px; color: #222;">${safePhone}</span>
                  </td>
                </tr>
                ` : ''}
              </table>
              <p style="margin: 20px 0 8px 0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: #0B1F3B;">Message</p>
              <div style="padding: 16px; background-color: #f8f8f8; border: 1px solid #eee; font-size: 14px; line-height: 1.6; color: #333;">
                ${safeMessage}
              </div>
            </td>
          </tr>
          <tr>
            <td style="background-color: #f5f5f5; padding: 14px 24px; border-top: 1px solid #eee; font-size: 11px; color: #666;">
              COREKAV International Trade · Sent via website inquiry form
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

        const mailOptions = {
            from: fromEmail || user,
            to: toEmail,
            replyTo: email,
            subject: `COREKAV Inquiry from ${name}${company ? ` (${company})` : ''}`,
            text: [
                `Name: ${name}`,
                company ? `Company: ${company}` : '',
                `Email: ${email}`,
                phone ? `Phone: ${phone}` : '',
                '',
                'Message:',
                message,
            ].filter(Boolean).join('\n'),
            html,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('Contact form error:', err);
        return NextResponse.json(
            { success: false, error: 'Failed to send inquiry.' },
            { status: 500 }
        );
    }
}
