import type { Request, Response } from "express";
import { UserService } from "../service/user.service";

export class UserController {
  async getAll(__: Request, response: Response) {
    try {
      const users = await new UserService().getAll();

      response.status(200).json(users);
    } catch (error) {
      response.status(500).json({ error: "Erro interno no servidor" });
      console.error("Erro no controller ao buscar usuário", error);
    }
  }

  async postUser(request: Request, response: Response) {
    try {
      const body: PostUserBody = request.body;

      const user = await new UserService().postUser(body);

      console.log("controller ", user);

      response
        .status(200)
        .json({ message: "Usuário cadastrador com sucesso!!" });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "E-mail já cadastrado") {
          response.status(400).json({ error: "E-mail já cadastrado" });

          return;
        }
      }
      response.status(500).json({ error: "Erro interno no servidor" });
      console.error("Erro no controller ao criar usuário", error);
    }
  }
}
