from azure.functions import HttpRequest, HttpResponse

from ..common.challenge import UserChallenge
from ..common.req_help import get_param


def main(req: HttpRequest) -> HttpResponse:
    addr = get_param(req, "addr")

    if not addr:
        return HttpResponse("Must provide address", status_code=400)
    else:
        user_challenge = UserChallenge(addr, "eth")
        return HttpResponse(user_challenge.create_challenge())
