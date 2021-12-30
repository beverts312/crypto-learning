from azure.identity import DefaultAzureCredential
from azure.mgmt.cosmosdb import CosmosDBManagementClient

ACCOUNT_SUB = "20d65a45-3a4f-413d-9f05-03131b6addbb"
ACCOUNT_RG = "crypto"
ACCOUNT_NAME = "web3site-prod-db"
ACCOUNT_URI = f"https://{ACCOUNT_NAME}-eastus2.documents.azure.com:443/"


def get_key():
    mgmt_client = CosmosDBManagementClient(
        DefaultAzureCredential(), ACCOUNT_SUB, "https://management.azure.com"
    )
    keys = mgmt_client.database_accounts.list_keys(ACCOUNT_RG, ACCOUNT_NAME)
    return keys.primary_master_key
