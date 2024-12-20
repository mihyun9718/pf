$(function () {


    const tl = gsap.timeline();

    tl
        .from('.intro p', { x: -1000, opacity: 0, delay: 1 })
        .from('.intro p', { x: -1000, opacity: 0 })
        .from('.intro .star', { y: 200, opacity: 0, rotate: 720 })

    $('#portfolio').fullpage({
        anchors: ['intro', 'pf01', 'pf02', 'pf03', 'profile'],
        css3: false,
        onLeave: function (idx, nidx, dir) {
            console.log(idx, nidx, dir);
            $('#header .gnb li').eq(nidx - 1).addClass('on').siblings().removeClass('on');
            $('.section').eq(nidx - 1).addClass('on').siblings().removeClass('on');

            if (nidx == 1) {
                tl.restart();
            }

            $('.num').text;

            $('.zz_bg').css({
                background: `url(./img/zz0${nidx - 1}.png) no-repeat center center/cover`
            })



        }

    });

    // $('#header .gnb li a').on('click', function () {
    //     $(this).parent().addClass('on').siblings().removeClass('on')
    // });


    $('#header .menu').on('click', function () {
        $(this).toggleClass('on');
        $('#header .cover').toggleClass('on');
    });


    $('#header .cover a').on('click', function () {
        $('#header .cover').removeClass('on');
        $('#header .menu').removeClass('on');
    });


    $('#header .cover').on('wheel', function (e) {
        e.stopPropagation();
    });

});







$(function () {
    const tl = gsap.timeline({
        repeat: -1
    });

    tl.to(`#gg`, {
        motionPath: {
            path: `#path`,
            align: `#path`,
            alignOrigin: [0.3, 0.7],
            autoRotate: true,

        },
        duration: 5,
        // delay: 5 * num,
    })
})
