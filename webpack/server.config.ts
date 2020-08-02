import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';
import WebpackBar from 'webpackbar';
import baseConfig from './baseConfig';

const serverConfig: webpack.Configuration = {
  ...baseConfig,
  entry: ['./server/index'],
  target: 'node',
  node: {
    __filename: false,
    __dirname: false,
  },
  externals: [nodeExternals()],
  output: {
    filename: 'server.js',
  },
  plugins: [new WebpackBar({ name: 'server', color: 'blue' })],
  stats: 'errors-only',
};

export default serverConfig;
