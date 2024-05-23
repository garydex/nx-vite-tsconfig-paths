# NxViteTsconfigPaths

This is an Nx workspace to demonstrate extending vite.config.ts files using imports from TSConfig paths.

By default, Vite assumes all imports in a config file live in a node_modules folder and need a package.json file. This is fine for package-based repos, but does not work in integrated repos.

This repo demonstrates an open PR I have created (https://github.com/vitejs/vite/pull/17286) that should solve the problem - and opens some future opportunities for streamlining the config generated in Nx workspaces 😁

## Usage

```
npm install
npx nx run-many -t serve
```

app1 will run on http://localhost:4200<br>
app2 will run on http://localhost:4201

There are two methods demonstrated here, both of which expose a default config that can imported in the project's vite.config.ts and extended using `mergeConfig`.

1. `vite.config.default.ts` in `libs/config`. See [the app1 vite config](apps/app1/vite.config.ts) for usage.

1. `vite.config.shared.ts` in the project root. See [the app2 vite config](apps/app2/vite.config.ts) for usage.

For the first option, the TSConfig paths are resolved correctly and the imports are aliased. For the second, we have to use relative paths for the imports - not as pretty, but still works.