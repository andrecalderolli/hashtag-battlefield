// set responsive grid sizes

$(document).ready(function() {
    $(window).resize(function() {
      var width = window.innerWidth;
      var height = window.innerHeight;
      var narratorH = $("#narrator-box").height(height / 2 - 2);
      var narratorW = $("#narrator-box").width(width / 4 - 2);
      var boxHeight = $(".box-story").height(height / 4 - 2);
      var boxWidth = $(".box-story").width(width / 8 - 2);
      var photoWidth = $(".photo").width(3 * width / 8 - 2);
      $(".fixedbox").height(height / 4 - 2).width(width / 8 - 2)
    }).resize();
});

//keeps track of the tweets clicked

var clicks = 1;

var incrementCount = function(){
    clicks++;
};

//opens the Tweet

function popupTweet() {
  var elmId = $(event.target).parent().attr("id");
  $(".popup-overlay").css("visibility", "visible").css("opacity", 0).animate({opacity: 1}, 700);
  $(".tweet-content").empty();
  $(".tweet-content").load("tweets/"+elmId+".xml")
};

function popupMedia() {
  var mediaId = $(event.target).attr("id");
  $(".popup-overlay2").css("visibility", "visible").css("opacity", 0).animate({opacity: 1}, 700);
  $(".media-content").empty();
  $(".media-content").load("media/"+mediaId+".xml")
}

//appends all the buttons and disable them

$(document).ready(function() {
  $(".tweet").append("<button class='clickable' onclick='nextTweet()' disabled></button>");
  $("#tweet1").children().prop("disabled", false);
  $(".narrator-text").load("narration/narration1.xml").css("opacity", 0).animate({opacity: 1}, 800)
});

// toggle next square to open tweet

function nextTweet(){
  popupTweet();
  $(".clickHere").remove()
  $("#tweet"+clicks).removeClass("clickNext", 800, "swing").removeClass("clickNext2", 800, "swing").animate({backgroundColor: 'rgba(239,239,239,0)'}, 800);
  $("#tweet"+clicks).children().removeAttr("onclick").attr("onclick", 'popupTweet()');
  incrementCount();
  if(clicks == 9 || clicks == 12 || clicks == 10 || clicks == 8 || clicks == 6 || clicks == 11) {
    $("#tweet"+clicks).addClass("clickNext2", 800, "swing");
  } else {
    $("#tweet"+clicks).addClass("clickNext", 800, "swing");
  }
  $("#tweet"+clicks).children().prop("disabled", false);
}

// close popup

$(".close-btn").click(function() {
  $(".popup-overlay").animate({opacity: 0}, 700);
  setTimeout (function() {
    $(".popup-overlay").css("visibility", "hidden");
    $(".tweet-content").empty();
  }, 700)
})

$(".close-btn2").click(function() {
  $(".popup-overlay2").animate({opacity: 0}, 700);
  setTimeout (function() {
    $(".popup-overlay2").css("visibility", "hidden");
    $(".media-content").empty()
  }, 700)
})

// change month

$(".close-btn").click(function() {
  //sets what happens in september
  if(clicks == 2) {
    $(".month").empty();
    $(".month").append("Sep");
    $(".narrator-text").css("opacity", 1).animate({opacity: 0}, 300);
    $(".date-fixed").css("opacity", 1).animate({opacity: 0}, 300);
    $(".number-tweets").empty().append("16K tweets");
    $(".that-month").empty();
    $("#narrator-box").animate({backgroundColor: "rgba(69,104,233,0.5)"}, 300).animate({backgroundColor: "#efefef"}, 300);
    $("#date-container").animate({backgroundColor: "rgba(69,104,233,0.5)"}, 300).animate({backgroundColor: "#efefef"}, 300);
    $("#number-tweets-container").animate({backgroundColor: "rgba(69,104,233,0.5)"}, 300).animate({backgroundColor: "#efefef"}, 300);
    $("#media-box").css("opacity", 0).addClass("media1", 300, "swing").animate({opacity: 0.6}, 300).append("<button class='clickable' id='media1' onclick='popupMedia()'></button>");
    setTimeout(
      function() {
        $(".narrator-text").empty();
        $(".narrator-text").load("narration/narration2.xml").animate({opacity: 1}, 300);
        $(".date-fixed").animate({opacity: 1}, 300)
      }
    , 400)
    //october
  } if (clicks == 7) {
    $(".month").empty();
    $(".month").append("Oct");
    $(".number-tweets").empty().append("109K tweets");
    $("#narrator-box").animate({backgroundColor: "rgba(255,102,121,0.5)"}, 300).animate({backgroundColor: "#efefef"}, 300);
    $("#date-container").animate({backgroundColor: "rgba(255,102,121,0.5)"}, 300).animate({backgroundColor: "#efefef"}, 300);
    $("#number-tweets-container").animate({backgroundColor: "rgba(255,102,121,0.5)"}, 300).animate({backgroundColor: "#efefef"}, 300);
    $(".narrator-text").css("opacity", 1).animate({opacity: 0}, 800);
    $("#media-box").empty().animate({opacity: 0}, 800).removeClass("media1", 800);
    $("#media-box").addClass("media2", 800, "swing").animate({opacity: 0.6}, 800).append("<button class='clickable' id='media2' onclick='popupMedia()'></button>");
    setTimeout(
      function() {
        $(".narrator-text").empty();
        $(".narrator-text").load("narration/narration3.xml").animate({opacity: 1}, 800)
      }
    , 900)
  } if (clicks == 12) {
    $(".month").empty();
    $(".month").append("Nov");
    $(".number-tweets").empty().append("19K tweets");
    $("#narrator-box").animate({backgroundColor: "rgba(69,104,233,0.5)"}, 300).animate({backgroundColor: "#efefef"}, 300);
    $("#date-container").animate({backgroundColor: "rgba(69,104,233,0.5)"}, 300).animate({backgroundColor: "#efefef"}, 300);
    $("#number-tweets-container").animate({backgroundColor: "rgba(69,104,233,0.5)"}, 300).animate({backgroundColor: "#efefef"}, 300);
    $(".narrator-text").css("opacity", 1).animate({opacity: 0}, 800);
    $("#media-box").empty().animate({opacity: 0}, 800).removeClass("media2", 800);
    setTimeout(
      function() {
        $(".narrator-text").empty();
        $(".narrator-text").load("narration/narration4.xml").animate({opacity: 1}, 800)
      }
    , 900)
  } if (clicks == 17) {
    $(".month").empty();
    $(".month").append("Dec");
    $("#narrator-box").animate({backgroundColor: "rgba(69,104,233,0.5)"}, 300).animate({backgroundColor: "#efefef"}, 300);
    $("#date-container").animate({backgroundColor: "rgba(69,104,233,0.5)"}, 300).animate({backgroundColor: "#efefef"}, 300);
    $("#number-tweets-container").animate({backgroundColor: "rgba(69,104,233,0.5)"}, 300).animate({backgroundColor: "#efefef"}, 300);
    $(".number-tweets").empty().append("13K tweets");
    $(".narrator-text").css("opacity", 1).animate({opacity: 0}, 800);
    setTimeout(
      function() {
        $(".narrator-text").empty();
        $(".narrator-text").load("narration/narration5.xml").animate({opacity: 1}, 800)
      }
    , 900)
  } if (clicks == 19) {
    $("#date-container").children().remove();
    $("#date-container").css("background-color", "#4568e9").append("<p class='next'>MENU</p>");
  //  $("#media-box").css("opacity", 1).css("background-color", "#FF6679").append("<p class='next'>#millionMAGAmarch</p>");
  //  $("#media-box2").css("background-color", "#FFD91A").append("<p class='next'>#SaveTheChildren</p>");
    $(".next").css("opacity", 0).animate({opacity: 1}, 800);
    $("#number-tweets-container").empty();
  //  $("#number-tweets-container").append("<p class='next'>download all the tweets</p>");
    $(".tweet").animate({backgroundColor: 'rgba(239,239,239,0.7)'}, 800);
    $(".invisible").animate({opacity: 1}, 800);
    setTimeout(
      function() {
        $("#narrator-box").addClass("narrator-box-final");
        $(".narrator-text").empty().addClass("narrator-text-final");
        $(".narrator-text").load("narration/narrationfinal.xml").animate({opacity: 1}, 800)
      }
    , 900)
  }
});

// button effects
$("#media-box").hover(
  function() {
    $(this).animate({opacity: 1}, 600);
  }, function() {
    $(this).animate({opacity: 0.6}, 600);
  }
)
