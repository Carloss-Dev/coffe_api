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
            console.error(error);
            throw error;
        }
    }
}
exports.UserRepository = UserRepository;
