from azure.functions import HttpRequest


def get_param(req: HttpRequest, param_key: str):
    param_value = req.params.get(param_key)
    if not param_value:
        try:
            req_body = req.get_json()
        except ValueError:
            pass
        else:
            param_value = req_body.get(param_key)

    return param_value
