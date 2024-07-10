/* eslint-disable prettier/prettier */
import { IsString } from "class-validator";

export class CreateToyDto {
   
    @IsString()
    name:string;
    @IsString()
    owner:string
}