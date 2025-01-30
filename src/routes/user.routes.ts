import express from "express";
import { UserController } from "../controller/user.controller";
import { Validator } from "../middlewares/validator";
export const userRoutes = express.Router();

const userController = new UserController();
const validator = new Validator();

userRoutes.get("/", userController.getAll);
userRoutes.post("/criar", validator.postUserValidator, userController.postUser);
