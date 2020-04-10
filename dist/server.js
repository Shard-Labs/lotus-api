"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const dotenv_1 = __importDefault(require("dotenv"));
const homeRouter_1 = require("./routes/homeRouter");
const body_parser_1 = __importDefault(require("body-parser"));
const errorMiddleware_1 = __importDefault(require("./middleware/errorMiddleware"));
const logger_1 = require("./middleware/logger");
const lotus_1 = require("./lotus");
const lotusRouter_1 = require("./routes/lotusRouter");
dotenv_1.default.config();
const appInstance = new app_1.default({
    port: parseInt(process.env.SERVER_PORT, 10)
});
appInstance.app.use(body_parser_1.default.json());
appInstance.app.use(body_parser_1.default.urlencoded({ extended: true }));
appInstance.app.use(logger_1.loggerMiddleware);
appInstance.app.use(errorMiddleware_1.default);
appInstance.app.use('/', homeRouter_1.homeRouter);
lotus_1.initLotus();
appInstance.app.use('/api/', lotusRouter_1.lotusRouter);
appInstance.listen();
//# sourceMappingURL=server.js.map