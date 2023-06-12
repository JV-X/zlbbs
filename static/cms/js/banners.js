$(function () {
    $('#save-banner-btn').click(function (event) {
        event.preventDefault();
        var bannerDialog = $("#banner-dialog")

        var nameInput = $("input[name='name']")
        var imageInput = $("input[name='image_url']")
        var linkInput = $('input[name="link_url"]')
        var priorityInput = $('input[name="priority"]')

        var name = nameInput.val()
        var image_url = imageInput.val()
        var link_url = linkInput.val()
        var priority = priorityInput.val()
        if (!name || !image_url || !link_url || !priority) {
            zlalert.alertInfo('请输入完成的轮播图数据')
            return
        }
        zlajax.post({
            'url': '/cms/abanner',
            'data': {
                'image_url': image_url,
                'name': name,
                'link_url': link_url,
                'priority': priority
            },
            'success': function (data) {
                console.log(data)
                bannerDialog.modal('hide');
                if (data['code'] == 200) {
                    window.location.reload()
                } else {
                    zlalert.alertInfo(data['message'])
                }
            }
        })
    })
})