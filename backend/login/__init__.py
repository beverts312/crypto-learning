import logging

from azure.functions import HttpRequest, HttpResponse
from ..common.challenge import UserChallenge
from ..common.req_help import get_param
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
        logging.info(f"addr: {addr}")
        logging.info(f"signed challenge: {challenge}")
        logging.info(f"stored challenge: {stored_challenge}")
        w3 = Web3()
        account = w3.eth.account.recover_message(
            encode_defunct(text=stored_challenge),
            signature=challenge,
        )
        return account
