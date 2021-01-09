/*
 * @Author: zhuchuanyong
 * @Date: 2021-01-09 14:45:04
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2021-01-09 15:13:20
 * @FilePath: \src\users\user.entity.ts
 */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  age: number;

  @Column()
  gender: string;
}
