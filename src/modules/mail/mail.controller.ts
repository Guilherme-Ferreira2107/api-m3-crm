import { Controller, Post, Body } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('emails')
export class EmailsController {
  constructor(private readonly mailService: MailService) {}

  @Post()
  async sendEmail(
    @Body() data: { to: string; subject: string; message: string },
  ): Promise<void> {
    const { to, subject, message } = data;

    // Envie o e-mail usando o serviço de e-mail
    await this.mailService.sendMail(to, subject, message);
  }
}
