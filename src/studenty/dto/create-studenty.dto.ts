import { Studenty } from "../entity/studenty.entity";

export class CreateStudentyDto extends Studenty{
  id?: number;
  name: string;
  cpf: string;
  city: string;
  year: string
    email: string;
    password: string;
}
