import { Teacher } from "../entity/teacher.entity";

export class CreateTeacherDto extends Teacher {
  id?: number;
  name: string;
  cpf: string;
  graduate: string;
    email: string;
    password: string;
}
