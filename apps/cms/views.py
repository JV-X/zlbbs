import random
import string

from flask import (
    Blueprint,
    views,
    render_template,
    request,
    session,
    redirect,
    url_for,
    g,
)
from .forms import LoginForm, ResetPwdForm, ResetEmailForm
from .models import CMSUser, CMSPermission
from .decorators import login_required, permission_required
import config
from exts import db, mail
from flask_mail import Message
from utils import restful, zlcache
import string
import random

bp = Blueprint('cms', __name__, url_prefix='/cms')


@bp.route('/')
@login_required
def index():
    return render_template('cms/cms_index.html')


@bp.route('logout')
def logout():
    if config.CMS_USER_ID in session:
        print('has key')
        del session[config.CMS_USER_ID]
    else:
        print('key not exist')
    return redirect(url_for('cms.login'))


@bp.route('boards')
@permission_required(CMSPermission.BOARDER)
def boards():
    return render_template('cms/cms_boards.html')


@bp.route('comments')
@permission_required(CMSPermission.COMMENTER)
def comments():
    return render_template('cms/cms_comments.html')


@bp.route('croles')
@permission_required(CMSPermission.ALL_PERMISSION)
def croles():
    return render_template('cms/cms_croles.html')


@bp.route('cusers')
@permission_required(CMSPermission.CMS_USER)
def cusers():
    return render_template('cms/cms_cusers.html')


@bp.route('fusers')
@permission_required(CMSPermission.FRONT_USER)
def fusers():
    return render_template('cms/cms_fusers.html')


@bp.route('posts')
@permission_required(CMSPermission.POSTER)
def posts():
    return render_template('cms/cms_posts.html')


@bp.route('profile')
def profile():
    return render_template('cms/cms_profile.html')


@bp.route('/email')
def email():
    m = Message('使用消息测试一下', recipients=['xjv1195275315@qq.com'], body='这是body')
    mail.send(m)
    return 'success'


@bp.route('/email_captcha/')
def email_captcha():
    email = request.args.get('email')
    if not email:
        return restful.params_error('请填写邮箱')
    source = list(string.ascii_letters)
    source.extend(map(lambda x: str(x), range(0, 10)))
    captcha = random.sample(source, 6)
    captcha = ''.join(captcha)
    m = Message('Python 论坛邮箱验证码', recipients=[email], body=f'您的验证码是{captcha}')
    try:
        mail.send(m)
    except:
        return restful.servererror('发送邮件失败')
    zlcache.set(email, captcha)
    return restful.success()


class LoginView(views.MethodView):
    def get(self, message=None):
        return render_template('cms/cms_login.html', message=message)

    def post(self):
        form = LoginForm(request.form)
        if form.validate():
            email = form.email.data
            password = form.password.data
            remember = form.remember.data
            user = CMSUser.query.filter_by(email=email).first()
            if user and user.check_password(password):
                session[config.CMS_USER_ID] = user.id
                if remember:
                    session.permanent = True
                return redirect(url_for('cms.index'))
            else:
                return self.get(message='邮箱或者密码错误')
        else:
            print(form.errors)
            message = form.get_error()
            return self.get(message=message)


class ResetPwdView(views.MethodView):
    decorators = [login_required]

    def get(self):
        return render_template('cms/cms_resetpwd.html')

    def post(self):
        form = ResetPwdForm(request.form)
        if form.validate():
            oldpwd = form.oldpwd.data
            newpwd = form.newpwd.data
            user = g.cms_user
            if user.check_password(oldpwd):
                user.password = newpwd
                db.session.commit()
                return restful.success()
            else:
                return restful.params_error('旧密码错误')

        else:
            return restful.params_error(form.get_error())


class ResetEmailView(views.MethodView):
    decorators = [login_required]

    def get(self):
        return render_template('cms/cms_resetemail.html')

    def post(self):
        form = ResetEmailForm(request.form)
        if form.validate():
            email = form.email.data
            g.cms_user.email = email
            db.session.commit()
            return restful.success()
        else:
            return restful.params_error(form.get_error())


bp.add_url_rule('/resetemail/', view_func=ResetEmailView.as_view('resetemail'))
bp.add_url_rule('/login/', view_func=LoginView.as_view('login'))
bp.add_url_rule('/resetpwd/', view_func=ResetPwdView.as_view('resetpwd'))
