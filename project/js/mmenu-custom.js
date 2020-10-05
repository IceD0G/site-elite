$(function () {
  if (window.matchMedia('(max-width: 768px)').matches) {
    $('#my-menu').mmenu({
      extensions: ['effect-menu-slide'],
      navbar: {
        title: 'Основное меню сайта'
      }
    });
    var api = $('#my-menu').data('mmenu');

    api.bind('open:finish', function () {
      $('.hamburger').addClass('is-active');
      $('.content').addClass('show');
    });
    api.bind('close:finish', function () {
      $('.hamburger').removeClass('is-active');
      $('.content').removeClass('show')
    });
  };
});