import type { NextFunction, Request, Response } from "express";

export class Validator {
  async postUserValidator(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    const body: PostUserInterface = request.body;
    console.log(body);
  }
}
