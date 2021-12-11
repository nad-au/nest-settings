param webAppSettings object = {
  appServiceName: ''
  servicePlanName: ''
  sku: ''
  tier: ''
}

param containerRegistryName string

var location = resourceGroup().location

resource containerRegistry 'Microsoft.ContainerRegistry/registries@2021-06-01-preview' existing = {
  name: containerRegistryName
}

var containerRegistryCredentials = containerRegistry.listCredentials()

resource servicePlan 'microsoft.web/serverFarms@2020-06-01' = {
  name: webAppSettings.servicePlanName
  location: location
  sku: {
    name: webAppSettings.sku
    tier: webAppSettings.tier
  }
  kind: 'linux'
}

resource appService 'microsoft.web/sites@2020-06-01' = {
  name: webAppSettings.appServiceName
  location: location
  properties: {
    siteConfig: {
      appSettings: [
        {
          name: 'DOCKER_REGISTRY_SERVER_URL'
          value: 'https://${containerRegistryName}.azurecr.io'
        }
        {
          name: 'DOCKER_REGISTRY_SERVER_USERNAME'
          value: containerRegistryCredentials.username
        }
        {
          name: 'DOCKER_REGISTRY_SERVER_PASSWORD'
          value: containerRegistryCredentials.passwords[0].value
        }
        {
          name: 'WEBSITES_ENABLE_APP_SERVICE_STORAGE'
          value: 'false'
        }
        {
          name: 'WEBSITES_PORT'
          value: '3000'
        }
      ]
      linuxFxVersion: 'DOCKER|${containerRegistryName}.azurecr.io/nestsettings'
    }
    serverFarmId: servicePlan.id
  }
}
