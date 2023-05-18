import { Module } from '@nestjs/common';
import { EmailsController } from './mail.controller';
import { MailService } from './mail.service';

@Module({
  controllers: [EmailsController],
  providers: [MailService],
})
export class MailsModule {}
