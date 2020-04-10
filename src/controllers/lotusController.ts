import { lotusRPC } from '../lotus';

export class LotusController {
    async checkHead() {
        return await lotusRPC.request('ChainHead');
    }

    async getDealInfo(cid: string) {
        const structuredCid = {
            '/' : cid,
        }
        return await lotusRPC.request('ClientGetDealInfo', structuredCid);
    }

    async syncState() {
        return await lotusRPC.request('SyncState');
    }
}