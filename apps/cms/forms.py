from wtforms import StringField, IntegerField
from wtforms.validators import Email, InputRequired, Length, EqualTo
from ..forms import BaseForm


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
    captcha = StringField(validators=[Length(4, 4, message='验证码格式错误')])
