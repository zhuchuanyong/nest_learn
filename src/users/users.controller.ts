/*
 * @Author: zhuchuanyong
 * @Date: 2021-01-05 19:52:10
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2021-01-09 16:59:06
 * @FilePath: \src\users\users.controller.ts
 */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
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

  // @Get(':id')
  // userParam(@Param() param) {
  //   console.log('param', param);
  //   return param;
  // }

  // 新增用户
  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body(new ValidationPipe()) body: CreateUserDto) {
    console.log('body', body);
    const res = await this.userService.create(body);
    console.log('res', res);
    return res;
  }

  // 查找
  @Get(':id')
  async find(@Param() param) {
    console.log('param', param);
    const res = await this.userService.find(param);
    console.log('res', res);
    return res;
  }

  // 更新
  @Put()
  async update(@Body() body) {
    console.log('body', body);
    return await this.userService.update(body);
  }

  // 删除
  @Delete(':id')
  async del(@Param() param) {
    console.log('param', param);
    const res = await this.userService.del(param);
    console.log('res', res);
    return res;
  }
}
