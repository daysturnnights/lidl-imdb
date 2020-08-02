import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const renderHtml = (contents: string, initialState: string) => {
  const html = (
    <html>
      <head>
        <meta charSet="utf-8" />
        <script dangerouslySetInnerHTML={{ __html: initialState }}></script>
      </head>
      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: contents }}></div>
        <script async src="/bundle.js" />
      </body>
    </html>
  );

  return renderToStaticMarkup(html);
};

export default renderHtml;
