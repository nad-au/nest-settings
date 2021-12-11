param containerRegistrySettings object = {
  containerRegistryName: ''
  sku: ''
  tier: ''
}

resource registry 'Microsoft.ContainerRegistry/registries@2021-08-01-preview' = {
  name: containerRegistrySettings.containerRegistryName
  location: resourceGroup().location 
  tags: {
    displayName: 'Container Registry'
    'container.registry': containerRegistrySettings.containerRegistryName
  }
  sku: {
    name: containerRegistrySettings.sku
    tier: containerRegistrySettings.tier
  }
  properties: {
    adminUserEnabled: true
  }
}
