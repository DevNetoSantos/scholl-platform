import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateStudentyDto {

  @MinLength(3)
  @MaxLength(100)
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @MinLength(8)
  @IsNotEmpty()
  password: string;

  @MaxLength(11)
  @IsNotEmpty()
  cpf: string;

  @IsNotEmpty()
  date_birth: string;

  @MaxLength(11)
  @IsNotEmpty()
  phone: string;

  @MinLength(3)
  @MaxLength(100)
  @IsNotEmpty()
  city: string;

  @MaxLength(100)
  @MinLength(3)
  @IsNotEmpty()
  state: string;

  @MaxLength(10)
  @IsNotEmpty()
  series: string;

  @MaxLength(10)
  @IsNotEmpty()
  shift: string;

  @MaxLength(100)
  @IsNotEmpty()
  responsible_name: string;

  @IsEmail()
  @IsNotEmpty()
  responsible_email: string;
  
  @MaxLength(11)
  @IsNotEmpty()
  responsible_phone: string;
}