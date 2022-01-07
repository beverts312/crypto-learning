import jwt
from azure.keyvault.secrets import SecretClient
from azure.identity import DefaultAzureCredential
from common.user import User
from azure.functions import HttpRequest


JWT_ALGORITHM = "HS256"


def _get_jwt_secert() -> str:
    client = SecretClient(
        vault_url="https://crypto-dev.vault.azure.net/",
        credential=DefaultAzureCredential(),
    )
    return client.get_secret("jwtSecret").value


def get_jwt(user: User) -> str:
    return jwt.encode(
        {"addr": user.id}, _get_jwt_secert(), algorithm=JWT_ALGORITHM
    )


def decode_jwt(encoded_jwt: str):
    decoded_jwt = jwt.decode(
        encoded_jwt, _get_jwt_secert(), algorithm=JWT_ALGORITHM
    )
    return decoded_jwt.get("id")


def decode_jwt_from_request(req: HttpRequest):
    req_jwt = req.headers.get("special-auth").replace("Bearer ", "")
    return decode_jwt(req_jwt)
