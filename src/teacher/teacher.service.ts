import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateTeacherDto } from './dto/update-teacher.dto';

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

  async findOne(id: number) {
    const teacher = await this.prisma.teacher.findUnique({where: {id}})

    if(!teacher) {
      throw new Error ('Teacher nor exist')
    }

    return {
      ...teacher,
      password: undefined
    }
  }

  async update(id: number, updateTeacherDto: UpdateTeacherDto) {

    const teacher = await this.prisma.teacher.findUnique({where: {id}})

    if(!teacher) {
      throw new Error ('Teacher nor exist')
    }

    const data = {
      ...updateTeacherDto,
      password: await bcrypt.hash(updateTeacherDto.password, 10)
    }

    const updateTeacher = await this.prisma.teacher.update({where: {id}, data});

    return {
      ...updateTeacher,
      password: undefined
    }
  }

  async remove(id: number) {
    const teacher = await this.prisma.teacher.findUnique({where: {id}});

    if(!teacher) {
      throw new Error ('Teacher not found')
    }

    await this.prisma.teacher.delete({where: {id}});

    return {messege: 'teacher delete successfully'}
  }
}
