import { Router } from 'express';
import moviesRouter from './movies';

const apiRouter = Router();

apiRouter.use('/movies', moviesRouter);

export default apiRouter;
