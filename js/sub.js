$(document).ready(function () {
  $('.btn-c-open').click(function (event) {
    event.preventDefault();
    var $feedback = $(this).closest('li').find('.feedback');
    $feedback.addClass('active');
  });

  $('.btn-c-close').click(function (event) {
    event.preventDefault();
    var $feedback = $(this).closest('.feedback');
    $feedback.removeClass('active');
  });
});