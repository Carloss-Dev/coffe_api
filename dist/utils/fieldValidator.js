"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fieldValidator = fieldValidator;
function fieldValidator(requiredFields, receveidFields) {
    if (typeof receveidFields === "object" &&
        !Array.isArray(receveidFields) &&
        receveidFields) {
        const receveidFieldsAtt = Object.keys(receveidFields);
        const invalidFields = receveidFieldsAtt.filter((field) => !requiredFields.includes(field));
        return invalidFields;
    }
    return undefined;
}
