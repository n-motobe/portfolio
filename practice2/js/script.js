$(".btn").on("click", function () {
  $(this).toggleClass("is-active");
  $(".nav_sp").toggleClass("is-active");
});
$(".nav_sp a").on("click", function () {
  $(this).removeClass("is-active");
  $(".nav_sp").removeClass("is-active");
});
