/*
 * @Author: zhuchuanyong
 * @Date: 2020-05-07 22:34:14
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2020-05-10 17:18:15
 * @FilePath: \src\app.controller.ts
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('默认')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
