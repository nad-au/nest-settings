@secure()
@minLength(10)
param databasePassword string

@allowed([
  'production'
])
param environmentName string

module env './env.bicep' = {
  name: 'env'
  params: {
    environmentName: environmentName
  }
}

module container 'modules/container_registry.bicep' = {
  name: 'container'
  params: {
    containerRegistrySettings: env.outputs.environment.containerRegistry
  }
}

module webapp 'modules/webapp.bicep' = {
  name: 'webapp'
  params: {
    webAppSettings: env.outputs.environment.webApp
    containerRegistryName: env.outputs.environment.containerRegistry.containerRegistryName
  }
}

module database 'modules/postgres_db.bicep' = {
  name: 'database'
  params: {
    serverSettings: env.outputs.environment.database
    password: databasePassword
  }
}
