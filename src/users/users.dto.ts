/*
 * @Author: zhuchuanyong
 * @Date: 2021-01-06 17:18:25
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2021-01-06 17:25:19
 * @FilePath: \src\users\users.dto.ts
 */

import { IsString, IsInt } from 'class-validator';
export class CreateUserDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  gender: string;
}
