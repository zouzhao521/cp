+function(){
    let doc = document.documentElement;
    let move = 0;
    const $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
    let meta = document.getElementById('viewport');
    function reHtmlSize(){
        if(window.innerWidth > 768) {
            location.href = "index.html"
        }
        let dpr = Math.round(window.devicePixelRatio);
        let htmlSize = window.innerWidth/10 + 'px';
       meta.setAttribute('content', `width=device-width,user-scalable=no,initial-scale = ${1/dpr},maximum-scale = ${1/dpr},minimum-scale = ${1/dpr}`);
       doc.setAttribute('dpr', dpr);
        doc.style.fontSize = htmlSize;
    }
    window.addEventListener('resize', reHtmlSize);
    reHtmlSize()


    let $lis = $('.nav-bar li')
    let pageHeight = [$('.bg-1'), $('.bg-3'), $('.bg-4'), $('.bg-5')].map((item) => parseInt(item.position().top))

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
        let index = move
        if(move == 3) {
            index = 4
        }
        // addActive($($lis[index]))
        console.log(move,  pageHeight[move])
        $body.stop(true)
        $body.animate({scrollTop: pageHeight[move]}, 300);
        return false
    }
    function addActive($ele) {
        $ele.addClass('active').siblings().removeClass('active')
    }
}($)
