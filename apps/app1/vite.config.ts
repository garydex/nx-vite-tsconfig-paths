import { defineConfig, mergeConfig } from 'vite';
import { createDefaultConfig } from '@shared/config';

export default defineConfig(() =>
  mergeConfig(createDefaultConfig({ build: true, test: true }), {
    root: __dirname,
    base: './',
    server: {
      port: 4200,
      host: 'localhost',
    },
    preview: {
      port: 4300,
      host: 'localhost',
    },
    cacheDir: '../../node_modules/.vite/apps/app1',
    build: {
      outDir: '../../dist/apps/app1',
    },
    test: {
      cache: {
        dir: '../../node_modules/.vitest/apps/app1',
      },
      coverage: {
        reportsDirectory: '../../coverage/apps/app1',
        provider: 'v8',
      },
    },
  })
);

