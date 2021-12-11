param webAppSettings object = {
  appServiceName: ''
  servicePlanName: ''
  sku: ''
}

var location = resourceGroup().location

resource servicePlan 'microsoft.web/serverFarms@2020-06-01' = {
  name: webAppSettings.servicePlanName
  location: location
  sku: {
    name: webAppSettings.sku
  }
  properties: {
    reserved: true
  }
  kind: 'linux'
}

resource appService 'microsoft.web/sites@2020-06-01' = {
  name: webAppSettings.appServiceName
  location: location
  properties: {
    siteConfig: {
      linuxFxVersion: 'NODE|14-lts'
    }
    serverFarmId: servicePlan.id
  }
}
