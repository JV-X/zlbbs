from flask import Blueprint, views, render_template, url_for, make_response, request

from utils import restful
from .forms import SignupForm
from .models import FrontUser
from exts import db

bp = Blueprint('front', __name__)


@bp.route('/')
def index():
    return 'front'


class SignupView(views.MethodView):
    def get(self):
        return render_template('front/front_signup.html')

    def post(self):
        form = SignupForm(request.form)
        if form.validate():
            telephone = form.telephone.data
            username = form.username.data
            password = form.password1.data
            user = FrontUser(telephone=telephone, username=username, password=password)
            db.session.add(user)
            db.session.commit()
            return restful.success()
        else:
            print(form.errors)
            return restful.params_error(message=form.get_error())


bp.add_url_rule('/signup/', view_func=SignupView.as_view('signup'))
