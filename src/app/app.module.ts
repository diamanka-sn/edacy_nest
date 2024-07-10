/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { SharedModule } from "../shared/shared.module";
import { CoreModule } from "../core/core.module";
import { LoggerMiddleware } from "../core/logger.middleware";

import { MongooseModule } from "@nestjs/mongoose";
import { CatModule } from "src/cat/cat.module";
@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/edacydb"),
    SharedModule,
    CoreModule,
    CatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports:[MongooseModule]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("/");
  }
}
