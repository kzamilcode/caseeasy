(function ($) {
  "use strict";

  // Mobile Menu Activeion Js
  var cururl = window.location.pathname;
  var curpage = cururl.substr(cururl.lastIndexOf("/") + 1);
  var hash = window.location.hash.substr(1);
  if (
    (curpage === "" || curpage === "/" || curpage === "admin") &&
    hash === ""
  ) {
  } else {
    $(".header-navigation-area li").each(function () {
      $(this).removeClass("active");
    });
    if (hash != "")
      $(".header-navigation-area li a[href='" + hash + "']")
        .parents("li")
        .addClass("active");
    else
      $(".header-navigation-area li a[href='" + curpage + "']")
        .parents("li")
        .addClass("active");
  }

  // Header Sticky Menu
  var windows = $(window);
  var stick = $(".header-sticky");
  windows.on("scroll", function () {
    var scroll = windows.scrollTop();
    if (scroll < 245) {
      stick.removeClass("sticky");
    } else {
      stick.addClass("sticky");
    }
  });

  // Annual & Month Price Change
  $(".clickme a.nav-link").on("click", function (e) {
    e.preventDefault();
    var tagid = $(this).data("tag");

    $(".clickme a.nav-link").removeClass("activelink");
    $(".clickme")
      .find("a.nav-link[data-tag='" + tagid + "']")
      .addClass("activelink");

    $(".list").removeClass("active").addClass("hide");
    $(".list." + tagid)
      .addClass("active")
      .removeClass("hide");
  });

  // Swiper Default Slider Js
  // var mainlSlider = new Swiper('.brand-slider', {
  // direction: 'vertical',
  // slidesPerView: 7,
  // spaceBetween: 30,
  // loop: true,
  // centeredSlides: true,
  // roundLengths: true,
  // autoplay: {
  //     delay: 500,
  //     disableOnInteraction: false,
  // }
  // });

  // Fancybox Js
  $(".image-popup").fancybox();
  $(".video-popup").fancybox();

  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  // scrollToTop Js
  function scrollToTop() {
    var $scrollUp = $("#scroll-to-top"),
      $lastScrollTop = 0,
      $window = $(window);
    $window.on("scroll", function () {
      var st = $(this).scrollTop();
      if (st > $lastScrollTop) {
        $scrollUp.removeClass("show");
      } else {
        if ($window.scrollTop() > 120) {
          $scrollUp.addClass("show");
        } else {
          $scrollUp.removeClass("show");
        }
      }
      $lastScrollTop = st;
    });
    $scrollUp.on("click", function (evt) {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        50
      );
      evt.preventDefault();
    });
  }
  scrollToTop();

  // Timer Tab Panel  Js
  $("#tabs").timerTabPanel();

  $("#tabs2").timerTabPanel({
    startTab: 1,
    timeInterval: 5000,
  });

  // Table Top Pinned Js
  $(".sticky-smart-3").smartSticky({
    show: {
      fixed: "toggle",
    },
  });

  $(" .owl_4").owlCarousel({
    loop: false,
    responsiveClass: true,
    autoplayHoverPause: true,
    autoplay: false,
    slideSpeed: 400,
    touchDrag: false,
    mouseDrag: false,
    autoplayTimeout: 3000,
    nav: true,
    navText: [
      "<img src='assets/img/icon/long-arrow-l.png'>",
      "<img src='assets/img/icon/long-arrow-r.png'>",
    ],
    items: 4,
    responsive: {
      0: {
        items: 1,
        autoplay: true,
        touchDrag: true,
        mouseDrag: true,
      },
      600: {
        items: 3,
        loop: false,
      },
      1000: {},
    },
  });
  $(" .owl_5").owlCarousel({
    loop: false,
    responsiveClass: true,
    autoplayHoverPause: true,
    autoplay: false,
    slideSpeed: 400,
    touchDrag: false,
    mouseDrag: false,
    autoplayTimeout: 3000,
    nav: true,
    navText: [
      "<img src='assets/img/icon/long-arrow-l.png'>",
      "<img src='assets/img/icon/long-arrow-r.png'>",
    ],
    items: 1,
    responsive: {
      0: {
        items: 1,
        autoplay: true,
        touchDrag: true,
        mouseDrag: true,
      },
      600: {
        loop: false,
        nav: false,
      },
      1000: {},
    },
  });

  $(".owl_3").owlCarousel({
    items: 1,
    loop: true,
    mouseDrag: true,
    center: true,
    touchDrag: true,
    animateOut: "slideOutUp",
    animateIn: "slideInUp",
    autoplayHoverPause: true,
    autoplay: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
        // nav: true,
        // autoplay: true,
        // autoplayTimeout: 2000,
        // autoplayHoverPause: true,
        onResize: function () {},
      },
      768: {
        items: 7,
        onResize: function () {},
      },
    },
    // navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    // navContainer: '.owl-nav',
    // dotsContainer: '.owl-dots'
  });

  $(" .owl_1").owlCarousel({
    loop: false,
    responsiveClass: true,
    autoplayHoverPause: true,
    autoplay: false,
    slideSpeed: 400,
    items: 5,
    paginationSpeed: 400,
    autoplayTimeout: 3000,
    nav: true,
    navText: [
      "<img src='assets/img/icon/arrow-middle-left.png'>",
      "<img src='assets/img/icon/arrow-middle-right.png'>",
    ],
    responsive: {
      0: {
        items: 1,
        loop: false,
      },
      600: {
        items: 3,
        loop: false,
      },
      1000: {
        items: 5,
      },
    },
  });

  $(" .owl_2").owlCarousel({
    loop: false,
    responsiveClass: true,
    autoplayHoverPause: true,
    autoplay: false,
    slideSpeed: 400,
    touchDrag: false,
    mouseDrag: false,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
        autoplay: true,
        touchDrag: true,
        mouseDrag: true,
      },
      600: {
        items: 3,
        loop: false,
      },
      1000: {},
    },
  });

  $(" .owl_6").owlCarousel({
    loop: false,
    responsiveClass: true,
    autoplayHoverPause: true,
    autoplay: false,
    slideSpeed: 400,
    touchDrag: false,
    mouseDrag: false,
    dots: false,
    autoplayTimeout: 3000,
    nav: true,
    navText: [
      "<img src='assets/img/icon/l-arrow-left.png'>",
      "<img src='assets/img/icon/l-arrow-right.png'>",
    ],
    items: 4,
    responsive: {
      0: {
        items: 1,
        autoplay: true,
        touchDrag: true,
        mouseDrag: true,
      },
      600: {
        loop: false,
      },
      991: {
        items: 3,
      },
    },
  });

  //swiper-slider

  var galleryTop = new Swiper(".gallery-top", {
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    spaceBetween: 10,
    loop: true,
    loopedSlides: 50,
    slidesPerView: 1,
    mousewheel: true,
    direction: "vertical",
  });

  var galleryThumbs = new Swiper(".gallery-thumbs", {
    centeredSlides: true,
    centeredSlidesBounds: true,
    spaceBetween: 20,
    slidesPerView: "7",
    touchRatio: 0.2,
    loop: true,
    slideToClickedSlide: true,
    loopedSlides: 50,
    direction: "vertical",
  });
  galleryTop.controller.control = galleryThumbs;
  galleryThumbs.controller.control = galleryTop;
})(window.jQuery);
