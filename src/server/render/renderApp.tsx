import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { AppState } from '@core/common/rootReducer';
import App from '../../core/App';

const renderApp = (
  store: Store<AppState>,
  context?: Record<string, unknown>,
  location?: string | Record<string, unknown>
) => {
  const app = renderToString(
    <StaticRouter context={context} location={location}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  );

  return app;
};

export default renderApp;
