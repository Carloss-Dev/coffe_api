import type { Request, Response } from "express";
import { UserService } from "../service/user.service";

export class UserController {
  async getAll(__: Request, response: Response) {
    try {
      const users = await new UserService().getAll();

      response.status(200).json(users);
    } catch (error) {
      response.status(500).json({ error: "Erro interno no servidor" });
      console.error("Erro no controller: Buscar usuário", error);
    }
  }

  async postUser(request: Request, response: Response) {
    try {
      const body: PostUserBody = request.body;

      await new UserService().postUser(body);

      response
        .status(200)
        .json({ message: "Usuário cadastrado com sucesso!!" });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "E-mail já cadastrado") {
          console.error("Erro no controller: E-mail já cadastrado");

          response.status(400).json({ error: "E-mail já cadastrado" });
          return;
        }
      }
      response.status(500).json({ error: "Erro interno no servidor" });
      console.error("Erro no controller: Criar usuário", error);
    }
  }
}
