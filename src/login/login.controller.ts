import { Controller, Get } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private loginServie: LoginService) {}

  @Get()
  findAll() {
    return this.loginServie.findAll()
  }
}