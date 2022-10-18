import { Module } from '@nestjs/common';
import { StudentyModule } from './studenty/studenty.module';
import { LoginModule } from './login/login.module';
@Module({
  imports: [StudentyModule, LoginModule],
})
export class AppModule {}
