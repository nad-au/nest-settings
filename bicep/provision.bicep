@secure()
@minLength(10)
param databasePassword string

@allowed([
  'production'
])
param environmentName string

var environment = json(loadTextContent('./env.${environmentName}.json'))

module container 'modules/container_registry.bicep' = {
  name: 'container'
  params: {
    containerRegistrySettings: environment.containerRegistry
  }
}

module webapp 'modules/webapp.bicep' = {
  name: 'webapp'
  params: {
    webAppSettings: env.outputs.environment.webApp
  }
}

module database 'modules/postgres_db.bicep' = {
  name: 'database'
  params: {
    serverSettings: env.outputs.environment.database
    password: databasePassword
  }
}
