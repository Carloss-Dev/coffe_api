import { dbConection } from "../db";

export class UserRepository {
  async findAll() {
    try {
      const users = await dbConection.user.findMany();

      return users;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
