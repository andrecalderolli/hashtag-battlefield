$(document).ready(function() {

// set responsive grid sizes

$(document).ready(function() {
    $(window).resize(function() {
      var width = window.innerWidth;
      var height = window.innerHeight;
      var boxHeight = $(".box").height(height / 4 - 2);
      var boxWidth = $(".box").width(width / 8 - 2);
      $(".box2").width(width / 4 - 2);
    }).resize();
});

function startStory() {
  $("#box1").animate({width: 2 * $("#box1").width() + 4, height: 2 * $("#box1").height() + 4}, 2000);
  $(".homebtn").animate({backgroundColor: "#efefef"}, 1000);
  $("#box18").addClass("invisible", 700);
  $("#box18").animate({width: $("#box18").width() / 2 + 1}, 1600)
  $(".box").removeClass("off", 700, "swing");
  $("#image-open").animate({opacity: 0}, 700);
  $("p").animate({opacity: 0}, 700);
  $("h1").animate({opacity: 0}, 700);
}

$("#story-content").load("savethechildren.xml");
$.getScript("script-story.js");
$("#story-content").css("opacity", 0);

$(".startbtn").click(function(){
  //startStory();
  setTimeout(
    function() {
      $("#opening-content").animate({opacity: 0}, 2000);
      $("#story-content").animate({opacity: 1}, 2000);
    }, 100);
    setTimeout(
      function() {
        $("#opening-content").empty();
    }
    , 3000)
  })
})
