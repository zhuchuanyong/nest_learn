/*
 * @Author: zhuchuanyong
 * @Date: 2021-01-05 19:47:36
 * @LastEditors: zhuchuanyong
 * @LastEditTime: 2021-01-09 14:17:54
 * @FilePath: \src\app.controller.ts
 */
import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthService } from './common/auth/auth.service';
import { LocalAuthGuard } from './common/auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    console.log('app controller  login');
    return this.authService.login(req.user);
    // return req.user;
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
