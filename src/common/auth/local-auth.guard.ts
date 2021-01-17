/*
 * @Author: zhuchuanyong
 * @Date: 2021-01-09 11:18:25
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2021-01-17 10:47:36
 * @FilePath: \src\common\auth\local-auth.guard.ts
 */
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// 对 AuthGuard('local') 进行封装

// @UseGuards(AuthGuard('local'))
// @UseGuards(LocalAuthGuard) 使用时这两种都可以
// 第一个是默认的
// 第二个是继承默认的又封装的方法

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}
