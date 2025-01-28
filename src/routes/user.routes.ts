import express from "express";
import { UserController } from "../controller/user.controller";
export const userRoutes = express.Router();

const userController = new UserController();

userRoutes.get("/", userController.getAll);
userRoutes.post("/criar", userController.postUser);
