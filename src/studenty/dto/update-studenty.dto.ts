import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentyDto } from './create-studenty.dto';

export class UpdateStudentyDto extends PartialType(CreateStudentyDto) {}
