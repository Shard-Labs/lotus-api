import { lotusRPC } from '../lotus';

export class LotusController {
    async clientImport(path: any){
        console.log(path);
        return await lotusRPC.request('ClientImport', path);
    }
    
    async listDeals() {
        return await lotusRPC.request('ClientListDeals');
    }

    async syncState() {
        return await lotusRPC.request('SyncState');
    }

    async checkHead() {
        return await lotusRPC.request('ChainHead');
    }

    async getDealInfo(cid: string) {
        const structuredCid = {
            '/': cid,
        }
        return await lotusRPC.request('ClientGetDealInfo', structuredCid);
    }
}