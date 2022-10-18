import { User } from "../entity/user.entity";

export class CreateUserDto extends User{
  id?: number;
  email: string;
  password: string;
  role: string;
}
