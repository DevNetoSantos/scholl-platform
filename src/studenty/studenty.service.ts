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
}
