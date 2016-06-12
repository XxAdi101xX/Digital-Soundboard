// allows for the boxes to play sounds when pressed
var myClass;

$('#a').mousedown(function() {
  myClass = doh;
  myClass.play();
});

$("#a").mouseup(function() {
  myClass.pause();
  myClass.currentTime = 0;
});

$('#b').mousedown(function() {
  myClass = re;
  myClass.play();
});

$("#b").mouseup(function() {
  myClass.pause();
  myClass.currentTime = 0;
});

$('#c').mousedown(function() {
  myClass = mi;
  myClass.play();
});

$("#c").mouseup(function() {
  myClass.pause();
  myClass.currentTime = 0;
});

$('#d').mousedown(function() {
  myClass = fa;
  myClass.play();
});

$("#d").mouseup(function() {
  myClass.pause();
  myClass.currentTime = 0;
});

$('#e').mousedown(function() {
  myClass = so;
  myClass.play();
});

$("#e").mouseup(function() {
  myClass.pause();
  myClass.currentTime = 0;
});

$('#f').mousedown(function() {
  myClass = la;
  myClass.play();
});

$("#f").mouseup(function() {
  myClass.pause();
  myClass.currentTime = 0;
});

$('#g').mousedown(function() {
  myClass = ti;
  myClass.play();
});

$("#g").mouseup(function() {
  myClass.pause();
  myClass.currentTime = 0;
});

$('#h').mousedown(function() {
  myClass = Doh;
  myClass.play();
});

$("#h").mouseup(function() {
  myClass.pause();
  myClass.currentTime = 0;
});

// helper functions required to record song
var song = [doh, so, Doh];

var count = 0;

function continueNow() {
  song[count].pause();
  ++count;
  begin();
}

function begin() {
  if (count == song.length) {
    count = 0;
    return;
  }
  song[count].play();
  setTimeout(continueNow, 1000);
}

$(".start").click(function() {
  begin();
});

// The following functions create the recording feature in this app
var recording = false;

$("#a, #b, #c, #d, #e, #f, #g, #h").click(function() {
  if (recording === true) {
    song.push(myClass);
  }
});

$(".record").click(function() {
  if (recording == false) {
    recording = true;
    $("p.record-text").replaceWith("<p>STOP</p>");
    $(".record > p").addClass("record-text");
    $(".recording-indicator").addClass("toggleRed");
  } else {
    recording = false;
    $("p.record-text").replaceWith("<p>RECORD</p>");
    $(".record > p").addClass("record-text");
    $("div.recording-indicator").removeClass("toggleRed");
    if($(".start").hasClass("disabled") && song.length != 0) {
      $(".start").removeClass("disabled");
    }
  }
});

// works the reset button
$(".reset").click(function() {
  song.length = 0;
  $(".start").addClass("disabled");
});

