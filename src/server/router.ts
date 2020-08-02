import { Request, Response } from 'express-serve-static-core';
import renderApp from './render/renderApp';
import renderHtml from './render/renderHtml';

export default (req: Request, res: Response) => {
  const context = {};

  const content = renderApp(context, req.url);

  res.send(renderHtml(content));
};
