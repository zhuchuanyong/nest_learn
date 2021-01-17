/*
 * @Author: zhuchuanyong
 * @Date: 2021-01-05 19:52:10
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2021-01-17 11:44:35
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
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto } from './users.dto';
import { UsersService } from './users.service';
import { ValidationPipe } from './validation.pipe';
// import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';

@ApiTags('user')
@Controller('user')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll(@Query() query) {
    // console.log('request', request);
    console.log('query', query);
    const data = this.userService.findAll();
    return data;
  }

  // 新增用户
  @ApiOperation({ summary: '新增用户' })
  //  响应参数
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: CreateUserDto,
  })
  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() body: CreateUserDto) {
    console.log('body', body);
    const res = await this.userService.create(body);
    console.log('res', res);
    return res;
  }

  // 查找
  @Get(':id')
  @ApiOperation({ summary: '通过id 查找用户' })
  @ApiParam({ name: 'id' })
  @UseGuards(AuthGuard('jwt'))
  async find(@Param() param) {
    console.log('param', param);
    const res = await this.userService.find(param);
    console.log('res', res);
    return res;
  }

  // 更新
  @Put()
  @ApiOperation({ summary: '更新用户' })
  @ApiBody({ type: CreateUserDto })
  @UseGuards(AuthGuard('jwt'))
  async update(@Body() body) {
    console.log('body', body);
    return await this.userService.update(body);
  }

  // 删除
  @Delete(':id')
  @ApiOperation({ summary: '通过id 删除用户' })
  @ApiParam({ name: 'id' })
  @UseGuards(AuthGuard('jwt'))
  async del(@Param() param) {
    console.log('param', param);
    const res = await this.userService.del(param);
    console.log('res', res);
    return res;
  }
}
