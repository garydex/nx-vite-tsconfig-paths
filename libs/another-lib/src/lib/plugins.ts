import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { PluginOption } from 'vite';

export const getPlugins: (() => PluginOption[] | { name: string; configResolved(config: any): void; resolveId(importPath: string): string; }[]) = () => {
  return [react(), nxViteTsPaths()];
}
