import { Module } from '@nestjs/common';
import { EmailsController } from '../controllers/mail.controller';
import { MailService } from '../services/mail.service';

@Module({
  controllers: [EmailsController],
  providers: [MailService],
})
export class MailsModule {}
