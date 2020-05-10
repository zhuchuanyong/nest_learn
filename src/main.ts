/*
 * @Author: zhuchuanyong
 * @Date: 2020-05-07 22:34:14
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2020-05-10 22:09:56
 * @FilePath: \src\main.ts
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import * as mongoose from 'mongoose';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {

  await mongoose.connect('mongodb://localhost:27017/',
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      dbName: "nest-blog-api"
    }
  );

  const app = await NestFactory.create(AppModule);

  // 使用全局管道
  // 添加验证管道
  app.useGlobalPipes(new ValidationPipe)

  // Swagger接口文档配置
  const options = new DocumentBuilder()
    .setTitle('文档标题')
    .setDescription('api描述')
    .setVersion('1.0') // 版本
    .addTag('cats') // 标签
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-doc', app, document); // /api-doc 接口文档路径


  await app.listen(3000);
}
bootstrap();
