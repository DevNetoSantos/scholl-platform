import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateStudentyDto } from './dto/create-studenty.dto';
import { StudentyService } from './studenty.service';

@Controller('studenty')
export class StudentyController {

  constructor(private studentyService: StudentyService) {}

  @Post()
  create(@Body() createStudentyDto: CreateStudentyDto) {
    return this.studentyService.create(createStudentyDto);
  }

  @Get()
    findAll() {
      return this.studentyService.findAll();
    }
}
