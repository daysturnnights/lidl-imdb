import webpack, { HotModuleReplacementPlugin } from 'webpack';
import WebpackBar from 'webpackbar';
import baseConfig from './baseConfig';

const clientConfig: webpack.Configuration = {
  ...baseConfig,
  devtool: 'cheap-eval-source-map',
  target: 'web',
  entry: ['webpack-hot-middleware/client', './client/index'],
  output: {
    filename: 'bundle.js',
  },
  plugins: [new WebpackBar({ name: 'client', color: 'orange' }), new HotModuleReplacementPlugin()],
};

export default clientConfig;
