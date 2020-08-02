import { Router } from 'express';

const moviesRouter = Router();

moviesRouter.get('/', (req, res) => {
  res.json([
    { id: 1, title: 'Movie 1' },
    { id: 2, title: 'Movie 2' },
  ]);
});

export default moviesRouter;
