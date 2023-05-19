import { UnauthorizedException } from '@nestjs/common';

export class InvalidCredentialsException extends UnauthorizedException {
  constructor(message?: string | object | any, error?: string) {
    super(message, error);
  }
}
