from flask import Blueprint, views, render_template

bp = Blueprint('cms', __name__, url_prefix='/cms')


class LoginView(views.MethodView):
    def get(self):
        return render_template('cms/cms_login.html')

    def post(self):
        pass


bp.add_url_rule('/login/', view_func=LoginView.as_view('login'))
