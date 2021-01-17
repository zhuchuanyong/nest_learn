/*
 * @Author: zhuchuanyong
 * @Date: 2021-01-05 19:52:54
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2021-01-17 11:26:25
 * @FilePath: \src\users\users.service.ts
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  // 新增用户
  async create(body) {
    const user = await this.usersRepository.save(body);
    if (user) {
      return user;
    } else {
      return '新增失败';
    }
  }

  //根据id查找用户
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

  // 根据用户名查找用户
  async loginfind(username: string, password: string): Promise<any> {
    const user = await this.usersRepository.findOne({
      where: { username, password },
    });

    return user;
  }
  // 获取全部用户
  async findAll() {
    const user = await this.usersRepository.find();
    console.log('user', user);
    if (user) {
      return user;
    } else {
      return '用户不存在';
    }
  }
}
