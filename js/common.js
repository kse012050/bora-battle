$(document).ready(function(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 20,
    });

    $('.FAQArea ul li button').click(function(){
        $(this).toggleClass('active');
        $(this).next().slideToggle();
    })
})