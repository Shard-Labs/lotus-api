"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
exports.homeRouter = express_1.Router();
exports.homeRouter.get('/', (req, res) => {
    res.send("Welcome to template app");
});
//# sourceMappingURL=homeRouter.js.map