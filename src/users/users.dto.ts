/*
 * @Author: zhuchuanyong
 * @Date: 2021-01-06 17:18:25
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2021-01-09 15:34:55
 * @FilePath: \src\users\users.dto.ts
 */

import { IsString, IsInt } from 'class-validator';
export class CreateUserDto {
  @IsString()
  username: string;

  @IsString()
  password: string;

  // @IsInt()
  // age: number;

  // @IsString({ message: '性别必须为字符' })
  // gender: string;
}
