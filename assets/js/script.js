//------------cursor --------------//
$("button ,.tech, a, .global ,input  ")
  .on("mouseenter", function () {
    $(".ball").addClass("focus");
  })
  .on("mouseleave", function () {
    $(".ball").removeClass("focus");
  });

// $(".li")
//   .on("mouseenter", function () {
//     $(".cursor-follower").addClass("showImg");
//   })
//   .on("mouseleave", function () {
//     $(".cursor-follower").removeClass("showImg");
//   });
$(".TelecomLi")
  .on("mouseenter", function () {
    $(".telcomImg").addClass("showImg");
  })
  .on("mouseleave", function () {
    $(".telcomImg").removeClass("showImg");
  });
$(".printingli")
  .on("mouseenter", function () {
    $(".printingImg").addClass("showImg");
  })
  .on("mouseleave", function () {
    $(".printingImg").removeClass("showImg");
  });
//--------side--------------//
$(".menu").click(function () {
  $(".navigation").addClass("animate__fadeInRight show");
  $(".navigation").removeClass(" animate__fadeOutRight");
});
$(".close").click(function () {
  $(".navigation").removeClass("animate__fadeInRight");
  $(".navigation").addClass(" animate__fadeOutRight");
});

//--sectors----

$(window).on("resize", function (e) {
  checkScreenSize();
});

checkScreenSize();

function checkScreenSize() {
  var newWindowWidth = $(window).width();
  if (newWindowWidth < 481) {
    $(".li").click(function () {
      $(".listt").removeClass("animate__animated animate__fadeInRight");
      $(".title").removeClass("animate__animated animate__fadeOutLeft");
      $(".listt").addClass("animate__animated animate__fadeOutRight");
      $(".title").addClass("animate__animated animate__fadeInLeft");
      window.scrollTo(0, 0);
    });
    $(".back").click(function () {
      $(".listt").removeClass("animate__animated animate__fadeOutRight");
      $(".title").removeClass("animate__animated animate__fadeInLeft");
      $(".listt").addClass("animate__animated animate__fadeInRight");
      $(".title").addClass("animate__animated animate__fadeOutLeft");
    });
  }
}

// -------sectors morph-----------//
const element = document.getElementById("title");
const pargraph = document.getElementById("itsP");
$(".sectors_btn").click(function () {
  $(".sector_title").addClass("animate__fadeOut");
  $("#itsP").addClass("animate__fadeOut");
  $(".red-animation").addClass("red-effect");
  $(".red-2").addClass("red-effect2");
  setTimeout(function () {
    element.innerHTML = "Banking";
    pargraph.innerHTML =
      "sit, amet consectetur adipisicing elit Aliquam accusant ";
    $(".sector_title").addClass("my__fadeInDown");
    $("#itsP").addClass("my__fadeInUp");
    $("#itsP").removeClass("animate__fadeOut");
    $(".sector_title").removeClass("animate__fadeOut");
    $(".red-animation").removeClass("red-effect");
    $(".red-2").removeClass("red-effect2");
  }, 1500);
});
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return elemBottom <= docViewBottom && elemTop >= docViewTop;
}

$(window).scroll(function () {
  $(".header span").each(function () {
    if (isScrolledIntoView(this) === true) {
      $(this).addClass("header_animation");
    }
  });
});
//-------- GSAP --------//
gsap
  .timeline({
    scrollTrigger: {
      trigger: "html",
      scrub: 1,
    },
  })
  .from(".text3", {
    x: -50,
  });
gsap
  .timeline({
    scrollTrigger: {
      trigger: "html",
      scrub: 1,
    },
  })
  .from(".text2", {
    x: 200,
  });
gsap
  .timeline({
    scrollTrigger: {
      trigger: "html",
      scrub: 1,
    },
  })
  .from(".text1", {
    x: -200,
  });

gsap
  .timeline({
    scrollTrigger: {
      trigger: "html",
      scrub: 1,
    },
  })
  .from(".rotating", {
    rotate: -360,
  });

gsap.to(".pImage", {
  yPercent: 100,
  ease: "none",
  scrollTrigger: {
    trigger: ".pSection",
    scrub: true,
  },
});

//-----------GSAP Horizontal Scroll -ScrollTrigger ----------/////
let scroll_tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".factsContainer",
      start: "top bottom",
      scrub: true,
      end: "bottom top",
      // markers: true,
    },
  }),
  facts = [...document.querySelectorAll(".fact")];
scroll_tl.to(facts, {
  xPercent: -50 * (facts.length - 1),
  scrollTrigger: {
    trigger: ".factsContainer_sm",
    start: "top bottom",
    scrub: 1,
    snap: 1 / (facts.length - 1),
    end: "bottom top",
    // markers: true,
  },
});
//second one
let scroll_tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".factsContainer2",
      start: "top bottom",
      scrub: true,
      end: "bottom  top",
      // markers: true,
    },
  }),
  facts2 = [...document.querySelectorAll(".fact2")];
scroll_tl2.to(facts2, {
  xPercent: 20 * (facts2.length - 1),
  scrollTrigger: {
    trigger: ".factsContainer_sm2",
    start: "top bottom",
    scrub: 1,
    // markers: true,
    snap: 1 / (facts2.length - 1),
    end: "bottom top",
  },
});

// ----------swiper------

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: {
    invert: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
var swiper = new Swiper(".factsContainer2", {
  slidesPerView: 8,
  spaceBetween: 5,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  mousewheel: {
    invert: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 8,
      spaceBetween: 20,
    },
  },
});
var swiper = new Swiper(".clientsSwiper", {
  slidesPerView: 8,
  spaceBetween: 5,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,

  mousewheel: {
    invert: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 8,
      spaceBetween: 20,
    },
  },
});
