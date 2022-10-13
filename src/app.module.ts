import { Module } from '@nestjs/common';
import { StudentyModule } from './studenty/studenty.module';
@Module({
  imports: [StudentyModule],
})
export class AppModule {}
