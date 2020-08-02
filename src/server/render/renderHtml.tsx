import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const renderHtml = (contents: string) => {
  const html = (
    <html>
      <head>
        <meta charSet="utf-8" />
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
