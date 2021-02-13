# cc-tweaked-type-definitions
TypeScript definitions for CC: Tweaked with TypeScript to Lua transpilation

To be used with [TypeScriptToLua](https://github.com/TypeScriptToLua/TypeScriptToLua).

This is a WIP, we'll add stuff as we go.

# Installation

For now, install from the repository

    npm install -D Artorp/cc-tweaked-type-definitions

To update an existing package to the latest commit (within the same version), remove the package before reinstalling

    npm uninstall -D cc-tweaked-type-definitions
    npm install -D Artorp/cc-tweaked-type-definitions

# Usage

Setup your project with TypeScriptToLua. For instance:

    npm init -y
    npm i -D typescript-to-lua
    npm i -D lua-types

Install this package

    npm install -D Artorp/cc-tweaked-type-definitions

Create your tsconfig.json to point to the types provided by the packages, for instance

```json
{
  "compilerOptions": {
    "target": "esnext",
    "lib": ["esnext"],
    "moduleResolution": "node",
    "types": [
      "typescript-to-lua/language-extensions",
      "lua-types/jit",
      "cc-tweaked-type-definitions"
    ],
    "strict": true,
    "rootDir": "./src",
    "outDir": "./dist"
  },
  "exclude": [
    "node_modules"
  ],
  "tstl": {
    "luaTarget": "JIT"
  }
}
```

Create your initial source file under `src/main.ts` and build with `npx tstl`.

See TypeScriptToLua documentation for details around transpilation.

# Attribution

Forked from https://github.com/Eforen/cc-tweaked-types
