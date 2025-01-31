"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const supertest_1 = __importDefault(require("supertest"));
const user_routes_1 = require("../../routes/user.routes");
const user_service_1 = require("../../service/user.service");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Registre as rotas
app.use("/usuarios", user_routes_1.userRoutes);
// Mock da função de UserService para controlar o comportamento da lógica de negócio nos testes
jest.mock("../../service/user.service");
describe("POST /usuarios/criar", () => {
    //? Método para testar um post que ocorreu com sucesso
    it("deve criar um usuário com sucesso", async () => {
        const mockPostUser = jest.fn().mockResolvedValueOnce({
            name: "John Doe",
            email: "john@example.com",
            password: "password123",
            image_profile: "image.jpg",
        });
        user_service_1.UserService.prototype.postUser = mockPostUser;
        const response = await (0, supertest_1.default)(app).post("/usuarios/criar").send({
            name: "John Doe",
            email: "john@example.com",
            password: "password123",
            image_profile: "image.jpg",
        });
        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Usuário cadastrador com sucesso!!");
        expect(mockPostUser).toHaveBeenCalledWith({
            name: "John Doe",
            email: "john@example.com",
            password: "password123",
            image_profile: "image.jpg",
        });
    });
    //? Método para testar um post onde um e-mail já foi registrado
    it("deve retornar erro quando o e-mail já estiver cadastrado", async () => {
        const mockPostUser = jest
            .fn()
            .mockRejectedValueOnce(new Error("E-mail já cadastrado"));
        user_service_1.UserService.prototype.postUser = mockPostUser;
        const response = await (0, supertest_1.default)(app).post("/usuarios/criar").send({
            name: "John Doe",
            email: "john@example.com",
            password: "password123",
            image_profile: "image.jpg",
        });
        expect(response.status).toBe(400);
        expect(response.body.error).toBe("E-mail já cadastrado");
    });
    it("deve retornar erro 400 quando os campos obrigatórios não forem fornecidos", async () => {
        const response = await (0, supertest_1.default)(app).post("/usuarios/criar").send({
            name: "John Doe",
            password: "password123",
        });
        expect(response.status).toBe(400);
        expect(response.body.message).toBe("Os campos: e-mail, name e password são obrigatórios");
    });
});
