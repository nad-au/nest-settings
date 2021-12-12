@secure()
@minLength(10)
param databasePassword string

var environment = json(loadTextContent('./env.json'))

module container 'modules/container_registry.bicep' = {
  name: 'container'
  params: {
    containerRegistrySettings: environment.containerRegistry
  }
}

module api 'modules/api.bicep' = {
  name: 'api'
  params: {
    apiSettings: environment.api
  }
}

module database 'modules/postgres_db.bicep' = {
  name: 'database'
  params: {
    serverSettings: environment.database
    password: databasePassword
  }
}
