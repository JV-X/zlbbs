from wtforms import Form, StringField, IntegerField
from wtforms.validators import Email, InputRequired, Length,EqualTo


class LoginForm(Form):
    email = StringField(validators=[Email(message='请输入正确的邮箱格式'), InputRequired(message='请输入邮箱')])
    password = StringField(validators=[Length(6, 20, message='密码格式错误')])
    remember = IntegerField()

class ResetPwdForm(Form):
    oldpwd = StringField(validators=[Length(6, 20, message='密码格式错误')])
    newpwd = StringField(validators=[Length(6, 20, message='密码格式错误')])
    newpwd2 = StringField(validators=[EqualTo('newpwd',message='两次输入不相同')])
