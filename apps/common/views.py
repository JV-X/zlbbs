import json

from flask import Blueprint, request, make_response
from utils import restful
from utils.captcha import Captcha
from .forms import SMSCaptchaForm
from utils import alidayu
from utils import zlcache
from io import BytesIO
from utils.captcha import Captcha
import ast

bp = Blueprint('common', __name__, url_prefix='/c')


# @bp.route("/sms_captcha")
# def sms_captcha():
#     telephone = request.args.get("telephone")
#     if not telephone:
#         return restful.params_error('请填写手机号')
#     captcha = Captcha.gene_digits(number=4)
#     result = alidayu.send_captcha_sms(telephone, code=captcha)
#     print(result)
#     result = ast.literal_eval(str(result))
#
#     if result['statusCode'] == 200:
#         return restful.success()
#     else:
#         return restful.params_error(message='短信发送失败')
@bp.route("/sms_captcha", methods=['POST'])
def sms_captcha():
    form = SMSCaptchaForm(request.form)
    if form.validate():
        telephone = form.telephone.data
        captcha = Captcha.gene_digits(number=4)
        result = alidayu.send_captcha_sms(telephone, code=captcha)
        print(result)
        zlcache.set(telephone, captcha)
        result = ast.literal_eval(str(result))
        if result['statusCode'] == 200:
            return restful.success()
        else:
            return restful.params_error(message='短信发送失败')
    else:
        return restful.params_error('参数错误')


@bp.route('/captcha')
def graph_captcha():
    text, image = Captcha.gene_graph_captcha()
    zlcache.set(text.lower(), text.lower())
    out = BytesIO()
    image.save(out, 'png')
    out.seek(0)
    resp = make_response(out.read())
    resp.content_type = 'image/png'
    return resp
