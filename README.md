# nestjs-swagger-repro
Reproduction repository for relative-path bug in [nestjs/swagger#846](https://github.com/nestjs/swagger/issues/846)

# FIXED
Fixed by add `"preserveSymlinks": true` to `tsconfig.json`

## How to reproduce

```
yarn
yarn build
yarn start
```
