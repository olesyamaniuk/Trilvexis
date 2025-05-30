$(function () {
  $(".r-p-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: true,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".r-p-reviews-list-left",
    nextArrow: ".r-p-reviews-list-right",
  });
});
$(function () {
  $(".r-p-uniqueness-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: true,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".r-p-uniqueness-list-left",
    nextArrow: ".r-p-uniqueness-list-right",
  });
});
$(function () {
  const $slider = $(".r-p-gallery-list");

  $slider.on("init reInit afterChange", function (event, slick, currentSlide) {
    let i = (currentSlide ? currentSlide : 0) + 1;
    let progress = (i / slick.slideCount) * 100;
    $(".progress-fill").css("width", progress + "%");
  });

  $slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: true,
    cssEase: "linear",
    prevArrow: ".r-p-gallery-list-left",
    nextArrow: ".r-p-gallery-list-right",
  });
});
