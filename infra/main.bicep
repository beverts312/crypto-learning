@description('What level of envrionment (i.e dev, prod)')
param env string

@description('Github Access token')
@secure()
param repositoryToken string

@description('Where to deploy')
param location string = resourceGroup().location

@description('Which branch to deploy')
param branch string = 'main'

var repositoryUrl = 'https://github.com/beverts312/web3-learning'
var name = 'web3site-${env}'

resource name_resource 'Microsoft.Web/staticSites@2019-12-01-preview' = {
  name: name
  location: location
  tags: {}
  properties: {
    repositoryUrl: repositoryUrl
    branch: branch
    repositoryToken: repositoryToken
    buildProperties: {
      appLocation: '/ui'
      apiLocation: '/api'
      appArtifactLocation: 'build'
    }
  }
  sku: {
    Tier: 'Free'
    Name: 'Free'
  }
}
