import json

from flask import Blueprint, request
from utils import restful
from utils.captcha import Captcha
from utils import alidayu
import ast

bp = Blueprint('common', __name__, url_prefix='/c')


@bp.route("/sms_captcha")
def sms_captcha():
    telephone = request.args.get("telephone")
    if not telephone:
        return restful.params_error('请填写手机号')
    captcha = Captcha.gene_digits(number=4)
    result = alidayu.send_captcha_sms(telephone, code=captcha)
    print(result)
    result = ast.literal_eval(str(result))

    if result['statusCode'] == 200:
        return restful.success()
    else:
        return restful.params_error(message='短信发送失败')
