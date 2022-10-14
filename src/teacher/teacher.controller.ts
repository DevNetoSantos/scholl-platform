import { Body, Controller, Post } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { TeacherService } from './teacher.service';

@Controller('users/teachers')
export class TeacherController {

  constructor(private teacherService: TeacherService) {}

  @Post()
  create(@Body() createTeacher: CreateTeacherDto) {
    return this.teacherService.create(createTeacher);
  }
}
