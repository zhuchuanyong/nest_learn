/*
 * @Author: zhuchuanyong
 * @Date: 2021-01-05 19:47:36
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2021-01-09 11:41:07
 * @FilePath: \src\app.module.ts
 */
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})

// 使用中间件
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'user', method: RequestMethod.GET });
  }
}
