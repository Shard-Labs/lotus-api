"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpException_1 = __importDefault(require("../exceptions/HttpException"));
const NotFound_1 = __importDefault(require("../exceptions/NotFound"));
const BadRequest_1 = __importDefault(require("../exceptions/BadRequest"));
function errorMiddleware(error, request, response, next) {
    if (error.message.includes("call exception")) {
        castError(new NotFound_1.default(error.message), request, response, next);
    }
    else if (error.message.includes("network does support") || error.message.includes("invalid input argument")) {
        castError(new BadRequest_1.default(error.message), request, response, next);
    }
    else {
        castError(new HttpException_1.default(500, error.message), request, response, next);
    }
}
exports.errorMiddleware = errorMiddleware;
function castError(error, request, response, next) {
    const status = error.status || 500;
    const message = error.message || "Something went wrong";
    response
        .status(status)
        .send({
        status,
        message,
    });
}
exports.default = errorMiddleware;
//# sourceMappingURL=errorMiddleware.js.map