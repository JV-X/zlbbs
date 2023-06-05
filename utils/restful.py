from flask import jsonify


class HttpCode(object):
    ok = 200
    unautherror = 401
    paramserror = 400
    servererror = 500


def restful_result(code, message, data):
    return jsonify({'code': code, 'message': message, 'data': data})


def success(message='', data=None):
    return restful_result(HttpCode.ok, message=message, data=data)


def unauth_error(message=''):
    return restful_result(HttpCode.unautherror, message=message, data=None)


def params_error(message=''):
    return restful_result(HttpCode.paramserror, message=message, data=None)


def servererror(message=''):
    return restful_result(HttpCode.servererror, message=message or '服务器内部错误', data=None)
