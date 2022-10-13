import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { StudentyController } from './studenty.controller';
import { StudentyService } from './studenty.service';

@Module({
  controllers: [StudentyController],
  providers: [StudentyService, PrismaService],
  exports: [StudentyService],
})
export class StudentyModule {}
