/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Cat>;

@Schema()
export class Cat {
  @Prop({required:true, unique:true})
  name: string;

  @Prop({required:false})
  age: number;

  @Prop({required:true})
  breed: string;
}

export const CatSchema = SchemaFactory.createForClass(Cat);