import { Teacher } from "../entity/teacher.entity";

export class CreateTeacherDto extends Teacher {
  id?: number;
  name: string;
  sobrenome: string;
    email: string;
    password: string;
}
