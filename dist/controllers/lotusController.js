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
const lotus_1 = require("../lotus");
class LotusController {
    checkHead() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield lotus_1.lotusRPC.request('ChainHead');
        });
    }
    getDealInfo(cid) {
        return __awaiter(this, void 0, void 0, function* () {
            const structuredCid = {
                '/': cid,
            };
            return yield lotus_1.lotusRPC.request('ClientGetDealInfo', structuredCid);
        });
    }
    syncState() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield lotus_1.lotusRPC.request('SyncState');
        });
    }
}
exports.LotusController = LotusController;
//# sourceMappingURL=lotusController.js.map