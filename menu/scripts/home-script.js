$(document).ready(function() {

$(document).ready(function() {
    $(window).resize(function() {
      var width = window.innerWidth;
      var height = window.innerHeight;
      $(".box").height(height / 4 - 2);
      $(".box").width(width / 8 - 2).css("max-width", $("#wraper").width() / 8);
      $(".box2").width(width / 4 - 2).css("max-width", $("#wraper").width() / 4);
    }).resize();
});

var visit1 = sessionStorage.getItem("pb-visited");
var visit2 = sessionStorage.getItem("mmm-visited");
var visit3 = sessionStorage.getItem("stc-visited");


if (visit1) {
  $("#pb-btn").empty().addClass("pb-visited");
};

if (visit2) {
  $("#mmm-btn").empty().addClass("mmm-visited");
};

if (visit3) {
  $("#stc-btn").empty().addClass("stc-visited");
};


//ProudBoys selection button

$("#pb-btn").hover(
  function() {
    if(!visit1) {
      $("#pb-btn").addClass("hovering-btn", 300).animate({backgroundColor: "#4568e9"}, 300).children().animate({color: "white"}, 300)
    } else {
      $("#pb-btn").animate({opacity: 0.6}, 300);
    }
  }, function() {
    if(!visit1) {
      $("#pb-btn").removeClass("hovering-btn", 300).animate({backgroundColor: "#efefef"}, 300).children().animate({color: "black"}, 300)
    } else {
      $("#pb-btn").animate({opacity: 1}, 300);
    }
  }
);

//millionMAGAmarch selection button

$("#mmm-btn").hover(
  function() {
    if(!visit2) {
      $("#mmm-btn").addClass("hovering-btn", 300).animate({backgroundColor: "#ff6477"}, 300).children().animate({color: "white"}, 300)
    } else {
      $("#mmm-btn").animate({opacity: 0.6}, 300);
    }
  }, function() {
    if(!visit2) {
      $("#mmm-btn").removeClass("hovering-btn", 300).animate({backgroundColor: "#efefef"}, 300).children().animate({color: "black"}, 300)
    } else {
      $("#mmm-btn").animate({opacity: 1}, 300);
    }
  }
);

//SaveTheChildren selection button

$("#stc-btn").hover(
  function() {
    if(!visit3) {
      $("#stc-btn").addClass("hovering-btn", 300).animate({backgroundColor: "#ffd600"}, 300).children().animate({color: "white"}, 300)
    } else {
      $("#stc-btn").animate({opacity: 0.6}, 300);
    }
  }, function() {
    if(!visit3) {
      $("#stc-btn").removeClass("hovering-btn", 300).animate({backgroundColor: "#efefef"}, 300).children().animate({color: "black"}, 300)
    } else {
      $("#stc-btn").animate({opacity: 1}, 300);
    }
  }
);

})
