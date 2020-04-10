"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerMiddleware = (req, resp, next) => {
    // tslint:disable-next-line:no-console
    console.log('Request logged:', req.method, req.path);
    next();
};
//# sourceMappingURL=logger.js.map