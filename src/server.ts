import App from './app';

import dotenv from 'dotenv';
import LotusRPCEngine from '@openworklabs/lotus-jsonrpc-engine';

import { homeRouter } from './routes/homeRouter';
import bodyParser from 'body-parser';
import errorMiddleware from './middleware/errorMiddleware';
import { loggerMiddleware } from './middleware/logger';

dotenv.config();

const appInstance: App = new App({
    port: parseInt(process.env.SERVER_PORT, 10)
});
appInstance.app.use(bodyParser.json());
appInstance.app.use(bodyParser.urlencoded({ extended: true }));
appInstance.app.use(loggerMiddleware);
appInstance.app.use(errorMiddleware);
appInstance.app.use('/', homeRouter);

const init = async () => {
    const lotusJWT = process.env.JWT;

    const config = {
        // defaults to local as seen below
        apiAddress: process.env.LOTUS,
        token: lotusJWT,
    }

    const lotusRPC = new LotusRPCEngine(config)

    const chainHead = await lotusRPC.request('ChainHead')
    console.log(chainHead);
}
init();

appInstance.listen();
