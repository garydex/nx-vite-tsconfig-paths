/// <reference types='vitest' />
import { UserConfig } from 'vite';
import { getPlugins } from './libs/another-lib/src';

export const createDefaultConfig = (targets: {build?: boolean, test?: boolean}) => {
  const config: UserConfig = {
    plugins: [getPlugins()],
    build: {},
    test: {}
  };
  
  if(targets.build) {
    config.build = {
      reportCompressedSize: true,
      commonjsOptions: {
        transformMixedEsModules: true,
      },
      sourcemap: true,
    };
  }

  if(targets.test) {
    config.define = {
      'import.meta.vitest': undefined,
    };
    config.test = {
      globals: true,
      environment: 'jsdom',
      include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      includeSource: ['src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
      reporters: ['default'],
    };
  }

  return config;
};

