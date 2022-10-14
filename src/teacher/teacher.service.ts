import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class TeacherService {

  constructor(private prisma: PrismaService) {}

  async create(createTeacherDto: CreateTeacherDto) {
    
    const data = {
      ...createTeacherDto,
      password: await bcrypt.hash(createTeacherDto.password, 10)
    }

    const teacherExist = await this.prisma.teacher.findFirst({
      where: {
        email: createTeacherDto.email
      }
    })

    if(teacherExist) {
      throw new Error ('Teacher is already added')
    }

    await this.prisma.teacher.create({data})

    return {messege: 'Teacher added successfully'}
  }

  async findAll() {
    const teachers = await this.prisma.teacher.findMany({
      select: {
        createdAt: true,
        name: true,
        email: true,
        cpf: true,
        speacialization: true,
        city: true,
        state: true,
      }
    });
    return teachers;
  }
}
