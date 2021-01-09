/*
 * @Author: zhuchuanyong
 * @Date: 2021-01-05 19:52:54
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2021-01-09 11:44:01
 * @FilePath: \src\users\users.service.ts
 */
import { Injectable } from '@nestjs/common';
export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme',
      },
      {
        userId: 2,
        username: 'chris',
        password: 'secret',
      },
      {
        userId: 3,
        username: 'maria',
        password: 'guess',
      },
    ];
  }
  findOne(username: string): Promise<User | undefined> {
    console.log('123', 123);
    return this.users.find((user) => user.username === username);
  }
  findAll() {
    return 'server Findall';
  }
}
