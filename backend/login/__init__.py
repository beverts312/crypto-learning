from ..common.user import User
from ..common.challenge import UserChallenge
from ..common.jwt_helper import get_jwt
from ..common.req_help import get_param
from azure.functions import HttpRequest, HttpResponse
from web3 import Web3
from eth_account.messages import encode_defunct


def main(req: HttpRequest) -> HttpResponse:
    challenge = get_param(req, "challenge")
    addr = get_param(req, "addr")

    if not addr:
        return HttpResponse("Must provide address", status_code=400)
    if not challenge:
        return HttpResponse("Must provide signed challange", status_code=400)
    else:
        stored_challenge = UserChallenge.get_challenge(addr).get("challenge")
        w3 = Web3()
        account = w3.eth.account.recover_message(
            encode_defunct(text=stored_challenge),
            signature=challenge,
        )
        if account == addr:
            user = User.get_user(account)
            return HttpResponse(get_jwt(user))
        else:
            return HttpResponse(status_code="401")