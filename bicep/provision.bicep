@secure()
@minLength(10)
param password string

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

module database 'modules/postgres_db.bicep' = {
  name: 'database'
  params: {
    serverSettings: env.outputs.environment.database
    password: password
  }
}
