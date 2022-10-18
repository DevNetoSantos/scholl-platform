import { Module } from '@nestjs/common';
import { StudentyService } from './studenty.service';
import { StudentyController } from './studenty.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [StudentyController],
  providers: [StudentyService, PrismaService]
})
export class StudentyModule {}
