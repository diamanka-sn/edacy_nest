/* eslint-disable prettier/prettier */
import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() request:Request): string {
    console.log(request.body)
    return this.appService.getHello();
  }
}
