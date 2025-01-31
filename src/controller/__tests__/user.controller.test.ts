import express from "express";
import request from "supertest";
import { userRoutes } from "../../routes/user.routes";
import { UserService } from "../../service/user.service";

const app = express();

app.use(express.json());
app.use("/usuarios", userRoutes);

jest.mock("../../service/user.service");

describe("POST usuarios/criar", () => {
  const mockPostUser = jest.fn().mockResolvedValueOnce({
    name: "example",
    email: "example@gmail.com",
    password: "example123",
    image_profile: "url_example.png",
  });

  (UserService.prototype.postUser as jest.Mock) = mockPostUser;
  it("Sucesso na criação de um usuário, deve retornar 200 e uma mensagem de sucesso", async () => {
    const response = await request(app).post("/usuarios/criar").send({
      name: "example",
      email: "example@gmail.com",
      password: "example123",
      image_profile: "url_example.png",
    });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Usuário cadastrado com sucesso!!");
    expect(mockPostUser).toHaveBeenCalledTimes(1);
    expect(mockPostUser).toHaveBeenCalledWith({
      name: "example",
      email: "example@gmail.com",
      password: "example123",
      image_profile: "url_example.png",
    });
  });

  it("Deve retornar erro caso os campos do corpo da requisição não estejam adequados", async () => {
    const response = await request(app).post("/usuarios/criar").send({
      name: "example",
      email: "example@gmail.com",
      password: "example123",
      image_profile: "url_example.png",
      extraField: "invalid",
    });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("Campo(s) inválido(s): extraField");
  });

  it("Deve retornar erro caso os campos obrigatórios estejam vazios", async () => {
    const response = await request(app).post("/usuarios/criar").send({
      name: "",
      email: "example@gmail.com",
      password: "example123",
      image_profile: "url_example.png",
    });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe(
      "Os campos: e-mail, name e password são obrigatórios"
    );
  });

  it("Deve retornar um erro caso o e-mail já esteja cadastrado no banco de dados", async () => {
    const mockPostUser2 = jest
      .fn()
      .mockRejectedValueOnce(new Error("E-mail já cadastrado"));
    (UserService.prototype.postUser as jest.Mock) = mockPostUser2;

    const response = await request(app).post("/usuarios/criar").send({
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
      image_profile: "image.jpg",
    });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe("E-mail já cadastrado");
  });

  it("deve retornar erro 500 para erros genéricos", async () => {
    const mockPostUser = jest
      .fn()
      .mockRejectedValueOnce(new Error("Erro genérico"));
    (UserService.prototype.postUser as jest.Mock) = mockPostUser;

    const response = await request(app).post("/usuarios/criar").send({
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
      image_profile: "image.jpg",
    });

    expect(response.status).toBe(500);
    expect(response.body.error).toBe("Erro interno no servidor");
  });
});
