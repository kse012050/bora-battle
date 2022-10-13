$(document).ready(function(){
    var swiper = new Swiper(".mySwiper", {
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
                800: {
                slidesPerView: 3,
                spaceBetween: 20
            },
        }
    });

    $('.FAQArea ul li button').click(function(){
        $(this).toggleClass('active');
        $(this).next().slideToggle();
    })

    $(window).scroll(function(){
        $(window).scrollTop() > 0 ? $('header').addClass('active') : $('header').removeClass('active');
    })
})