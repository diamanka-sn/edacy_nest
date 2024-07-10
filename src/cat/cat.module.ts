/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { CatController } from "./cat/cat.controller";
import { CatService } from "./cat/cat.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Cat, CatSchema } from "./schemas/cat.schema";
import { Toy, ToySchema } from "./schemas/toy.schema";
import { ToyService } from "./cat/toy.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }]),
    MongooseModule.forFeature([{ name: Toy.name, schema: ToySchema }]),
  ],
  controllers: [CatController],
  providers: [CatService, ToyService],
})
export class CatModule {}
