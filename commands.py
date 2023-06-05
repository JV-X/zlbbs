from exts import db
from apps.cms.models import CMSUser


def create_cms_user():
    user = CMSUser(username='admin', password='111111', email='xjv1195275315@qq.com')
    db.session.add(user)
    db.session.commit()
    print('cms用户添加成功！')
