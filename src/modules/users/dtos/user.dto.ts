import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail } from 'class-validator';

export class UserDto {
  @ApiProperty()
  @IsNotEmpty()
  id?: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  created_at?: string;

  @ApiProperty()
  @IsNotEmpty()
  updated_at?: string;
}
