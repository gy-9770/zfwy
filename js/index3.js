let flag = true;
$('.home-nav>ul>li').on('tap', function(e) {
    if (flag) {
        flag = false
        let that = $(this)
        if (that.hasClass('active')) {
            that.children('div').hide()
            that.removeClass('active')
            setTimeout(() => {
                flag = true
            }, 200)
            return
        }
        that.siblings('li').removeClass('active').children('div').hide()
        that.addClass('active').children('div').show()
        setTimeout(() => {
            flag = true
        }, 200)
    }
})
$('.pri-list li span').on('tap', function() {
    $(this).addClass('active').parent().siblings('li').children('span').removeClass('active')
})