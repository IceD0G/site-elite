$(document).ready(function () {

  //E-mail Ajax Send
  $("form").submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function () {
      $('.callback-form__wrapper-form-success').addClass("show_success")
      setTimeout(function () {
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

});