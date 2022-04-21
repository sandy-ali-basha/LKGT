//------------cursor --------------//
$("button ,.tech, a, .global   ")
  .on("mouseenter", function () {
    $(".ball").addClass("focus");
  })
  .on("mouseleave", function () {
    $(".ball").removeClass("focus");
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

// -------sectors morph-----------//
const element = document.getElementById("title");
const pargraph = document.getElementById("itsP");
$("#next").click(function () {
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
