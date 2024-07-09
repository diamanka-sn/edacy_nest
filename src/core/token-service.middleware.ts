/* eslint-disable prettier/prettier */
import { ForbiddenException, Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";


@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
  //  const token = req.headers["token"]
   const user:any = {role:"admin"}
   if(user ===null){
    throw new ForbiddenException("Token invalide")
   }
   req.headers["user"] = user
    next();
  }
}
