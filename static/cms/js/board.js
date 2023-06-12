$(function (){
    var addBoardBtn = $('#add-board-btn')
    addBoardBtn.click(function (event) {
        event.preventDefault();
        zlalert.alertOneInput({
            'text':'请输入版块名称',
            'placeholder':'版块名称',
            'confirmCallback':function (inputValue) {
                zlajax.post({
                    'url':'/cms/aboard',
                    'data':{
                        'name':inputValue
                    },
                    'success':function (data){
                        if(data['code']==200){
                            window.location.reload()
                        }else{
                            zlalert.alertInfo(data['message'])
                        }
                    }
                })
            }
        })
    })
})