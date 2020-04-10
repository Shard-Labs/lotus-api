import LotusRPCEngine from '@openworklabs/lotus-jsonrpc-engine';

export let lotusRPC;

export function initLotus() {
    const lotusJWT = process.env.JWT;

    const config = {
        apiAddress: process.env.LOTUS,
        token: lotusJWT,
    }
    lotusRPC = new LotusRPCEngine(config)
}