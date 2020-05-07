/*
 * @Author: zhuchuanyong
 * @Date: 2020-05-07 23:09:40
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2020-05-07 23:23:33
 * @FilePath: \src\users\users.module.ts
 */
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule { }
