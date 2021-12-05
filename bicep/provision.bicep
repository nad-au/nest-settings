@secure()
@minLength(10)
param password string

module env './env.bicep' = {
  name: 'env'
  params: {
    environmentName: 'prod'
  }
}

module database 'modules/postgres_db.bicep' = {
  name: 'database'
  params: {
    serverSettings: env.outputs.environment.database
    password: password
  }
}
