"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_repository_1 = require("../repository/user.repository");
class UserService {
    async getAll() {
        try {
            const users = new user_repository_1.UserRepository().findAll();
            return users;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
}
exports.UserService = UserService;
