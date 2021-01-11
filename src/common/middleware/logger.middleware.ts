/*
 * @Author: zhuchuanyong
 * @Date: 2021-01-05 20:35:17
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2021-01-05 20:42:31
 * @FilePath: \src\middleware\logger.middleware.ts
 */
import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('start-LoggerMiddleware');
    next();
    console.log('end-LoggerMiddleware');
  }
}
