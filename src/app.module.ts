import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { StudentyModule } from './studenty/studenty.module';
import { TeacherModule } from './teacher/teacher.module';
@Module({
  imports: [UserModule, StudentyModule, TeacherModule],
})
export class AppModule {}
