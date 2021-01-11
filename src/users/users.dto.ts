/*
 * @Author: zhuchuanyong
 * @Date: 2021-01-06 17:18:25
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2021-01-11 19:07:19
 * @FilePath: \src\users\users.dto.ts
 */

import { IsString, IsInt, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
export class CreateUserDto {
  @ApiProperty({ description: '用户名' })
  @IsString()
  username: string;

  @ApiProperty({ description: '密码', default: '123456' })
  @IsString()
  password: string;

  @ApiPropertyOptional({ description: '年龄', default: 20 })
  @IsOptional()
  @IsInt()
  age: number;

  @ApiPropertyOptional({ description: '性别', default: '男' })
  @IsOptional()
  @IsString({ message: '性别必须为字符' })
  gender: string;
}
