// Cossacs -------------------------------------------
// head slider
$(document).ready(function () {
  $(".header-slider").slick({
    arrows: false,
    draggable: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true, // режим плавної зміни слайдів
  });
});

// main-slider--------------------------------------
$(document).ready(function () {
  $(".main-slider__selected").slick({
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/left-arrow-b.svg" alt="arrow"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/right-arrow-b.svg" alt="arrow"></button>',
    draggable: true,
    autoplay: true /* this is the new line */,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});

// testimonials------------------------
$(document).ready(function () {
  $(".testimonials-slider").slick({
    arrows: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/left-arrow-w.svg" alt="arrow"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/right-arrow-w.svg" alt="arrow"></button>',
    draggable: true,
    autoplay: true /* this is the new line */,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});
// ===========================================================
// анімація lotti
var elem = document.getElementById("header-animation");
var animData = {
  container: elem,
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "../js/cossacs.json",
};
anim = lottie.loadAnimation(animData);
// ============================================================
// Збільшення фото при наведенні
$(function () {
  $(".minimized").click(function (event) {
    var i_path = $(this).attr("src");
    $("body").append(
      '<div id="overlay"></div><div id="magnify"><img src="' +
        i_path +
        '"><div id="close-popup"><i></i></div></div>'
    );
    $("#magnify").css({
      left: ($(document).width() - $("#magnify").outerWidth()) / 2,
      top: ($(window).height() - $("#magnify").outerHeight()) / 2,
    });
    $("#overlay, #magnify").fadeIn("fast");
  });

  $("body").on("click", "#close-popup, #overlay", function (event) {
    event.preventDefault();
    $("#overlay, #magnify").fadeOut("fast", function () {
      $("#close-popup, #magnify, #overlay").remove();
    });
  });
});

// трансформація бутербродного меню в хрестик і назад
$(function () {
  document.querySelector(".mobile-wrapper").onclick = function () {
    document
      .querySelector(".mobile-menu")
      .classList.toggle("mobile-menu-active");
  };
});
// виїзд меню при натисканні на іконку бутербодного меню
$(function () {
  $(".mobile-wrapper").on("click", function () {
    $(".mobile-list").slideToggle(300, function () {
      if ($(this).css("display") === "block") {
        // $(this).removeAttr("style");
      }
    });
  });
});
