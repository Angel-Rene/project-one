
$("#navtoggle").click(function(event) {
  event.preventDefault();
  if ($('#site-header').is(".menu-open")) {
    $('#site-header').removeClass("menu-open");
    $("#site-header").css("height", "77px");
  } else {
    $('#site-header').addClass("menu-open");
    $("#site-header").css("height", "460px");
  }
});
var nav = [91, 102, 196, 211, 85, 93];
var offset = [52, 142, 246, 485, 527];

window.onload = function() {
  $(".hover-effect").width(nav[$("#site-nav a.active").index()]).css("left", offset[$("#site-nav a.active").index()]);
  setTimeout(function() {
    $("body").addClass("ready");
  }, 100);
  $("#site-nav").hover(
    function() {
      $("#site-nav a").hover(
        function() {
          $(".hover-effect").width(nav[$("#site-nav a").index(this)]).css("left", offset[$("#site-nav a").index(this)]);
          $("#site-nav").addClass("normal");
        });
    },
    function(e) {
      $(".hover-effect").width(nav[$("#site-nav a.active").index()]).css("left", offset[$("#site-nav a.active").index()]);
      $("#site-nav").removeClass("normal");
    });
};
