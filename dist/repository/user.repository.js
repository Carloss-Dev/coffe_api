"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const db_1 = require("../db");
class UserRepository {
    async findAll() {
        try {
            const users = await db_1.dbConection.user.findMany();
            return users;
        }
        catch (error) {
            console.error("Erro no repository ao buscar usuários", error);
            throw error;
        }
    }
    async findbyEmail(email) {
        try {
            const user = await db_1.dbConection.user.findUnique({
                where: {
                    email,
                },
            });
            return user;
        }
        catch (error) {
            console.error("Erro no repository ao buscar usuário pelo e-mail", error);
            throw error;
        }
    }
    async createUser(userData) {
        try {
            return await db_1.dbConection.user.create({
                data: { ...userData },
            });
        }
        catch (error) {
            console.error("Erro no repository ao criar usuário", error);
            throw error;
        }
    }
}
exports.UserRepository = UserRepository;
