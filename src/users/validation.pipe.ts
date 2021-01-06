/*
 * @Author: zhuchuanyong
 * @Date: 2021-01-06 17:42:06
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2021-01-06 20:05:15
 * @FilePath: \src\users\validation.pipe.ts
 */
import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ValidationPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    const metatype = metadata?.metatype;
    console.log('metatype', metatype);
    console.log('value', value);
    console.log('metadata', metadata);
    if (!metatype || !this.toValidate(metatype)) {
      // 如果没有传入验证规则，则不验证，直接返回数据
      return value;
    }

    // 将对象转换为 Class 来验证
    const object = plainToClass(metatype, value);
    console.log('object', object);

    const errors = await validate(object); // 验证错误信息

    console.log('errors', errors);
    if (errors.length > 0) {
      const msg = Object.values(errors[0].constraints)[0]; // 只需要取第一个错误信息并返回即可

      // 返回错误信息
      throw new BadRequestException(`Validation failed: ${msg}`);
    }

    return value;
  }
  private toValidate(metatype: any): boolean {
    const types: any[] = [String, Boolean, Number, Array, Object];
    console.log('metatype', metatype);
    console.log('types', types);
    console.log('!types.includes(metatype)', !types.includes(metatype));
    return !types.includes(metatype);
  }
}
