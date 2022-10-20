$(document).ready(function(){
    // 스크롤
    $(window).scroll(function(){
        // 해더 배경색
        $(window).scrollTop() > 0 ? $('header').addClass('active') : $('header').removeClass('active');

        // 메뉴 색상
        menuColor();
    })

    // 리사이즈
    $(window).resize(function(){
        // 모바일에서 PC로 넘어올 때 메뉴
        if($(window).width() > 1280){
            $('body').removeAttr('style');
            $('header div nav').fadeIn();
        }
    })

    // 팝업
    popupEvent();

    // 메뉴 클릭 이동
    menuClickMove();

    // 라인업 슬라이더
    lineUpSlider();

    // FAQ 클릭 이벤트
    FAQClick();

    // 모바일 메뉴 클릭
    mobileMenu();
})

function popupEvent(){
    $('body').css('overflow','hidden');
    $('.popupArea').fadeIn().css('display','flex');
    $('.popupArea button').click(function(){
        $('body').removeAttr('style');
        $('.popupArea').fadeOut();
    })
}

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

function menuColor(){
    $('[class*="Area"][id]').each(function(i){
        let headerHeight = $('header').innerHeight();
        if($(window).scrollTop() > $(this).offset().top - (headerHeight * 2) - 10){
            $('header div nav ul li').removeClass('active');
            $('header div nav ul li').eq(i).addClass('active')
             
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

    // 호버 동영상 재생
    $('.lineArea > div .lineUpSlider .swiper-slide').hover(function(){
        $(this).find('video').trigger('play');
    },function(){
        $(this).find('video').trigger('pause');
        $(this).find('video')[0].currentTime = 0;
    })
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