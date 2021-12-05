@allowed([
  'production'
])
param environmentName string

var environmentSettings = {
  production: {
    database: {
      serverName: 'pg-nest-settings'
      databaseName: 'nest-settings'
      username: 'nestadmin'
      sku: 'Standard_B1ms'
      tier: 'Burstable'
      version: '13'
    }
  }
}

output environment object = environmentSettings[environmentName]
