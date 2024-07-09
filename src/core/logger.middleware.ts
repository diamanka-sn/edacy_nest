/* eslint-disable prettier/prettier */
import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

import * as Sentry from "@sentry/node";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log("Request...", req.body, req.headers, req.query, req.params);
    Sentry.captureMessage("Request... "+ Date() + req.body + " headers" + req.headers);
    next();
  }
}
