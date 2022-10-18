import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { StudentyModule } from './studenty/studenty.module';
import { TeacherModule } from './teacher/teacher.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [UserModule, StudentyModule, TeacherModule, AuthModule],
})
export class AppModule {}
