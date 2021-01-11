/*
 * @Author: zhuchuanyong
 * @Date: 2021-01-05 21:52:54
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2021-01-12 00:25:32
 * @FilePath: \src\main.ts
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { HttpExceptionFilter } from './common/filter/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // swagger 配置
  const options = new DocumentBuilder()
    .setTitle('五洋捉鳖项目')
    .setDescription('上课九天揽月，下可五洋捉鳖')
    .setVersion('1.0')
    .addTag('user')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
