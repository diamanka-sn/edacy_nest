/* eslint-disable prettier/prettier */
import {  IsEmail, IsString, MaxLength, MinLength,  } from "class-validator";
export class CreateUserDto {
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  readonly firstname: string;

  @IsString()
  @MinLength(2)
  @MaxLength(50)
  readonly lastname: string;
  
  @IsEmail()
  readonly email: string;
}
