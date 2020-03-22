$(document).ready(function() {

  $(window).scroll(function() {
    if ($("header").offset().top === 0) {
      $("header").removeClass("sticky");
    }

    if ($(window).scrollTop() > $("header").offset().top) {
      $("header").addClass("sticky");
    }
  });

});
