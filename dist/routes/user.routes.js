"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controller/user.controller");
const validator_1 = require("../middlewares/validator");
exports.userRoutes = express_1.default.Router();
const userController = new user_controller_1.UserController();
const validator = new validator_1.Validator();
exports.userRoutes.get("/", userController.getAll);
exports.userRoutes.post("/criar", validator.postUserValidator, userController.postUser);
