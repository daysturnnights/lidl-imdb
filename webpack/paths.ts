import path from 'path';

const root = process.cwd();

const src = path.resolve(root, 'src');

const client = path.resolve(src, 'client');

const server = path.resolve(src, 'server');

const core = path.resolve(src, 'core');

const dist = path.resolve(root, 'dist');

export default {
  root,
  src,
  client,
  server,
  core,
  dist,
};
