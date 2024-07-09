/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { User } from "./core/models/user";

@Injectable()
export class AppService {
  users = [];
  getHello(username: string): string {
    return `Hello world ${username}`;
  }

  getUsers(): User[] {
    return this.users;
  }

  addUsers(user: User) {
    this.users.push(user);
  }
}
