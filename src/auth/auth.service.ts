import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly UserService: UserService) {}

async validateUser(email: string, password: string) {
    const user = await this.UserService.findByEmail(email)

    if(user) {
      const isPasswordValid = await bcrypt.compareSync(password, user.password);

      if(isPasswordValid) {
        return {
          ...user,
          password: undefined
        };
      }
    }

    throw new Error('Email anddres or password provided is incorrect.')
  }
}