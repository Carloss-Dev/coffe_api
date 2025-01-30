import { dbConection } from "../db";

export class UserRepository {
  async findAll() {
    try {
      const users = await dbConection.user.findMany();

      return users;
    } catch (error) {
      console.error("Erro no repository ao buscar usuários", error);
      throw error;
    }
  }

  async findbyEmail(email: string) {
    try {
      const user = await dbConection.user.findUnique({
        where: {
          email,
        },
      });

      return user;
    } catch (error) {
      console.error("Erro no repository ao buscar usuário pelo e-mail", error);
      throw error;
    }
  }

  async createUser(userData: PostUserBody) {
    try {
      return await dbConection.user.create({
        data: { ...userData },
      });
    } catch (error) {
      console.error("Erro no repository ao criar usuário", error);
      throw error;
    }
  }
}
