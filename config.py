import os

DEBUG = True
# SECRET_KEY = os.urandom(24)
SECRET_KEY = 'asdasddasx'

DB_USERNAME = 'root'
DB_PASSWORD = 'xjv123..'
DB_HOST = '127.0.0.1'
DB_PORT = '3306'
DB_NAME = 'zlbbs'
DB_URI = 'mysql+pymysql://%s:%s@%s:%s/%s?charset=utf8' % (DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME)
SQLALCHEMY_DATABASE_URI = DB_URI
SQLALCHEMY_TRACK_MODIFICATIONS = False

CMS_USER_ID = 'qwreqsaxcvvd'
FRONT_USER_ID = 'asdqwvqwedcvgft'

MAIL_SERVER = "smtp.qq.com"
MAIL_PORT = '587'
MAIL_USE_TLS = True
# MAIL_USE_SSL
MAIL_USERNAME = "xjv1195275315@qq.com"
MAIL_PASSWORD = "igtqeblbgaqyhgag"
MAIL_DEFAULT_SENDER = "xjv1195275315@qq.com"

ALIBABA_CLOUD_ACCESS_KEY_ID = 'LTAI5tMnrCjBgA6vd1B7oxZ2'
ALIBABA_CLOUD_ACCESS_KEY_SECRET = 'mTo6BPbCPnvEfufSSILoPubCFrR40z'

UEDITOR_UPLOAD_PATH = "images"
UEDITOR_UPLOAD_TO_QINIU = True
UEDITOR_QINIU_ACCESS_KEY = "mFDQHiI7KSZKsZ5bHw1jOlBC-MWAWYQz4Jc8tWgl"
UEDITOR_QINIU_SECRET_KEY = "SfUrc6hm3iVtTkOEY_qUbsFZSwgWkW-9uXRcixaG"
UEDITOR_QINIU_BUCKET_NAME = "pythonbbs2"
UEDITOR_QINIU_DOMAIN = "rw4ud3x4a.hd-bkt.clouddn.com"

PER_PAGE=10
