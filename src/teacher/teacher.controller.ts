import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { TeacherService } from './teacher.service';

@Controller('users/teachers')
export class TeacherController {

  constructor(private teacherService: TeacherService) {}

  @Post()
  create(@Body() createTeacher: CreateTeacherDto) {
    return this.teacherService.create(createTeacher);
  }

  @Get()
  findAll() {
    return this.teacherService.findAll();
  }
}
