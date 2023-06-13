from flask import Flask

import commands
from apps.cms import bp as cms_bp
from apps.common import bp as common_bp
from apps.front import bp as front_bp
from apps.ueditor import bp as ueditor_bp
import config
from exts import db, migrate,mail
from flask_wtf import CSRFProtect


def create_app():
    app = Flask(__name__)
    app.config.from_object(config)

    db.init_app(app)
    migrate.init_app(app, db)
    mail.init_app(app)

    app.register_blueprint(cms_bp)
    app.register_blueprint(common_bp)
    app.register_blueprint(front_bp)
    app.register_blueprint(ueditor_bp)

    csrf = CSRFProtect(app)
    csrf.exempt(ueditor_bp)

    app.cli.command('create_cms_user')(commands.create_cms_user)
    app.cli.command('create_role')(commands.create_role)
    app.cli.command('test_permission')(commands.test_permission)
    app.cli.command('add_user_to_role')(commands.add_user_to_role)
    app.cli.command('create_front_user')(commands.create_front_user)
    return app


if __name__ == '__main__':
    app = create_app()
    app.run(port=8000)
