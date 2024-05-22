import { defineConfig, mergeConfig } from 'vite';
import { createDefaultConfig } from '../../vite.config.shared';

export default defineConfig(() =>
  mergeConfig(createDefaultConfig({ build: true, test: true }), {
    
    base: './',
    server: {
      port: 4201,
      host: 'localhost',
    },
    preview: {
      port: 4301,
      host: 'localhost',
    },
    cacheDir: '../../node_modules/.vite/apps/app2',
    build: {
      outDir: '../../dist/apps/app2',
    },
    test: {
      cache: {
        dir: '../../node_modules/.vitest/apps/app2',
      },
      coverage: {
        reportsDirectory: '../../coverage/apps/app2',
        provider: 'v8',
      },
    },
  })
);

