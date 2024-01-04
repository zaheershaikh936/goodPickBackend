import { IsString, IsNotEmpty, IsArray } from 'class-validator';
import { User } from 'src/entities';

export class CreateVendorDto {
  @IsArray()
  @IsNotEmpty()
  preferredWorkingDays: string[];

  @IsString()
  @IsNotEmpty()
  carType: string;

  @IsArray()
  @IsNotEmpty()
  images: string[];

  @IsArray()
  @IsNotEmpty()
  languageProficiency: string[];

  @IsString()
  @IsNotEmpty()
  license: string;

  userId: User;
}

export class UpdateVendorDto {
  preferredWorkingDays: string[];
  carType: string;
  images: string[];
  languageProficiency: string[];
  license: string;
  isBlocked: boolean;
  isActive: boolean;
  register: boolean;
  logs: object[];
}
