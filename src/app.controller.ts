/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { AppService } from "./app.service";
import { Request } from "express";
import { UserNotFoundException } from "./core/exceptions/404/user-not-exception";
import { User } from "./core/models/user";
import { CreateUserDto } from "./shared/users/dto/CreateUserDto";
import { RolesGuard } from "./shared/guards/roles.guard";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() request: Request): string {
    console.log(request.body);
    return this.appService.getHello("Modou");
  }

  @Get('users')
  async findAll(): Promise<any[]> {
    const list = this.appService.getUsers()
    if (list.length === 0) throw new UserNotFoundException();
    return list;
  }

  @UseGuards(RolesGuard)
  @Post('users')
  async create(@Body() u: CreateUserDto) {
    const user = new User()
    user.firstname = u.firstname
    user.email = u.email
    user.lastname = u.lastname
    console.log(user)
    this.appService.addUsers(user);
    return user;
  }
}
