"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_repository_1 = require("../repository/user.repository");
class UserService {
    async getAll() {
        try {
            const users = await new user_repository_1.UserRepository().findAll();
            return users;
        }
        catch (error) {
            console.error("Erro no serviço ao buscar usuário: ", error);
            throw error;
        }
    }
    async postUser(userData) {
        try {
            const user = await new user_repository_1.UserRepository().findbyEmail(userData.email);
            if (user) {
                throw new Error("E-mail já cadastrado");
            }
            await new user_repository_1.UserRepository().createUser(userData);
            return user;
        }
        catch (error) {
            console.error("Erro no serviço ao criar usuário: ", error);
            throw error;
        }
    }
}
exports.UserService = UserService;
