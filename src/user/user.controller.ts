import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';

@Controller({ path: 'user', version: '1' })
@UseGuards(AuthGuard())
export class User {
  private logger = new Logger('BoardController');

  constructor(private userService: UserService) {}

  @Post('/')
  @UsePipes(ValidationPipe)
  createBoard() {}
}
