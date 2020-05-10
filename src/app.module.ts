/*
 * @Author: zhuchuanyong
 * @Date: 2020-05-07 22:34:14
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2020-05-10 22:48:54
 * @FilePath: \src\app.module.ts
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { TypegooseModule } from "nestjs-typegoose";

@Module({
  imports: [
    TypegooseModule.forRoot("mongodb://localhost:27017/", {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      dbName: "nest-blog-api"
      
    }),
    UsersModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
