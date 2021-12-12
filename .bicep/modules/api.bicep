param apiSettings object = {
  appServiceName: ''
  servicePlanName: ''
  sku: ''
}

var location = resourceGroup().location

resource servicePlan 'microsoft.web/serverFarms@2020-06-01' = {
  name: apiSettings.servicePlanName
  location: location
  sku: {
    name: apiSettings.sku
  }
  properties: {
    reserved: true
  }
  kind: 'linux'
}

resource appService 'microsoft.web/sites@2020-06-01' = {
  name: apiSettings.appServiceName
  location: location
  properties: {
    siteConfig: {
      linuxFxVersion: 'NODE|14-lts'
    }
    serverFarmId: servicePlan.id
  }
}
