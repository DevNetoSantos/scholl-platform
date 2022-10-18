import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentyService } from './studenty.service';
import { CreateStudentyDto } from './dto/create-studenty.dto';
import { UpdateStudentyDto } from './dto/update-studenty.dto';

@Controller('studenty')
export class StudentyController {
  constructor(private readonly studentyService: StudentyService) {}

  @Post()
  create(@Body() createStudentyDto: CreateStudentyDto) {
    return this.studentyService.create(createStudentyDto);
  }

  @Get()
  findAll() {
    return this.studentyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentyDto: UpdateStudentyDto) {
    return this.studentyService.update(+id, updateStudentyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentyService.remove(+id);
  }
}
