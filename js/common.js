$(document).ready(function(){
    $(window).scroll(function(){
        $(window).scrollTop() > 0 ? $('header').addClass('active') : $('header').removeClass('active');
    })

    $(window).resize(function(){
        if($(window).width() > 1280){
            $('body').removeAttr('style');
            $('header div nav').fadeIn();
        }
    })

    $('.lineArea > div .lineUpSlider .swiper-slide').hover(function(){
        $(this).find('video').trigger('play');
    },function(){
        $(this).find('video').trigger('pause');
        $(this).find('video')[0].currentTime = 0;
    })

    // 메뉴 클릭 이동
    menuClickMove();

    // 라인업 슬라이더
    lineUpSlider();

    // FAQ 클릭 이벤트
    FAQClick();

    // 모바일 메뉴 클릭
    mobileMenu();
})

function menuClickMove(){
    $('header div nav ul li a').click(function(e){
        if($(this).attr('href')[0] == '#'){
            e.preventDefault();
            let targetID = $($(this)[0].hash);
            let headerHeight = $('header').innerHeight();
            let aniDelay = 0;
            if($('header div button').hasClass('active')){
                mobileMenuEvent();
                aniDelay = 400;
            }
            $('html').delay(aniDelay).animate({scrollTop : targetID.offset().top - (headerHeight * 2)})
        }
    })
}

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
        mobileMenuEvent();
    })
}


function mobileMenuEvent(){
    $('header div nav').fadeToggle().css('display' , 'flex');
    $('header div button').toggleClass('active');
    if($('header div button').hasClass('active')){
        $('body').css('overflow' , 'hidden');
    }else{
        $('body').removeAttr('style');
    }
    $('header').addClass('active');
    if(!$('header div button').hasClass('active') && $(window).scrollTop() <= 0){
        $('header').removeClass('active');
    }
}