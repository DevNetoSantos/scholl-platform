import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class TeacherService {
  constructor(private prisma: PrismaService) {}

  async create(createTeacherDto: CreateTeacherDto) {
    const data = {
      ...createTeacherDto,
      password: await bcrypt.hash(createTeacherDto.password, 10)
    }

    const teacherExist = await this.prisma.user.findFirst({
      where: {
        email: createTeacherDto.email
      }
    });

    if(teacherExist) {
      throw new Error ('this email already exists')
    }

    await this.prisma.teacher.create({
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
    });

    return {messege: 'user register successfully'}
  }

  async findAll() {
    const teachers = this.prisma.teacher.findMany({
      include: {
        user: true
      }
    });

    return teachers;
  }

  findOne(id: number) {
    return `This action returns a #${id} teacher`;
  }

  update(id: number, updateTeacherDto: UpdateTeacherDto) {
    return `This action updates a #${id} teacher`;
  }

  remove(id: number) {
    return `This action removes a #${id} teacher`;
  }
}
