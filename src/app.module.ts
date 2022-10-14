import { Module } from '@nestjs/common';
import { StudentyModule } from './studenty/studenty.module';
import { TeacherModule } from './teacher/teacher.module';
@Module({
  imports: [StudentyModule, TeacherModule]
})
export class AppModule {}
