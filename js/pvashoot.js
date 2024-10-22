$(document).ready(function() {
		
	$("input.phoneNumber").mask("+7 (999)-999-99-99");
	$(".fancybox").fancybox();
    $(".selectric").selectric();

    //ГАЛЛЕРЕЯ С ПАРАЛЛАКС ЭФФЕКТОМ
    $("[industries-slider]").each((function() {

        //let e = $(this).find('[slider-btn="next"]')[0],
        //    t = $(this).find('[slider-btn="prev"]')[0];

        new Swiper($(this).find(".swiper")[0],{
            speed: 800,
            loop: !0,
            centeredSlides: !0,
            followFinger: !0,
            slideToClickedSlide: !0,
            grabCursor: !0,
            a11y: !1,
            allowTouchMove: !0,
            slidesPerView: 5,
            spaceBetween: 32,
            rewind: !1,
            parallax: !0,

            navigation: {
                nextEl: ".section-main-btn-item.next",
                prevEl: ".section-main-btn-item.prev",
            },

            mousewheel: {
                forceToAxis: !0
            },
            keyboard: {
                enabled: !0,
                onlyInViewport: !0
            },
            breakpoints: {
                1280: {
                    spaceBetween: 23,
                    slidesPerView: 3,
                },
                768: {
                    spaceBetween: 16,
                    slidesPerView: 3
                },
                319: {
                    spaceBetween: 16,
                    slidesPerView: 1
                }
            }
        })

    }));
    //ГАЛЛЕРЕЯ С ПАРАЛЛАКС ЭФФЕКТОМ

    //ГАЛЛЕРЕЯ С ПАРАЛЛАКС ЭФФЕКТОМ
    $("[cases-slider]").each((function() {

        //let e = $(this).find('[slider-btn="next"]')[0],
        //    t = $(this).find('[slider-btn="prev"]')[0];

        new Swiper($(this).find(".swiper")[0],{
            speed: 800,
            loop: !0,
            centeredSlides: !0,
            followFinger: !0,
            slideToClickedSlide: !0,
            grabCursor: !0,
            a11y: !1,
            allowTouchMove: !0,
            slidesPerView: 1,
            spaceBetween: 0,
            rewind: !1,
            parallax: !0,

            navigation: {
                nextEl: '.section-cases-slider-btn-item.slide-next',
                prevEl: '.section-cases-slider-btn-item.slide-prev',
            },
            pagination: {
                el: ".section-cases-slider-btn-count",
                type: "fraction",
                renderFraction: function (currentClass, totalClass) {
                    return '<span class="' + currentClass + '"></span> / <span class="' + totalClass + '"></span>';
                },
            },


            mousewheel: {
                forceToAxis: !0
            },
            keyboard: {
                enabled: !0,
                onlyInViewport: !0
            },
            breakpoints: {
                768: {
                    //spaceBetween: 32,
                    //initialSlide: 1
                }
            }
        })

    }));
    //ГАЛЛЕРЕЯ С ПАРАЛЛАКС ЭФФЕКТОМ


    //ГАЛЛЕРЕЯ С ПАРАЛЛАКС ЭФФЕКТОМ
    $("[other-elements-slider]").each((function() {

        //let e = $(this).find('[slider-btn="next"]')[0],
        //    t = $(this).find('[slider-btn="prev"]')[0];

        new Swiper($(this).find(".swiper")[0],{
            speed: 800,
            loop: !0,
            centeredSlides: !0,
            followFinger: !0,
            slideToClickedSlide: !0,
            grabCursor: !0,
            a11y: !1,
            allowTouchMove: !0,
            slidesPerView: 3,
            spaceBetween: 16,
            rewind: !1,
            parallax: !0,
            /*
            navigation: {
                nextEl: e,
                prevEl: t
            },
            */
            mousewheel: {
                forceToAxis: !0
            },
            keyboard: {
                enabled: !0,
                onlyInViewport: !0
            },
            breakpoints: {
                1359: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
                768: {
                    //spaceBetween: 32,
                    //initialSlide: 1
                }
            }
        })

    }));
    //ГАЛЛЕРЕЯ С ПАРАЛЛАКС ЭФФЕКТОМ



    //КАСТОМНЫЙ СКРОЛЛБАР
    $(".route-map-filter-bottom").mCustomScrollbar({
        /*theme:"dark"*/
    });
    //КАСТОМНЫЙ СКРОЛЛБАР

    $("body").on("click", ".openPopUp", function(){

        $.fancybox.open({
            src  : $(this).attr("href"),
            type : 'inline',
            opts : {
                buttons: [],
                baseClass: "custom-fancybox",
            }
        });

        return false;
    });

    $("body").on("click", ".closeFancy", function(){
        $.fancybox.close();
        return false;
    });


    //АККОРДИОН
    $("body").on("click", ".accordion-item-title a", function(){

        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).closest(".accordion-item").find(".accordion-item-body").slideUp();
        }else{
            $(this).addClass("active");
            $(this).closest(".accordion-item").find(".accordion-item-body").slideDown();
        }

        return false;
    });
    //АККОРДИОН


    //СКОЛЬЗЯЩЯЯ ШАПКА САЙТА
    $(function() {

        let header = $('.header');

        $(window).scroll(function() {

            if($(this).scrollTop() > 0) {
                header.addClass('header_fixed');
            } else {
                header.removeClass('header_fixed');
            }

        });
    });
    //СКОЛЬЗЯЩЯЯ ШАПКА САЙТА



    //МОБИЛЬНОЕ МЕНЮ
    $("body").on("click", ".header-btns-mobile a", function(){

        $("html").addClass("has-menu-open");

        return false;

    });

    $("body").on("click", ".opened-menu-btn a", function () {

        $("html").removeClass("has-menu-open");

        return false;
    });
    //МОБИЛЬНОЕ МЕНЮ



    //АККОРДИОН
    $("body").on("click", ".accordion-block-item .accordion-block-item-name a", function(){

        if($(this).closest(".accordion-block-item").hasClass("open")){
            $(this).closest(".accordion-block-item").removeClass("open");
            $(this).closest(".accordion-block-item").find(".accordion-block-item-bottom").slideUp();
        }else{
            $(this).closest(".accordion-block-item").addClass("open");
            $(this).closest(".accordion-block-item").find(".accordion-block-item-bottom").slideDown();
        }

        return false;
    });
    //АККОРДИОН



    //ПЛАВНЫЙ СКРОЛЛ К ЯКОРЮ
    $("body").on("click", ".scrollTo", function(){
        $("html, body").animate({
            scrollTop: ($($(this).attr("href")).offset().top-100) + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
    //ПЛАВНЫЙ СКРОЛЛ К ЯКОРЮ

    //КОНТРОЛЬ ИНПУТОВ
    $("body").on("keyup", ".input-line input", function(){

        if($(this).val().length > 0){
            $(this).addClass("hovered");
            //$(this).closest(".form-container-line").addClass("open-line-input");
        }else{
            $(this).removeClass("hovered");
            //$(this).closest(".form-container-line").removeClass("open-line-input");
        }

    });
    //КОНТРОЛЬ ИНПУТОВ


    //ПОКАЗАТЬ ШАПКУ ПРИ ОБРАТНОМ СКРОЛЛЕ
    $("html").on('mousewheel', 'body', function(e){



        //Узнаем куда крится колесико
        if (e.originalEvent.wheelDelta / 120 > 0) {

            //scroll up
            $(".header").removeClass("hide");

        } else {

            //scroll down
            if($(document).scrollTop() > 140) {
                $(".header").addClass("hide");
            }

        }

    });
    //ПОКАЗАТЬ ШАПКУ ПРИ ОБРАТНОМ СКРОЛЛЕ

    /*
    $('.marquee').marquee({
        duration: 7000,
        startVisible: true,
        duplicated: true
    });
    */

    /*
    $('.marquee-revers').marquee({
        duration: 30000,
        startVisible: true,
        duplicated: true,
    });
    */


    var time = 5;
    var $bar,
        isPause,
        tick,
        percentTime;
    $bar = $('.slider-progress .progress');
    $barRound = $('.progress');

    $('.main-action-list-block').on({
        mouseenter: function() {
            isPause = true;
        },
        mouseleave: function() {
            isPause = false;
        }
    })

    function startProgressbar() {
        resetProgressbar();
        percentTime = 0;
        isPause = false;
        tick = setInterval(interval, 10);
    }

    function interval() {

        percentTime += 1 / (time + 0.1);

        $bar.css({
            width: percentTime + '%'
        });

        if (percentTime >= 100) {
            //$('.main-action-list-block-container').slick('slickNext');
            startProgressbar();
        }

    }

    function resetProgressbar() {
        $bar.css({
            width: 0+'%'
        });
        clearTimeout(tick);
    }

    startProgressbar();


    /*
    $('.main-action-list-block-container').slick({
        autoplay: false,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $(".main-action-list-block-btns .slick-btn-prev"),
        nextArrow: $(".main-action-list-block-btns .slick-btn-next"),
        //asNavFor: '.main-action-list-block-numbers'
    });
    */

    $('.main-action-list-block-container').on('afterChange', function() {
        var dataId = $('.slick-current').attr("data-slick-index");

        $(".main-action-list-block-bottom .current-number").text(parseInt(dataId)+1);
        console.log(dataId);
    });

    /*
    $('.main-action-list-block-numbers').slick({
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.main-action-list-block-container',
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true
    });
    */

    /*
    $(".section-main-gallery-slider").slick({
        infinite: true,
        arrows: false,
        autoplay: false,
        dots: false,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '17.3%',
        responsive: [
        {
            breakpoint: 1799,
            settings: {
                centerPadding: '17.75%',
            }
        },{
            breakpoint: 1023,
            settings: {
                centerPadding: '15%',
            }
        },{
            breakpoint: 767,
            settings: {
                centerPadding: '10px',
            }
        }
    ]
    });
    */


    //СЛУШАТЕЛЬ СОБЫТИЯ КЛИКА ПО КОМАНДЕ
    $("body").on("click", ".team-item a", function(){
        $("html").removeClass("has-trainer-close");
        $("html").addClass("has-trainer-open");
        $(".header").removeClass("hide");
        return false;
    });
    $("body").on("click", ".close-trainer-modal a", function(){
        $("html").removeClass("has-trainer-open");
        $("html").addClass("has-trainer-close");
        $(".header").addClass("hide");
        return false;
    });
    //СЛУШАТЕЛЬ СОБЫТИЯ КЛИКА ПО КОМАНДЕ

    //ГАЛЛЕРЕЯ С ПАРАЛЛАКС ЭФФЕКТОМ
    $("[gallery-slider]").each((function() {

        //let e = $(this).find('[slider-btn="next"]')[0],
        //    t = $(this).find('[slider-btn="prev"]')[0];

        new Swiper($(this).find(".swiper")[0],{
            speed: 800,
            loop: !0,
            centeredSlides: !0,
            followFinger: !0,
            slideToClickedSlide: !0,
            grabCursor: !0,
            a11y: !1,
            allowTouchMove: !0,
            slidesPerView: 1,
            spaceBetween: 4,
            rewind: !1,
            parallax: !0,
            /*
            navigation: {
                nextEl: e,
                prevEl: t
            },
            */
            mousewheel: {
                forceToAxis: !0
            },
            keyboard: {
                enabled: !0,
                onlyInViewport: !0
            },
            breakpoints: {
                768: {
                    spaceBetween: 8,
                    initialSlide: 1
                }
            }
        })

    }));
    //ГАЛЛЕРЕЯ С ПАРАЛЛАКС ЭФФЕКТОМ

    //ГАЛЛЕРЕЯ БРЕНДОВ
    $("[brands-slider]").each((function() {

        //let e = $(this).find('[slider-btn="next"]')[0],
        //    t = $(this).find('[slider-btn="prev"]')[0];

        new Swiper($(this).find(".swiper")[0],{
            speed: 800,
            loop: !1,
            centeredSlides: !1,
            followFinger: !0,
            slideToClickedSlide: !0,
            grabCursor: !0,
            a11y: !1,
            allowTouchMove: !0,
            slidesPerView: 1,
            spaceBetween: 4,
            rewind: !1,
            parallax: !0,
            slidesPerView: 2,
            /*
            navigation: {
                nextEl: e,
                prevEl: t
            },
            */
            mousewheel: {
                forceToAxis: !0
            },
            keyboard: {
                enabled: !0,
                onlyInViewport: !0
            },
            breakpoints: {
                768: {
                    spaceBetween: 8,
                    initialSlide: 1
                }
            }
        })

    }));
    //ГАЛЛЕРЕЯ БРЕНДОВ

    //ГАЛЛЕРЕЯ ТРЕНЕРОВ
    $("[team-slider]").each((function() {

        console.log("here");

        let e = $(this).find('.team-slider-btn-container .slide-prev')[0],
            t = $(this).find('.team-slider-btn-container .slide-next')[0];

        new Swiper($(this).find(".swiper")[0],{
            speed: 800,
            loop: !0,
            centeredSlides: !1,
            followFinger: !0,
            slideToClickedSlide: !0,
            grabCursor: !0,
            a11y: !1,
            allowTouchMove: !0,
            spaceBetween: 4,
            rewind: !1,
            parallax: !1,
            slidesPerView: 4,
            navigation: {
                nextEl: t,
                prevEl: e
            },
            mousewheel: {
                forceToAxis: !0
            },
            keyboard: {
                enabled: !0,
                onlyInViewport: !0
            },
            breakpoints: {
                320: {
                    spaceBetween: 8,
                    slidesPerView: 1,
                    initialSlide: 1
                },
                768: {
                    spaceBetween: 4,
                    slidesPerView: 2,
                    initialSlide: 1
                },
                1024: {
                    spaceBetween: 4,
                    slidesPerView: 3,
                    initialSlide: 1
                },
                1280: {
                    spaceBetween: 4,
                    slidesPerView: 4,
                    initialSlide: 1
                }
            }
        })

    }));
    // ГАЛЛЕРЕЯ ТРЕНЕРОВ
    const swiperGallery = () => {
        const gallery = document.querySelector(".case-detail-stages-list-item-gallery");

        if (gallery && window.innerWidth < 1023) {
            new Swiper(gallery, {
                slidesPerView: 1,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    767: {
                        slidesPerView: 2
                    }
                }
            });
        }
    };

    window.addEventListener("resize", swiperGallery);

    swiperGallery();

    //ГАЛЛЕРЕЯ АКЦИЙ И НОВОСТЕЙ
    $("[news-slider]").each((function() {

        console.log("here");

        let e = $(this).find('.team-slider-btn-container .slide-prev')[0],
            t = $(this).find('.team-slider-btn-container .slide-next')[0];

        new Swiper($(this).find(".swiper")[0],{
            speed: 800,
            loop: !0,
            centeredSlides: !1,
            followFinger: !0,
            slideToClickedSlide: !0,
            grabCursor: !0,
            a11y: !1,
            allowTouchMove: !0,
            spaceBetween: 4,
            rewind: !1,
            parallax: !1,
            slidesPerView: 3,
            navigation: {
                nextEl: t,
                prevEl: e
            },
            mousewheel: {
                forceToAxis: !0
            },
            keyboard: {
                enabled: !0,
                onlyInViewport: !0
            },
            breakpoints: {
                320: {
                    spaceBetween: 8,
                    slidesPerView: 1,
                    initialSlide: 1
                },
                768: {
                    spaceBetween: 4,
                    slidesPerView: 2,
                    initialSlide: 1
                },
                1024: {
                    spaceBetween: 4,
                    slidesPerView: 2,
                    initialSlide: 1
                },
                1280: {
                    spaceBetween: 4,
                    slidesPerView: 3,
                    initialSlide: 1
                }
            }
        })

    }));

    // Меню бургер
    const burger = document.querySelector('.burger-menu')
    const overplay = document.querySelector('.overplay')
    const burgerContainer = document.querySelector('.burger-container')
    burger.addEventListener('click', function(){
        burger.classList.toggle('active')
        overplay.classList.toggle('active')
    })
document.addEventListener('click', function(event) {
    if (!event.target.closest('.burger-menu')  && !event.target.closest('.burger-container')) {
      burger.classList.remove('active');
      overplay.classList.remove('active');
    }
  });
  burgerContainer.addEventListener('click', function(event) {
    event.stopPropagation(); 
});

    //ГАЛЛЕРЕЯ АКЦИЙ И НОВОСТЕЙ


    /*
    $(".team-slider-container").slick({
        infinite: true,
        prevArrow: $(".team-slider .team-slider-btn .slide-prev"),
        nextArrow: $(".team-slider .team-slider-btn .slide-next"),
        autoplay: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1279,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },{
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },{
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $(".news-slider-container").slick({
        infinite: true,
        prevArrow: $(".news-slider .team-slider-btn .slide-prev"),
        nextArrow: $(".news-slider .team-slider-btn .slide-next"),
        autoplay: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1279,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },{
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },{
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    */

    /*
    $(".service-slider-container").slick({
        infinite: true,
        prevArrow: $(".service-slider .team-slider-btn .slide-prev"),
        nextArrow: $(".service-slider .team-slider-btn .slide-next"),
        autoplay: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1279,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },{
                breakpoint: 1023,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },{
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    */

});
