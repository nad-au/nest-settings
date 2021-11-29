# Nest Settings
## Description

An implementation of [Feature Flags](https://martinfowler.com/articles/feature-toggles.html) using [Nest](https://github.com/nestjs/nest) framework, [PostgreSQL](https://www.postgresql.org/) and [Redis](https://redis.io/).

## Requirements
- [Node](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)

## Installation

```bash
$ npm install
```

Run Docker-Compose to launch the Postgres & Redis containers

``` bash
$ docker-compose up
```

Run migrations to provision your database schema

``` bash
npm run build
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

## Project goals

This project was created to explore [Nest](https://github.com/nestjs/nest) framework and create an application which can be applied in a production setting.
It should demonstrate best-practice in creating fully-featured, testable APIs.

- REST APIs with [OpenApi](https://swagger.io/specification/) support
- Validate requests
- Use ORM and Repository pattern
- Database transactions
- Support database migration
- Shape responses to support [JSend](https://github.com/omniti-labs/jsend) or similar
- Apply [CQRS](https://www.martinfowler.com/bliki/CQRS.html) patterns
- Support caching
- Test coverage at the right levels
- API key Authentication and route guarding
- Logging requests
- Request serialization / transformation

## So what is it then?

Settings is basically a persisted string dictionary where each key/value can represent an application setting. These settings can be anything from simple flags to urls or even serialized json strings.

Settings are typically stored in dedicated settings or configuration files or even environment variables. In this case we have chosen to store settings in a database so that they can be changed frequently.

This project will develop APIs to be able manage Settings.

## So what are feature flags?

Feature flags is an important concept in software development allowing system behaviour to be changed without modifying the code.

Feature flags can be complex because system behaviour can change at the system level, or an a per user basis or for many other reasons.

In the context of this project, Feature flags is a subset of Settings which deals only with simple on/off flags or toggles.

This project aims to demonstrate the application of Feature flags covering typical use cases.

For further information [see](https://martinfowler.com/articles/feature-toggles.html).
 
## License

Nest and this source code is [MIT licensed](LICENSE).
