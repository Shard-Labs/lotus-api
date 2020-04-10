"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const perf_hooks_1 = require("perf_hooks");
const lotusController_1 = require("../controllers/lotusController");
exports.lotusRouter = express_1.Router();
const lotusController = new lotusController_1.LotusController();
// TODO: lotus client import ./your-example-file.txt
// TODO. lotus client local
// TODO: lotus state list-miners
// TODO: lotus client query-ask <miner>
// TODO: lotus client deal <Data CID> <miner> <price> <duration>
// TODO: lotus client list-deals
// TODO: lotus client find <Data CID>
// TODO: lotus client retrieve <Data CID> <outfile>
exports.lotusRouter.get('/syncState', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const start = perf_hooks_1.performance.now();
    try {
        const result = yield lotusController.syncState();
        const time = perf_hooks_1.performance.now() - start;
        res.status(200).json({
            result,
            time
        });
    }
    catch (error) {
        next(error);
    }
}));
exports.lotusRouter.get('/checkHead', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const start = perf_hooks_1.performance.now();
    try {
        const result = yield lotusController.checkHead();
        const time = perf_hooks_1.performance.now() - start;
        res.status(200).json({
            result,
            time
        });
    }
    catch (error) {
        next(error);
    }
}));
// TODO: lotus version
exports.lotusRouter.get('/dealInfo:cid', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const start = perf_hooks_1.performance.now();
    try {
        const result = yield lotusController.getDealInfo(req.params.cid);
        const time = perf_hooks_1.performance.now() - start;
        res.status(200).json({
            result,
            time
        });
    }
    catch (error) {
        next(error);
    }
}));
//# sourceMappingURL=lotusRouter.js.map