import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateStudentyDto } from './dto/create-studenty.dto';
import * as bcrypt from 'bcrypt';
import { UpdateStudentyDto } from './dto/update-studenty.dto';

@Injectable()
export class StudentyService {

  constructor(private prisma: PrismaService) {}

  async create(createStudentyDto: CreateStudentyDto) {

    const data = {
      ...createStudentyDto,
      password: await bcrypt.hash(createStudentyDto.password, 10)
    }

    const studentExits = await this.prisma.studenty.findFirst({
      where: {
        email: createStudentyDto.email
      }
    })

    if(studentExits) {
      throw new Error ('Student already exist')
    }

    await this.prisma.studenty.create({data})

    return {messege: 'studenty added successfully'}
  }

  async findAll() {
    const students = await this.prisma.studenty.findMany({
      select: {
        name: true,
        email: true,
        cpf: true,
        city: true,
        state: true,
        series: true,
        shift: true,
        date_birth: true,
        phone: true,
        createdAt: true,
        responsible_name: true,
        responsible_email: true,
        responsible_phone: true,
      },
      orderBy: {
        id: 'desc'
      }
    });

    return students;
  }

  async findOne(id: number) {
    const studenty = await this.prisma.studenty.findUnique({where: {id}})

    if(!studenty) {
      throw new Error ('Student not exist')
    }

    return {
      ...studenty,
      password: undefined
    }
  }

  async update(id: number, updateStudentyDto: UpdateStudentyDto) {
    const studenty = await this.prisma.studenty.findUnique({where: {id}})

    const data = {
      ...updateStudentyDto,
      password: await bcrypt.hash(updateStudentyDto.password, 10)
    }

    if(!studenty) {
      throw new Error ('Student not exist')
    }

    const updateStudenty = await this.prisma.studenty.update({where: {id}, data})

    return {
      ...updateStudenty,
      password: undefined
    }
  }

  async remove(id: number) {
    const studentExits = await this.prisma.studenty.findUnique({where: {id}})

    if(!studentExits) {
      throw new Error ('Student not exist')
    }

    await this.prisma.studenty.delete({where: {id}})

    return {messege: 'successfully deleted'}
  }
}
