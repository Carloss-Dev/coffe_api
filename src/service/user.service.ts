import { UserRepository } from "../repository/user.repository";

export class UserService {
  async getAll() {
    try {
      const users = new UserRepository().findAll();

      return users;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
