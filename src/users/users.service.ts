/*
 * @Author: zhuchuanyong
 * @Date: 2020-05-07 23:06:18
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2020-05-07 23:16:31
 * @FilePath: \src\users\users.service.ts
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    findOne(username: string): string {
        if (username === 'Kid') {
          return 'Kid is here';
        }
        return 'No one here';
    }
}
