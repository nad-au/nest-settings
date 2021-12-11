param serverSettings object = {
  serverName: ''
  databaseName: ''
  username: ''
  sku: ''
  tier: ''
  version: ''
}

@secure()
@minLength(10)
param password string

resource database_server 'Microsoft.DBforPostgreSQL/flexibleServers@2021-06-01' = {
  name: serverSettings.serverName
  location: resourceGroup().location 
  sku: {
    name: serverSettings.sku
    tier: serverSettings.tier
  }
  properties: {
    version: serverSettings.version
    administratorLogin: serverSettings.username
    administratorLoginPassword: password
    storage: {
      storageSizeGB: 128
    }
    backup: {
      backupRetentionDays: 7
      geoRedundantBackup: 'Disabled'
    }
    network: {}
    highAvailability: {
      mode: 'Disabled'
    }
    maintenanceWindow: {
      customWindow: 'Disabled'
      dayOfWeek: 0
      startHour: 0
      startMinute: 0
    }
  }
}

resource database 'Microsoft.DBforPostgreSQL/flexibleServers/databases@2021-06-01' = {
  name: serverSettings.databaseName
  parent: database_server
}

resource firewall 'Microsoft.DBforPostgreSQL/flexibleServers/firewallRules@2021-06-01' = {
  name: 'AllowAllAzureServicesAndResourcesWithinAzureIps'
  parent: database_server
  properties: {
    endIpAddress: '0.0.0.0'
    startIpAddress: '0.0.0.0'
  }
}
