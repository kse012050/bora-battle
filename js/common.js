$(document).ready(function(){
    $(window).scroll(function(){
        $(window).scrollTop() > 0 ? $('header').addClass('active') : $('header').removeClass('active');
    })

    // 라인업 슬라이더
    lineUpSlider();

    // FAQ 클릭 이벤트
    FAQClick();

    // 모바일 메뉴 클릭
    mobileMenu();
})

function lineUpSlider(){
    var lineUpSlider = new Swiper(".lineUpSlider", {
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            850: {
                slidesPerView: 3,
                spaceBetween: 20
            },
        }
    });
}

function FAQClick(){
    $('.FAQArea ul li button').click(function(){
        $(this).toggleClass('active');
        $(this).next().slideToggle();
    })
}

function mobileMenu(){
    $('header div button').click(function(){
        $('header div nav').fadeToggle().css('display' , 'flex');
        $(this).toggleClass('active');
        $('header').addClass('active');
        if(!$(this).hasClass('active') && $(window).scrollTop() <= 0){
            $('header').removeClass('active');
        }
    })
}