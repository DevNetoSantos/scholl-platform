import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateTeacherDto {

  @IsNotEmpty()
  @MinLength(3)
  name: string;
  
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @IsNotEmpty()
  @MaxLength(11)
  cpf: string;

  @MaxLength(20)
  @IsNotEmpty()
  city: string;

  @MaxLength(20)
  @IsNotEmpty()
  state: string;

  @IsNotEmpty()
  @MaxLength(20)
  speacialization: string
}