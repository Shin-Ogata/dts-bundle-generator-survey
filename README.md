## dts-bundle-generator-survey

Environment for reproducing the issue.
- [timocov/dts-bundle-generator issue#130](https://github.com/timocov/dts-bundle-generator/issues/130)

### issue sammary
- Reproduce with `dts-bundle-generator` `v8.1.0`, `v8.1.1`. It does not reproduce in `v8.0.1`.
- Based on our research so far, this issue appears to be caused by code that falls under [Known Limitations](https://github.com/timocov/dts-bundle-generator#known-limitations).
```ts
// rename case
import * as request from './request';
export { request };
```
  - Since v8.1, `Something went wrong` error is issued in some situations.

## How to setup

- install npm
```sh
cd <repo-root>
npm ci
```

- sub packages setup
```sh
npm run packages:setup
```

If you want to clean up your packages, you can use the run script below.
```sh
npm run packages:clean
```

## How to reproduce issue

- case to reproduce
```sh
npm run reproduce
# dts-bundle-generator --config ./packages/framework/lib-web/dts-bundle-config.js
```

- cases that do not reproduce
```sh
npm run not-reproduce
# dts-bundle-generator --config ./packages/framework/lib-worker/dts-bundle-config.js
```