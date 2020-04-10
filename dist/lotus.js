"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lotus_jsonrpc_engine_1 = __importDefault(require("@openworklabs/lotus-jsonrpc-engine"));
function initLotus() {
    const lotusJWT = process.env.JWT;
    const config = {
        apiAddress: process.env.LOTUS,
        token: lotusJWT,
    };
    exports.lotusRPC = new lotus_jsonrpc_engine_1.default(config);
}
exports.initLotus = initLotus;
//# sourceMappingURL=lotus.js.map