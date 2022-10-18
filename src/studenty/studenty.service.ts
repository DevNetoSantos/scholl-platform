import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateStudentyDto } from './dto/create-studenty.dto';
import { UpdateStudentyDto } from './dto/update-studenty.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class StudentyService {
  constructor(private prisma: PrismaService) {}

  async create(createStudentyDto: CreateStudentyDto) {
    const data = {
      ...createStudentyDto,
      password: await bcrypt.hash(createStudentyDto.password, 10)
    }

    const studentyExist = await this.prisma.user.findFirst({
      where: {
        email: createStudentyDto.email
      }
    });

    if(studentyExist) {
      throw new Error ('this email already exists')
    }
    
    await this.prisma.studenty.create({
      data: {
        name: data.name,
        sobrenome: data.sobrenome,
        user: {
          create: {
            email: data.email,
            password: data.password
          }
        }
      }
    })

    return {messege: 'user register successfully'}
  }

  async findAll() {
    const studentys = await this.prisma.studenty.findMany({
      include: {
        user: true
      }
    });

    return studentys;
  }

  findOne(id: number) {
    return `This action returns a #${id} studenty`;
  }

  update(id: number, updateStudentyDto: UpdateStudentyDto) {
    return `This action updates a #${id} studenty`;
  }

  remove(id: number) {
    return `This action removes a #${id} studenty`;
  }
}
