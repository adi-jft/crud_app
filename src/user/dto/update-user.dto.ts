import { PartialType } from '@nestjs/mapped-types';
import { CreateTracingOptions } from 'trace_events';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    id: number;
    name: string;
    email: string;
}
