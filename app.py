from flask import Flask

import commands
from apps.cms import bp as cms_bp
from apps.common import bp as common_bp
from apps.front import bp as front_bp
import config
from exts import db, migrate


def create_app():
    app = Flask(__name__)
    app.config.from_object(config)

    db.init_app(app)
    migrate.init_app(app, db)

    app.register_blueprint(cms_bp)
    app.register_blueprint(common_bp)
    app.register_blueprint(front_bp)

    app.cli.command('create_cms_user')(commands.create_cms_user)
    return app


if __name__ == '__main__':
    app = create_app()
    app.run(port=8000)
