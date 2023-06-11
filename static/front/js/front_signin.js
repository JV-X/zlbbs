$(function () {
    $('#submit-btn').click(function (event) {
        event.preventDefault();
        var telephone = $('input[name="telephone"]')
        var password = $('input[name="password"]')
        var remember = $('input[name="remember"]')

        var t = telephone.val()
        var p = password.val()
        var r = remember.checked ? 1 : 0;
        zlajax.post({
            'url': '/signin/',
            "data": {
                'telephone': t,
                'password': p,
                'remember': r
            },
            "success": function (data) {
                console.log(data)
                if (data['code'] == 200) {
                    var return_to = $("#return-to-span").text();
                    if (return_to) {
                        window.location = return_to;
                    } else {
                        window.location = '/'
                    }
                }else{
                    zlalert.alertInfo(data['message'])
                }
            },
            "fail": function (data) {
                console.log(data)
            }
        })
    })
})