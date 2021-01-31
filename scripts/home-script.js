$(document).ready(function() {

$(document).ready(function() {
    $(window).resize(function() {
      var width = window.innerWidth;
      var height = window.innerHeight;
      var boxHeight = $(".box").height(height / 4 - 2);
      var boxWidth = $(".box").width(width / 8 - 2);
      $(".box2").width(width / 4 - 2);
    }).resize();
});

//ProudBoys selection button

$("#pb-btn").hover(
  function() {
      $("#pb-btn").animate({backgroundColor: "#4568e9"}, 300).children().animate({color: "white"}, 300)
  }, function() {
    $("#pb-btn").animate({backgroundColor: "#efefef"}, 300).children().animate({color: "black"}, 300)
  }
);

//millionMAGAmarch selection button

$("#mmm-btn").hover(
  function() {
      $("#mmm-btn").animate({backgroundColor: "#4568e9"}, 300).children().animate({color: "white"}, 300)
  }, function() {
    $("#mmm-btn").animate({backgroundColor: "#efefef"}, 300).children().animate({color: "black"}, 300)
  }
);

//SaveTheChildren selection button

$("#stc-btn").hover(
  function() {
      $("#stc-btn").animate({backgroundColor: "#4568e9"}, 300).children().animate({color: "white"}, 300)
  }, function() {
    $("#stc-btn").animate({backgroundColor: "#efefef"}, 300).children().animate({color: "black"}, 300)
  }
)

})
