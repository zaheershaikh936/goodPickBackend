import { IsString, IsNotEmpty, IsEmail, IsNumber } from 'class-validator';

export class SignUpAuthDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNumber()
  @IsNotEmpty()
  otp: number;
}
