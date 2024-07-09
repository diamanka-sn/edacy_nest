/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { TokenModule } from './token/token.module';

@Module({
  providers: [UserService],
  controllers: [UserController],
  imports: [TokenModule],
})
export class UsersModule {}
