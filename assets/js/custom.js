// scroll body to 0px on click
$('#back-top').on('click', function () {
  $('#back-top').tooltip('hide');
  $('body,html').animate({
      scrollTop: 0
  }, 1500);
  return false;
});


$('#btn-jumbo').on('click', function () {
  $("html, body").animate({
     scrollTop: $("#consulting").offset().top},'slow');
     return false;
});
