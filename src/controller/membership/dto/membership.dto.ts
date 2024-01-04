import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsEnum,
  IsArray,
} from 'class-validator';
import { tagEnum } from 'src/entities';
export class CreateMembershipDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  valid: number;

  @IsString()
  @IsNotEmpty()
  logo: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(tagEnum)
  tag: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  base: string;

  @IsArray()
  @IsNotEmpty()
  benefits: string[];

  @IsString()
  @IsNotEmpty()
  button: string;
}

export class UpdateMembershipDto {
  name: string;

  price: number;

  valid: number;

  logo: string;

  tag: string;

  description: string;

  base: string;

  benefits: string[];

  button: string;

  updated: string;

  isDeleted: boolean;

  isActive: boolean;
}
