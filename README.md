# Nest Settings
## Description

An implementation of Feature Flags using [Nest](https://github.com/nestjs/nest) framework, PostgreSQL and Redis.

## Requirements
- Node
- Docker
## Installation

```bash
$ npm install
```

Run Docker-Compose to launch the Postgres & Redis containers

``` bash
$ docker-compose up
```

Run migrations to provision your database schema.

``` bash
npm run typeorm migration:run
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest and this source code is [MIT licensed](LICENSE).
