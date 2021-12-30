from dataclasses import dataclass
from azure.cosmos import (
    ContainerProxy,
    CosmosClient,
    PartitionKey,
)
from common.user import User
from common.db_helper import ACCOUNT_URI, get_key
from uuid import uuid4


@dataclass
class UserChallenge:
    addr: str
    net: str

    def create_challenge(self) -> str:
        User.creat_if_not_exist(self.addr, self.net)
        client = UserChallenge.get_challenge_client()
        challenge = str(uuid4())
        client.upsert_item(
            {"id": self.addr, "net": self.net, "challenge": challenge}
        )
        return challenge

    @staticmethod
    def get_challenge_client() -> ContainerProxy:
        client = CosmosClient(ACCOUNT_URI, get_key())
        db = client.create_database_if_not_exists(id="main")
        return db.create_container_if_not_exists(
            id="challenge", partition_key=PartitionKey(path="/net")
        )

    @staticmethod
    def get_challenge(addr, net="eth"):
        client = UserChallenge.get_challenge_client()
        return client.read_item(item=addr, partition_key=net)
