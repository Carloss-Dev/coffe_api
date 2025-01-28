import dotenv from "dotenv";
import express from "express";
import { userRoutes } from "./routes/user.routes";

dotenv.config();
const app = express();
const port = process.env.PORT ? +process.env.PORT : undefined;

app.use(express.json());
app.use("/usuarios", userRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em: http://localhost:${port}`);
});
