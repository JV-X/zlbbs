from flask import Blueprint

bp = Blueprint('front', __name__)


@bp.route('/')
def index():
    return 'front'
