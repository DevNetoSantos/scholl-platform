import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/entity/user.entity';
import { UserToken } from './models/UserToken';
import { UserPayload } from './models/UserPayload';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly UserService: UserService,
    private jwtService: JwtService
    ) {}

  login(user: User): UserToken {
    // transforma user em JWT
    const payload: UserPayload = {
      email: user.email,
      password: user.password,
      role: user.role
    };
    
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

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