/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Request, UseGuards } from "@nestjs/common";

import { LocalAuthGuard } from "./local-auth.guard";
import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./jwt-auth.guard";

@Controller("auth")
export class AuthController {
  //   @UseGuards(LocalAuthGuard)
  // //   @UseGuards(AuthGuard("local"))
  //   @Post("login")
  //   async login(@Request() req) {
  //     return req.user;
  //   }
  constructor(private readonly authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post("login")
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
  
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
