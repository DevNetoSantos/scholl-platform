import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreateStudentyDto } from './dto/create-studenty.dto';
import { UpdateStudentyDto } from './dto/update-studenty.dto';
import { StudentyService } from './studenty.service';

@Controller('users/studentys')
export class StudentyController {
  
  constructor(private studentyService: StudentyService) {}
  
  @Post()
  @HttpCode(201)
  create(@Body() createStudentyDto: CreateStudentyDto) {
    return this.studentyService.create(createStudentyDto);
  }

  @Get()
  findAll() {
    return this.studentyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.studentyService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateStudentyDto: UpdateStudentyDto) {
    return this.studentyService.update(id, updateStudentyDto);
  }

  @Delete(':id')
  @HttpCode(200)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.studentyService.remove(id)
  }
}
