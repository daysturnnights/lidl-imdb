import webpack from 'webpack';
import paths from './paths';

const baseConfig: webpack.Configuration = {
  mode: 'development',
  output: {
    path: paths.dist,
  },
  context: paths.src,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      '@client': paths.client,
      '@server': paths.server,
      '@core': paths.core,
    },
  },
};

export default baseConfig;
