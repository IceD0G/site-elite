$(document).ready(function () {
  if (window.matchMedia('(max-width: 768px)').matches) {
    $(".photo-slider").owlCarousel({
      items: 1,
      loop: true,
      autoWidth: false,
      startPosition: 1
    });
    $(".sub-slider").owlCarousel({
      items: 1,
      loop: true,
      autoWidth: false,
      startPosition: 1
    });
  } else {
    $(".photo-slider").owlCarousel({
      autoWidth: true,
      items: 1,
      loop: true,
    });
  }

});