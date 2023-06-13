from exts import db
from apps.cms.models import CMSUser, CMSRole, CMSPermission
from apps.front.models import FrontUser
from apps.models import BannerModel, BoardModel, PostModel


def create_cms_user():
    user = CMSUser(username='我是管理员', password='111111', email='admin@qq.com')
    db.session.add(user)
    db.session.commit()
    print('cms用户添加成功！')


def create_role():
    visitor = CMSRole(name='访问者', desc='只能看，不能改除了个人信息以外的其他数据')
    visitor.permissions = CMSPermission.VISITOR
    operator = CMSRole(name='运营', desc='管理评论，管理板块,管理前台用户')
    operator.permissions = CMSPermission.VISITOR | CMSPermission.POSTER | CMSPermission.CMS_USER | CMSPermission.COMMENTER | CMSPermission.FRONT_USER
    admin = CMSRole(name='管理员', desc='拥有本系统所有权限。')
    admin.permissions = CMSPermission.VISITOR | CMSPermission.POSTER | CMSPermission.CMS_USER | CMSPermission.COMMENTER | CMSPermission.FRONT_USER | CMSPermission.BOARDER
    developer = CMSRole(name='开发者', desc='开发人员专用角色。')
    developer.permissions = CMSPermission.ALL_PERMISSION
    db.session.add_all([visitor, operator, admin, developer])
    db.session.commit()
    print('role created')


def test_permission():
    user = CMSUser.query.first()
    if user.has_permission(CMSPermission.VISITOR):
        print('有访问者权限')
    else:
        print('没有访问者权限')


def add_user_to_role():
    email = 'admin@qq.com'
    name = '管理员'
    user = CMSUser.query.filter_by(email=email).first()
    if user:
        role = CMSRole.query.filter_by(name=name).first()
        if role:
            role.users.append(user)
            db.session.commit()
            print('用户添加到角色成功！')
        else:
            print('没有这个角色：%s' % role)
    else:
        print('%s邮箱没有这个用户!' % email)


def create_front_user():
    telephone = '18408225544'
    username = 'xjv123'
    password = '111111'
    front_user = FrontUser(telephone=telephone, username=username, password=password)
    db.session.add(front_user)
    db.session.commit()
    print('添加前台用户成功')

def create_test_post():
    for x in range(1,255):
        title = f'标题{x}'
        content=f'内容{x}'
        board = BoardModel.query.first()
        author = FrontUser.query.first()
        post = PostModel(title=title,content=content)
        post.author = author
        db.session.add(post)
        db.session.commit()
    print('create_test_post done...')
