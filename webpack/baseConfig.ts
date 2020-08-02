import webpack from 'webpack';
import path from 'path';

const baseConfig: webpack.Configuration = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../dist'),
  },
  context: path.resolve(__dirname, '../src'),
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
    },
  },
};

export default baseConfig;
