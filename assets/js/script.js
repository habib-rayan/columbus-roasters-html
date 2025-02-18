$(document).ready(function ($) {
    'use strict';
    $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop()
        // if (scrolling > 500) {
        //     $('.back-to-top').fadeIn(500)
        // } else {
        //     $('.back-to-top').fadeOut(500)
        // }
        if (scrolling > 50) {
            $('.navbar').addClass('nav-fixed')
        } else {
            $('.navbar').removeClass('nav-fixed');
        }
    })

    //..navbar mobile-menu js start..//
    $(".ham-menu-wrapper").click(function (event) {
        event.stopPropagation();
        $(".mobile-menu-wrapper").toggleClass("active");
        $(".ham-menu").toggleClass("active");
    });


    $(".mobile-drop-down-menu").click(function (event) {
        event.stopPropagation();
        // $(".mobile-drop-down-menu-wrapper").toggleClass("active");
        $(".mobile-drop-down-menu-wrapper").slideToggle();
        $(".drop-down-menu-btn").toggleClass('active');

    });

    $('.mobile-drop-down-menu').on('click', function () {
        $(this).next().slideToggle();
        $(this).parent().toggleClass('active');
    });
    //..navbar mobile-menu js end..//

    //..search bar js start..//
    $(".search-open").click(function (event) {
        event.stopPropagation();
        $(this).next().addClass('active');
    });

    $(".search-bar-close").click(function (event) {
        event.stopPropagation();
        $(this).parent().removeClass('active');
    });
    //..search bar js end..//

    // **..product-single-accordion js start..**
    $('.single-product-accordion-item-title').on('click', function () {
        $(this).next().slideToggle();
        $(this).parent().toggleClass('active');
    });
    // **..product-single-accordion js end..**

    // --tab js start--
    $('.tabs-nav-item:first-child').addClass('active');
    $('.tabs-content-items').hide();
    $('.tabs-content-items:first').show();

    $('.tabs-nav-item').click(function () {
        $('.tabs-nav-item').removeClass('active');
        $(this).addClass('active');
        $('.tabs-content-items').hide();

        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();
        return false;
    });
    // --tab js end--

    // tab content item scroll js start---
    // $(".tabs-content-items").niceScroll();
    // tab content item scroll js start---

    //..counter js start..//
    $('.about-page-counter-up').counterUp({
        delay: 10,
        time: 5000
    });
    //..counter js end..//
})

// product-swiper slider js start--
var swiper = new Swiper(".product-swiper-slider", {
    spaceBetween: 30,
    slidesPerView: 4,
    // grabCursor: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        1: {
            slidesPerView: 1,
        },
        // when window width is >= 480px
        576: {
            slidesPerView: 3,
        },
        // when window width is >= 992px
        992: {
            slidesPerView: 4,
        }
    }
});
// product-swiper slider js end--

// testimonial-swiper slider js start--
var swiper = new Swiper(".testimonial-swiper-slider", {
    spaceBetween: 30,
    slidesPerView: 1,
    // grabCursor: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        1: {
            slidesPerView: 1,
        },
        // when window width is >= 480px
        576: {
            slidesPerView: 1,
        },
        // when window width is >= 992px
        992: {
            slidesPerView: 1,
        }
    }
});
// testimonial-swiper slider js end--

// **..product-single-slider js start..**
var swiper = new Swiper(".single-product-swiper", {
    loop: true,
    spaceBetween: 6,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".single-product-swiper-2", {
    loop: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});
// **..product-single-slider js end..**

// content animation--
new WOW().init();