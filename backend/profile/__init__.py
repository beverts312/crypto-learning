from ..common.jwt_helper import decode_jwt_from_request
from ..common.req_help import get_param
from azure.functions import HttpRequest, HttpResponse


def main(req: HttpRequest) -> HttpResponse:
    addr = get_param(req, "addr")
    name = get_param(req, "name")
    auth_user = decode_jwt_from_request(req) 
    if not addr:
        return HttpResponse("Must provide address", status_code=400)
    if addr == auth_user:
        print(name)    
        return HttpResponse(status_code="200")