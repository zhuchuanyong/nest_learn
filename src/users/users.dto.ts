/*
 * @Author: zhuchuanyong
 * @Date: 2021-01-06 17:18:25
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2021-01-11 00:04:23
 * @FilePath: \src\users\users.dto.ts
 */

import { IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @ApiProperty({ description: '用户名' })
  @IsString()
  username: string;

  @ApiProperty({ description: '密码', default: '123456' })
  @IsString()
  password: string;

  // @IsInt()
  // age: number;

  // @IsString({ message: '性别必须为字符' })
  // gender: string;
}
