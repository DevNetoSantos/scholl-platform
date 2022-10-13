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
    }

    const studentExits = await this.prisma.studenty.findFirst({
      where: {
        email: createStudentyDto.email
      }
    })

    if(studentExits) {
      throw new Error ('Student already exist')
    }

    const creatStudenty = await this.prisma.studenty.create({data})

    return {
      ...creatStudenty,
      password: undefined
    }
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
}
