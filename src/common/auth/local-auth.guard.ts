/*
 * @Author: zhuchuanyong
 * @Date: 2021-01-09 11:18:25
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2021-01-09 11:28:21
 * @FilePath: \src\auth\local-auth.guard.ts
 */
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}
