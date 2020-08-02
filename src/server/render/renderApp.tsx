import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from '../../client/App';

const renderApp = (context?: Record<string, unknown>, location?: string | Record<string, unknown>) => {
  const app = renderToString(
    <StaticRouter context={context} location={location}>
      <App />
    </StaticRouter>
  );

  return app;
};

export default renderApp;
