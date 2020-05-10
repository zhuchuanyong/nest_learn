/*
 * @Author: zhuchuanyong
 * @Date: 2020-05-07 23:01:29
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2020-05-10 16:53:22
 * @FilePath: \src\users\users.controller.ts
 */
import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }
  @Post('find-one')
  findOne(@Body() body: any) {
    return this.usersService.findOne(body.username);
  }
}
