import { Request, Response } from 'express-serve-static-core';
import { createStore } from '@core/common/store';
import renderApp from './render/renderApp';
import renderHtml from './render/renderHtml';

export default (req: Request, res: Response) => {
  const context = {};

  const store = createStore();

  const content = renderApp(store, context, req.url);

  const state = store.getState();
  const initialState = `window.__REDUX_STATE__=${JSON.stringify(state)}`;

  res.send(renderHtml(content, initialState));
};
