$(function() {
    const $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
    const SECTIONS = [$('header') ,$('.bg-home-2'), $('.bg-home-3'), $('.bg-home-2'), $('footer')].
    map(item => parseInt(item.position().top))
    let pageHeight = [$('.bg-home-1') ,$('.bg-home-2'), $('.bg-home-3'), $('footer')].
    map(item => parseInt(item.position().top))

    let duration = 0
    let timer = null
    /*
     * 滚动logo放大效果
     */
    $(document).on('scroll', function() {
        let top = $(document).scrollTop()
        let scale = Math.min(2, Math.max(1 , (1 + top / SECTIONS[1])))
        $('.logo').css('transform', 'scale('+scale+')')
        if(top > SECTIONS[1]) {
            $('header').css('background', 'rgba(0,0,0, 0)')
        }else {
            $('header').css('background', 'rgba(0,0,0, 0.5)')
        }
        // timer = setTimeout(function() {
        //     clearTimeout(timer)
        //     if(top < 0) {
        //         duration = 0
        //     } else if (top > 0 && top < pageHeight[1]) {
        //         duration = pageHeight[1]
        //     } else if (top > pageHeight[1] && top < pageHeight[2]) {
        //         duration = pageHeight[2]
        //     } else if (top > pageHeight[2] && top < pageHeight[3]) {
        //         duration = pageHeight[3]
        //     }
        //     console.log(duration, top)
        //     $body.stop(true)
        //     $body.animate({scrollTop: duration}, 100);
        // }, 200)
    })

    /*
    *  头部导航滚动到对应位置
    */
     $('.nav-bar').on('click', 'li', function() {
         $(this).addClass('active').siblings().removeClass('active')
         let $lis = $('.nav-bar').children()
         let index = $lis.index($(this))

         if (index == 3) {
             window.location = 'https://www.boyou.me'
         }
         $body.stop(true)
         $body.animate({scrollTop: SECTIONS[index]}, 300);
         return false
     })
})