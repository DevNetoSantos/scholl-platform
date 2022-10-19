import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { Public } from 'src/auth/decorators/is-public.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Get()
  findAll() {
    return this.userService.findAll();
  }
}
