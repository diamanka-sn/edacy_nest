/* eslint-disable prettier/prettier */
import { Controller, Post, Request, UseGuards } from "@nestjs/common";

import { LocalAuthGuard } from "./local-auth.guard";

@Controller("auth")
export class AuthController {
  @UseGuards(LocalAuthGuard)
//   @UseGuards(AuthGuard("local"))
  @Post("login")
  async login(@Request() req) {
    return req.user;
  }
}
