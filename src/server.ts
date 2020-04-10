import App from './app';

import dotenv from 'dotenv';


import { homeRouter } from './routes/homeRouter';
import bodyParser from 'body-parser';
import errorMiddleware from './middleware/errorMiddleware';
import { loggerMiddleware } from './middleware/logger';
import { initLotus } from './lotus';
import { lotusRouter } from './routes/lotusRouter';

dotenv.config();

const appInstance: App = new App({
    port: parseInt(process.env.SERVER_PORT, 10)
});
appInstance.app.use(bodyParser.json());
appInstance.app.use(bodyParser.urlencoded({ extended: true }));
appInstance.app.use(loggerMiddleware);
appInstance.app.use(errorMiddleware);
appInstance.app.use('/', homeRouter);

initLotus();

appInstance.app.use('/api/', lotusRouter);

appInstance.listen();
