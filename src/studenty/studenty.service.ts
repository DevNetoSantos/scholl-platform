import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateStudentyDto } from './dto/create-studenty.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class StudentyService {

  constructor(private prisma: PrismaService) {}

  async create(createStudentyDto: CreateStudentyDto) {

    const data = {
      ...createStudentyDto,
      password: await bcrypt.hash(createStudentyDto.password, 10)
    };

    const userExist = await this.prisma.login.findFirst({
      where: {
        email: createStudentyDto.email
      }
    });
    
    if(userExist) {
      throw new Error ('users is already registered')
    };

    await this.prisma.studenty.create({
      data: {
        name: data.name,
        sobrenome: data.sobrenome,
        login: {
          create: {
            email: data.email,
            password: data.password
          }
        }
      },
    });

    return {messege: 'user create successfully'};
  }
  
  async findAll() {
    const users = await this.prisma.studenty.findMany({
      include: {
        login: true
      }
    });
    return users;
  }
}
