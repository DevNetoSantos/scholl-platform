import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { StudentyService } from 'src/studenty/studenty.service';
import { TeacherController } from './teacher.controller';
import { TeacherService } from './teacher.service';

@Module({
  controllers: [TeacherController],
  providers: [TeacherService, PrismaService],
  exports: [TeacherService]
})
export class TeacherModule {}
