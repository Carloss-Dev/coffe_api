"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("../service/user.service");
class UserController {
    async getAll(__, response) {
        try {
            const users = await new user_service_1.UserService().getAll();
            response.status(200).json(users);
        }
        catch (error) {
            response.status(500).json({ error: "Erro interno no servidor" });
            console.error("Erro no controller: Buscar usuário", error);
        }
    }
    async postUser(request, response) {
        try {
            const body = request.body;
            await new user_service_1.UserService().postUser(body);
            response
                .status(200)
                .json({ message: "Usuário cadastrado com sucesso!!" });
        }
        catch (error) {
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
exports.UserController = UserController;
