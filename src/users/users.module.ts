/*
 * @Author: zhuchuanyong
 * @Date: 2021-01-05 19:51:19
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2021-01-09 10:56:02
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
export class UsersModule {}
