import { defineConfig, mergeConfig } from 'vite';
import { createDefaultConfig } from './src/lib/vite.config.default';

export default defineConfig(() =>
  mergeConfig(createDefaultConfig({ test: true }), {
    root: __dirname,
    cacheDir: '../../node_modules/.vite/libs/config'
  })
);
