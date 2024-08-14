// api/sender/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create a transporter object using the Gmail service
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const { to, subject, text } = await request.json();

    if (!to || !subject || !text) {
      throw new Error('Missing required fields: to, subject, or text');
    }

    // Send email
    const info = await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to,
      subject,
      text,
    });

    return NextResponse.json({ message: 'Email sent', messageId: info.messageId });
  } catch (error: any) {
    console.error('Internal Error:', error.message || error);
    return NextResponse.json(
      { error: `Internal Server Error: ${error.message || error}` },
      { status: 500 }
    );
  }
}
