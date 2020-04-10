import { Router, Request, Response, NextFunction } from 'express';
import { performance } from "perf_hooks";
import { LotusController } from '../controllers/lotusController';

export let lotusRouter: Router = Router();

const lotusController: LotusController = new LotusController();

// TODO: lotus client import ./your-example-file.txt

// TODO. lotus client local

// TODO: lotus state list-miners

// TODO: lotus client query-ask <miner>

// TODO: lotus client deal <Data CID> <miner> <price> <duration>

// TODO: lotus client list-deals

// TODO: lotus client find <Data CID>

// TODO: lotus client retrieve <Data CID> <outfile>

lotusRouter.get('/syncState', async (req: Request, res: Response, next: NextFunction) => {
    const start: number = performance.now();
    try {
        const result: any = await lotusController.syncState();
        const time: number = performance.now() - start;
        res.status(200).json({
            result,
            time
        })
    } catch (error) {
        next(error);
    }
});

lotusRouter.get('/checkHead', async (req: Request, res: Response, next: NextFunction) => {
    const start: number = performance.now();
    try {
        const result: any = await lotusController.checkHead();
        const time: number = performance.now() - start;
        res.status(200).json({
            result,
            time
        })
    } catch (error) {
        next(error);
    }
});

// TODO: lotus version

lotusRouter.get('/dealInfo:cid', async (req: Request, res: Response, next: NextFunction) => {
    const start: number = performance.now();
    try {
        const result: any = await lotusController.getDealInfo(req.params.cid);
        const time: number = performance.now() - start;
        res.status(200).json({
            result,
            time
        })
    } catch (error) {
        next(error);
    }
});

