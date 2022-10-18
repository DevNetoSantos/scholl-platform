import { Controller, Get, Post, Body, HttpCode, UseGuards, Request} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './decorators/is-public.decorator';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @HttpCode(200)
  login(@Request() req) {
    return this.authService.login(req.user);
  }
}
