import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class LoginService {

  constructor(private prisma: PrismaService) {}
  
  async findAll() {
    const logins = await this.prisma.login.findMany({
      include: {
        studenty: true
      }
    })
    return logins;
  }
}
