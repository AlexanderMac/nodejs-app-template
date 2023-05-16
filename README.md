# repo-template

[![Build Status](https://github.com/AlexanderMac/repo-template/workflows/CI/badge.svg)](https://github.com/AlexanderMac/repo-template/actions?query=workflow%3ACI)
[![MIT license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/repo-template.svg)](https://badge.fury.io/js/repo-template)

### Features
TODO
- Node > v16, pnpm
- Typescript
- ESlint, Mocha, Prettier
- Husky and lint-staged

### Usage
```sh
# Clone this repo:
git clone https://github.com/AlexanderMac/repo-template

# Init your repo:
cd repo-template && rm -rf .git && git init

# Install pnpm when needed
npm install -g pnpm

pnpm install  # install dependencies
pnpm start    # start app in watching mode (src/index.ts)
pnpm lint     # run linter
pnpm prettify # run prettier
pnpm format   # run linter and prettier
pnpm test     # run tests
pnpm coverage # code coverage
```

### API
TODO

### License
Licensed under the MIT license.

### Author
Alexander Mac
