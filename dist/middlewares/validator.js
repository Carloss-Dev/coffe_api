"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
const fieldValidator_1 = require("../utils/fieldValidator");
class Validator {
    async postUserValidator(request, response, next) {
        try {
            const body = request.body;
            const requireFields = ["name", "password", "email", "image_profile"];
            const invalidFields = (0, fieldValidator_1.fieldValidator)(requireFields, body);
            if (invalidFields && invalidFields?.length > 0) {
                response
                    .status(400)
                    .json({
                    message: `Campo(s) inválido(s): ${invalidFields.join(", ")}`,
                });
                return;
            }
            if (!invalidFields) {
                response.status(400).json({ message: "Erro no corpo da requisição" });
                return;
            }
            if (!body.email || !body.name || !body.password) {
                response.status(400).json({
                    message: "Os campos: e-mail, name e password são obrigatórios",
                });
                return;
            }
            next();
        }
        catch (error) {
            next(error);
        }
    }
}
exports.Validator = Validator;
