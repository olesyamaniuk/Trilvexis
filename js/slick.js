$(function () {
  $(".r-a-reviews-list").slick({
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
    prevArrow: ".r-a-reviews-list-left",
    nextArrow: ".r-a-reviews-list-right",
  });
});
$(function () {
  $(".r-a-features-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: true,
    cssEase: "linear",
    prevArrow: ".r-a-features-list-left",
    nextArrow: ".r-a-features-list-right",
  });
});
$(function () {
  $(".r-a-characters-list").slick({
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
    prevArrow: ".r-a-characters-list-left",
    nextArrow: ".r-a-characters-list-right",
  });
});
$(function () {
  $(".r-a-uniqueness-list").slick({
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
    prevArrow: ".r-a-uniqueness-list-left",
    nextArrow: ".r-a-uniqueness-list-right",
  });
});
$(function () {
  const $slider = $(".r-a-gallery-list");

  $slider.on("init reInit afterChange", function (event, slick, currentSlide) {
    let i = (currentSlide ? currentSlide : 0) + 1;
    let progress = (i / slick.slideCount) * 100;
    $(".r-a-progress-fill").css("width", progress + "%");
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
    prevArrow: ".r-a-gallery-list-left",
    nextArrow: ".r-a-gallery-list-right",
  });
});
