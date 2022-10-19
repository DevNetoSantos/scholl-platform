import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  
  async findAll() {
    const users = await this.prisma.user.findMany({
      include: {
        Studenty: true,
        Teacher: true
      },
      
    });
    
    return users;
  }

  async findByEmail(email: string) {
    return await this.prisma.user.findFirst({
      where: {
        email
      },
      include: {
        Studenty: true,
        Teacher: true
      }
    });
  }
}
