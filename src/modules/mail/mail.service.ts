import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    // Configure o transporter do Nodemailer com as suas credenciais do Mailtrap
    this.transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: +process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });
  }

  async sendMail(to: string, subject: string, message: string): Promise<void> {
    // Configure as opções de envio do e-mail
    const mailOptions = {
      from: 'seu-email@exemplo.com',
      to,
      subject,
      text: message,
    };

    // Envie o e-mail usando o transporter do Nodemailer
    await this.transporter.sendMail(mailOptions);
  }
}
