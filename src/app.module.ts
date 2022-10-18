import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { StudentyModule } from './studenty/studenty.module';
import { TeacherModule } from './teacher/teacher.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
@Module({
  imports: [UserModule, StudentyModule, TeacherModule, AuthModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ]
})
export class AppModule {}
