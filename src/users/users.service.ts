/*
 * @Author: zhuchuanyong
 * @Date: 2021-01-05 19:52:54
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2021-01-05 20:09:18
 * @FilePath: \src\users\users.service.ts
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findAll() {
    return 'server Findall';
  }
}
