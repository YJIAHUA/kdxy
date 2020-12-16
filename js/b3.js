$(function () {
    var mySwiper = new Swiper('#b3', {
        autoplay: {
            disableOnInteraction: false,
            delay: 2000,
        },
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable :true,
            bulletActiveClass: 'my-bullet-active',
      },
    })
})