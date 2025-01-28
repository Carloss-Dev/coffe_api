import type { Request, Response } from "express";
import { UserService } from "../service/user.service";

export class UserController {
  async getAll(__: Request, response: Response) {
    try {
      const users = new UserService().getAll();

      response.status(200).json(users);
    } catch (error) {
      response.status(500).json("Erro interno no servidor");
      console.error(error);
    }
  }

  async postUser(request: Request, response: Response) {
    try {
      const body: PostUserInterface = request.body;

      console.log(body);
      response.status(500).json("Usuário cadastrado com sucesso!!");
    } catch (error) {
      response.status(500).json("Erro interno no servidor");
      console.error(error);
      throw error;
    }
  }
}
