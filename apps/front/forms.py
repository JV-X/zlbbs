from ..forms import BaseForm
from wtforms import StringField
from wtforms.validators import Regexp, EqualTo,ValidationError
from utils import zlcache

class SignupForm(BaseForm):
    telephone = StringField(validators=[Regexp(r'1[345789]\d{9}', message='手机号码格式不对')])
    sms_captcha = StringField(validators=[Regexp(r'\w{4}', message='验证码格式不对')])
    username = StringField(validators=[Regexp(r'.{2,20}', message='用户名格式不对')])
    password1 = StringField(validators=[Regexp(r'[0-9a-zA-Z_\.]{6,20}', message='密码格式不对')])
    password2 = StringField(validators=[EqualTo('password1', message='两次密码不一样')])
    graph_captcha = StringField(validators=[Regexp(r'\w{4}',message='图形验证码格式不对')])

    def validate_sms_captcha(self, field):
        sms_captcha = field.data
        telephone = self.telephone.data
        print(telephone,sms_captcha,self.username.data,field)
        sms_captcha_mem = zlcache.get(telephone)
        if not sms_captcha_mem or sms_captcha_mem.lower() != sms_captcha.lower():
            raise ValidationError(message='验证码验证失败')

    def validate_graph_captcha(self, field):
        graph_captcha = field.data
        graph_captcha_mem = zlcache.get(graph_captcha.lower())
        if not graph_captcha_mem:
            raise ValidationError(message='图形验证码错误')

class SigninForm(BaseForm):
    telephone = StringField(validators=[Regexp(r'1[345789]\d{9}', message='手机号码格式不对')])
    password = StringField(validators=[Regexp(r'[0-9a-zA-Z_\.]{6,20}', message='密码格式不对')])
    remember = StringField()