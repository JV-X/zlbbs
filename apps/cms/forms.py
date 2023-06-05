from wtforms import StringField, IntegerField
from wtforms.validators import Email, InputRequired, Length, EqualTo, ValidationError
from ..forms import BaseForm
from utils import zlcache
from flask import g


class LoginForm(BaseForm):
    email = StringField(validators=[Email(message='请输入正确的邮箱格式'), InputRequired(message='请输入邮箱')])
    password = StringField(validators=[Length(6, 20, message='密码格式错误')])
    remember = IntegerField()


class ResetPwdForm(BaseForm):
    oldpwd = StringField(validators=[Length(6, 20, message='旧密码格式错误')])
    newpwd = StringField(validators=[Length(6, 20, message='新密码格式错误')])
    newpwd2 = StringField(validators=[EqualTo('newpwd', message='两次输入不相同')])


class ResetEmailForm(BaseForm):
    email = StringField(validators=[Email(message='请输入正确的邮箱格式'), InputRequired(message='请输入邮箱')])
    captcha = StringField(validators=[Length(6, 6, message='验证码格式错误')])

    def validate_captcha(self, field):
        captcha = field.data
        email = self.email.data
        captcha_cached = zlcache.get(email)
        if not captcha_cached or captcha.lower() != captcha_cached.lower():
            raise ValidationError("邮箱或验证码错误")

    def validate_email(self, field):
        email = field.data
        if email == g.cms_user.email:
            raise ValidationError('不能使用相同的邮箱')
