$(function () {
    $("#captcha-btn").click(function (event) {
        event.preventDefault();
        var email = $("input[name='email']").val()
        if (!email) {
            zlalert.alertInfoToast('请输入邮箱')
        }
        zlajax.get({
            'url': '/cms/email_captcha/',
            'data': {
                'email': email,
            },
            'success': function (data) {
                if (data['code'] == 200) {
                    zlalert.alertSuccessToast('邮件发送成功')
                } else {
                    zlalert.alertInfoToast(data['message'])
                }
            },

        })
    })
})