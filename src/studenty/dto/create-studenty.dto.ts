import { Studenty } from "../entity/studenty.entity";

export class CreateStudentyDto extends Studenty{
  id?: number;
  name: string;
  sobrenome: string;
    email: string;
    password: string;
}
