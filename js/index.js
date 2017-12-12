$(function() {
    const $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
    const SECTIONS = [$('header') ,$('.bg-home-2'), $('.bg-home-3'), $('.bg-home-2'), $('footer')].
    map(item => parseInt(item.position().top))
    let pageHeight = [$('.bg-home-1') ,$('.bg-home-2'), $('.bg-home-3'), $('footer')].
    map(item => parseInt(item.position().top))

    let move = 0
    let $lis = $('.nav-bar').children()

    //重置鼠标滚轮事件
    $(document).on("mousewheel DOMMouseScroll", MouseWheelHandler);
    function MouseWheelHandler(e) {
        e.preventDefault();
        var value = e.originalEvent.wheelDelta || -e.originalEvent.detail;
        var delta = Math.max(-1, Math.min(1, value));

        if (delta < 0) { //上滚
            move = move++ >= 3 ? 3: move
        } else { //下滚
            move = move-- <= 0 ? 0: move
        }
        // let top = $(document).scrollTop()
        //     let scale = Math.min(2, Math.max(1 , (1 + top / SECTIONS[1])))
        // if(move !== 0) {
        //     $('.logo').css('transform', 'scale(2)')
        // }else {
        //     $('.logo').css('transform', 'scale(1)')
        //
        // }
        let index = move
        if(move == 3) {
            index = 4
        }
        addActive($($lis[index]))
        $body.stop(true)
        $body.animate({scrollTop: pageHeight[move]}, 300);
        return false
    }

    /*
    *  头部导航滚动到对应位置
    */
    $('.nav-bar').on('click', 'li', function() {
        addActive($(this))
        let index = $lis.index($(this))

        if (index == 3) {
            window.location = 'https://www.boyou.me'
        }
        $body.stop(true)
        $body.animate({scrollTop: SECTIONS[index]}, 300);
        return false
    })

    function addActive($ele) {
        $ele.addClass('active').siblings().removeClass('active')
    }

    //resize
    window.onresize= redom
    function redom() {
        if(window.innerWidth < 767) {
            location.href = 'yunweih5.html'
        }
    }
    redom()
})