@allowed([
  'production'
])
param environmentName string

var environmentSettings = {
  production: {
    container: {
      containerRegistryName: 'nestsettingsregistry'
      sku: 'Basic'
      tier: 'Basic'
    }
    webApp: {
      appServiceName: 'nest-settings'
      servicePlanName: 'sp-nest-settings'
      sku: 'F1'
      tier: 'Free'
    }
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
