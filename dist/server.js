"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const user_routes_1 = require("./routes/user.routes");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT ? +process.env.PORT : undefined;
app.use(express_1.default.json());
app.use("/usuarios", user_routes_1.userRoutes);
app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
});
