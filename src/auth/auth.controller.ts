import { Controller, Get, Post, Body, HttpCode} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(200)
  login(@Body() loginDto: any) {
    return this.authService.validateUser(loginDto.email, loginDto.password);
  }
}
