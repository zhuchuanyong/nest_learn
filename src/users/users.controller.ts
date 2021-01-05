/*
 * @Author: zhuchuanyong
 * @Date: 2021-01-05 19:52:10
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2021-01-05 20:16:52
 * @FilePath: \src\users\users.controller.ts
 */
import { Body, Get, Param, Post, Query, Req } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
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
  async create(@Body() body) {
    console.log('body', body);
    return body;
  }
}
