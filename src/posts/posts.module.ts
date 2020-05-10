/*
 * @Author: zhuchuanyong
 * @Date: 2020-05-10 16:55:46
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2020-05-10 22:52:35
 * @FilePath: \src\posts\posts.module.ts
 */
import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { Post  } from './post.model';

@Module({
  imports:[
    TypegooseModule.forFeature([Post])
  ],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}
