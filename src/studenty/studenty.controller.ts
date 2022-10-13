import { Body, Controller, Post } from '@nestjs/common';
import { CreateStudentyDto } from './dto/create-studenty.dto';
import { StudentyService } from './studenty.service';

@Controller('studentys')
export class StudentyController {
  
  constructor(private studentyService: StudentyService) {}
  
  @Post()
  create(@Body() createStudentyDto: CreateStudentyDto) {
    return this.studentyService.create(createStudentyDto);
  }
}
