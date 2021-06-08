import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { version } from '~/package.json';

import { InputDto } from './input.dto';

@ApiTags('Users')
@Controller('users')
export class AppController {
  @Get()
  getVersion() {
    return version;
  }

  @Get('foo')
  foo(@Query() query: InputDto) {
    return query;
  }
}