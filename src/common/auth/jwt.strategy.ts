/*
 * @Author: zhuchuanyong
 * @Date: 2021-01-09 14:13:05
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2021-01-09 14:14:16
 * @FilePath: \src\auth\jwt.strategy.ts
 */

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
