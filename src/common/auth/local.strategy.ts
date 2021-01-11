/*
 * @Author: zhuchuanyong
 * @Date: 2021-01-09 11:01:24
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2021-01-09 13:50:03
 * @FilePath: \src\auth\local.strategy.ts
 */

import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
// 本地身份验证策略

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    console.log('auth local strategy validate');
    const user = await this.authService.validateUser(username, password);

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
