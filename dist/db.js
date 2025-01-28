"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConection = void 0;
const client_1 = require("@prisma/client");
exports.dbConection = new client_1.PrismaClient();
