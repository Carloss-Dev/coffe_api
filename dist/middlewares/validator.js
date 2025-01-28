"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validator = void 0;
class Validator {
    async postUserValidator(request, response, next) {
        // const body: PostUserInterface = request.body;
        const oi = {
            email: "",
            image_profile: "",
            name: "",
            password: "",
        };
        console.log(oi);
    }
}
exports.Validator = Validator;
