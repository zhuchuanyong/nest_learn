/*
 * @Author: zhuchuanyong
 * @Date: 2021-01-05 19:52:54
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2021-01-11 19:21:27
 * @FilePath: \src\users\users.service.ts
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
export type LUser = any;

@Injectable()
export class UsersService {
  private readonly Lusers: LUser[];

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {
    this.Lusers = [
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
  // 新增用户
  async create(body) {
    const user = await this.usersRepository.save(body);
    if (user) {
      return user;
    } else {
      return '新增失败';
    }
  }

  //查找
  async find(id) {
    const user = await this.usersRepository.findOne(id);
    if (user) {
      return user;
    } else {
      return '用户不存在';
    }
  }

  // 更新
  async update(body) {
    const user = await this.usersRepository.findOne({ id: body.id });

    console.log('user', user);

    if (user) {
      console.log('user', user);
      const res = await this.usersRepository.save(body);
      return res;
    } else {
      return '用户不存在';
    }
  }

  async del(id) {
    const user = await this.usersRepository.delete(id);
    console.log('deluser', user);
    if (user?.affected === 1) {
      return '删除成功';
    } else {
      return '删除失败';
    }
  }

  findOne(username: string): Promise<LUser | undefined> {
    console.log('123', 123);
    return this.Lusers.find((user) => user.username === username);
  }
  findAll() {
    return 'server Findall';
  }
}
