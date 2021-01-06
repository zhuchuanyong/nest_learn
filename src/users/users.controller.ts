/*
 * @Author: zhuchuanyong
 * @Date: 2021-01-05 19:52:10
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2021-01-06 19:42:25
 * @FilePath: \src\users\users.controller.ts
 */
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  UsePipes,
} from '@nestjs/common';
import { CreateUserDto } from './users.dto';
import { UsersService } from './users.service';
import { ValidationPipe } from './validation.pipe';
@Controller('user')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  findAll(@Query() query) {
    // console.log('request', request);
    console.log('query', query);
    const data = this.userService.findAll();
    return `GET获取用户${data}`;
  }

  @Get(':id')
  userParam(@Param() param) {
    console.log('param', param);
    return param;
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body(new ValidationPipe()) body: CreateUserDto) {
    console.log('body', body);
    // @Body(new ValidationPipe())
    return body;
  }
}
