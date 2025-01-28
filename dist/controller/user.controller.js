"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("../service/user.service");
class UserController {
    async getAll(__, response) {
        try {
            const users = new user_service_1.UserService().getAll();
            response.status(200).json(users);
        }
        catch (error) {
            response.status(500).json("Erro interno no servidor");
            console.error(error);
        }
    }
    async postUser(request, response) {
        try {
            const body = request.body;
            console.log(body);
            response.status(500).json("Usuário cadastrado com sucesso!!");
        }
        catch (error) {
            response.status(500).json("Erro interno no servidor");
            console.error(error);
            throw error;
        }
    }
}
exports.UserController = UserController;
