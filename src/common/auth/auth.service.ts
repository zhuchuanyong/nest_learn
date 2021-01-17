/*
 * @Author: zhuchuanyong
 * @Date: 2021-01-09 10:51:40
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2021-01-17 11:32:38
 * @FilePath: \src\common\auth\auth.service.ts
 */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  // 检索用户并验证密码
  async validateUser(username: string, pass: string): Promise<any> {
    console.log('validateUser');
    const user = await this.usersService.loginfind(username, pass);
    if (user) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }

  async login(user: any) {
    console.log('auth loginuser', user);
    const payload = { username: user.username, sub: user.id };

    const obj = {
      access_token: this.jwtService.sign(payload),
    };
    console.log('obj  jwt', obj);
    return obj;
  }
}
