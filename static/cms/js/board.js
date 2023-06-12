$(function () {
    var addBoardBtn = $('#add-board-btn')
    addBoardBtn.click(function (event) {
        event.preventDefault();
        zlalert.alertOneInput({
            'text': '请输入版块名称',
            'placeholder': '版块名称',
            'confirmCallback': function (inputValue) {
                zlajax.post({
                    'url': '/cms/aboard',
                    'data': {
                        'name': inputValue
                    },
                    'success': function (data) {
                        if (data['code'] == 200) {
                            window.location.reload()
                        } else {
                            zlalert.alertInfo(data['message'])
                        }
                    }
                })
            }
        })
    })
})
$(function () {
    $('.edit-board-btn').click(function (event) {
        event.preventDefault()
        var self = $(this)
        var tr = self.parent().parent()
        var name = tr.attr("data-name")
        var id = tr.attr("data-id")
        console.log(name,id)
        zlalert.alertOneInput({
            'text': '请输入新的版块名称',
            'placeholder': name,
            'confirmCallback': function (inputValue) {
                zlajax.post({
                    'url': '/cms/uboard',
                    'data': {
                        'name': inputValue,
                        'board_id': id
                    },
                    'success': function (data) {
                        if (data['code'] == 200) {
                            window.location.reload()
                        } else {
                            zlalert.alertInfo(data['message'])
                        }
                    }
                })
            }

        })
    })
})
$(function () {
    $('.delete-board-btn').click(function (event) {
        var self = $(this)
        var tr = self.parent().parent();
        var board_id = tr.attr('data-id')
        zlalert.alertConfirm({
            'msg': "您确定要删除这个轮播图吗",
            'confirmCallback': function () {
                zlajax.post({
                    'url': "/cms/dboard",
                    'data': {
                        'board_id': board_id,
                    },
                    'success': function (data) {
                        if (data['code'] == 200) {
                            window.location.reload()
                        } else {
                            zlalert.alertInfo(data['message'])
                        }
                    },

                })

            }
        })
    })
})