from dataclasses import dataclass
from azure.cosmos import (
    ContainerProxy,
    CosmosClient,
    PartitionKey,
)
from common.db_helper import ACCOUNT_URI, get_key


@dataclass
class User:
    name: str
    id: str
    net: str

    def save(self):
        client = User.get_users_client()
        client.upsert_item({"id": self.id, "name": self.name, "net": self.net})

    @staticmethod
    def get_users_client() -> ContainerProxy:
        client = CosmosClient(ACCOUNT_URI, get_key())
        db = client.create_database_if_not_exists(id="main")
        return db.create_container_if_not_exists(
            id="users", partition_key=PartitionKey(path="/net")
        )

    @staticmethod
    def get_user(addr, net="eth"):
        client = User.get_users_client()
        return client.read_item(item=addr, partition_key=net)
