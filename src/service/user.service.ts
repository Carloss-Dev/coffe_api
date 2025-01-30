import { UserRepository } from "../repository/user.repository";

export class UserService {
  async getAll() {
    try {
      const users = await new UserRepository().findAll();

      return users;
    } catch (error) {
      console.error("Erro no serviço ao buscar usuário: ", error);
      throw error;
    }
  }

  async postUser(userData: PostUserBody) {
    try {
      const user = await new UserRepository().findbyEmail(userData.email);

      if (user) {
        throw new Error("E-mail já cadastrado");
      }

      await new UserRepository().createUser(userData);

      return user;
    } catch (error) {
      console.error("Erro no serviço ao criar usuário: ", error);
      throw error;
    }
  }
}
