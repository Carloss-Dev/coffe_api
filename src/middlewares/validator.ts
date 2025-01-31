import type { NextFunction, Request, Response } from "express";
import { fieldValidator } from "../utils/fieldValidator";

export class Validator {
  async postUserValidator(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const body: PostUserBody = request.body;

      const requireFields = ["name", "password", "email", "image_profile"];

      const invalidFields = fieldValidator(requireFields, body);

      if (invalidFields && invalidFields?.length > 0) {
        console.error(
          `Middleware validator: Campo(s) inválido(s) ${invalidFields.join(", ")}`
        );

        response.status(400).json({
          message: `Campo(s) inválido(s): ${invalidFields.join(", ")}`,
        });

        return;
      }

      if (!invalidFields) {
        console.error("Middleware validator: Erro no corpo da requisição");
        response.status(400).json({ message: "Erro no corpo da requisição" });
        return;
      }

      if (!body.email || !body.name || !body.password) {
        console.error(
          "Middleware validator: Os campos: e-mail, name e password são obrigatórios. Body: ",
          body
        );

        response.status(400).json({
          message: "Os campos: e-mail, name e password são obrigatórios",
        });
        return;
      }

      next();
    } catch (error) {
      next(error);
    }
  }
}
