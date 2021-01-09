/*
 * @Author: zhuchuanyong
 * @Date: 2021-01-05 19:51:19
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2021-01-09 14:47:14
 * @FilePath: \src\users\users.module.ts
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
