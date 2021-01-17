/*
 * @Author: zhuchuanyong
 * @Date: 2021-01-09 14:13:05
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2021-01-17 10:29:29
 * @FilePath: \src\common\auth\jwt.strategy.ts
 */

// jwt.strategy.ts 用于需要身份验证的接口
// local.Strategy.ts 用于登录接口 没有身份验证的接口

import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    console.log('jwt strategy validate');
    return { userId: payload.sub, username: payload.username };
  }
}
