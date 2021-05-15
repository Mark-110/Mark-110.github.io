$(function(){
  $("#header-nav-sp").hide();
  $(".openbtn").click(function () {
    $(this).toggleClass('active');
    $("#header-nav-sp").toggle(300);
  });
});