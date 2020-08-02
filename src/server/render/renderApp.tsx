import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from '../../client/App';

const renderApp = (context?: object, location?: string | object) => {
  const app = renderToString(
    <StaticRouter context={context} location={location}>
      <App />
    </StaticRouter>
  );

  return app;
};

export default renderApp;
