/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Param, Post, UseGuards } from "@nestjs/common";
import { CatService } from "./cat.service";
import { CreateCatDto } from "./dto/cat-dto";
import { Cat } from "../schemas/cat.schema";
import { CreateToyDto } from "./dto/toy-dto";
import { ToyService } from "./toy.service";
import { Toy } from "../schemas/toy.schema";
import { JwtAuthGuard } from "src/core/auth/jwt-auth.guard";

@Controller("cats")
export class CatController {
  constructor(
    private readonly catService: CatService,
    private readonly toyService: ToyService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() cat: CreateCatDto) {
    return this.catService.create(cat);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catService.findAll();
  }

  @Post("toys")
  async createToys(@Body() toy: CreateToyDto) {
    return this.toyService.create(toy);
  }

  @Get(":id/toys")
  async findAllToys(@Param('id') catId:string): Promise<Toy[]> {
    return this.toyService.findByCatId(catId);
  }


  @Get("all-toys")
  async findAllCatWithOwner(): Promise<any[]> {
    return this.toyService.findAllJointure()
  }
}
