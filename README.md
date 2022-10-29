## Pre Requisites

- Global 
  - Installation - [Commitizen](https://github.com/commitizen/cz-cli#installing-the-command-line-tool)

## Description

Template repository using the following technologies: 

### Environment

- [Node](https://nodejs.org/en/)
- [Nest](https://docs.nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Serverless Framework](https://www.serverless.com/framework/docs)
- [AWS](https://docs.aws.amazon.com/)

### Lint

- [ESLint](https://eslint.org/docs/user-guide/configuring/)
- [Commitlint](https://github.com/conventional-changelog/commitlint)
- [CommitiZen](https://github.com/commitizen/cz-cli)
- [Husky](https://typicode.github.io/husky/#/)
- [Lint Staged](https://github.com/okonet/lint-staged)

## Installation

```bash
$ yarn
```

## Running the app

```bash
# development
$ yarn dev

# start serverless offline
$ yarn start

# invoke a single function
$ yarn invoke <name> -p path/to/data.json -s <stage> --aws-profile <profile>

# deploy serverless
$ yarn deploy <stage> --aws-profile <profile>

# serverless deployment info
$ yarn inspect <stage> --aws-profile <profile>

# remove deploy
$ yarn undeploy <stage> --aws-profile <profile>
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```
