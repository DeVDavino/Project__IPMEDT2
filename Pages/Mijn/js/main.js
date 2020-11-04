var clicks = 0;
var mineralCounter = 0;
var audio = new Audio("audio/stone.mp3");
var audio2 = new Audio("audio/stone2.mp3");
document.getElementById("CounterVar--js").innerHTML = mineralCounter + "/3";

// function redirectToNextPage() {
  
//   window.location.href = "../Scheiden/index.html";
// }

var audioTracker = 0;
document.getElementById("myButton--js").disabled = true;
function mute() {

  muteButton.classList.toggle("headermute--muted");
  if (audioTracker == 0) {
    audio.muted = true;
    audio2.muted = true;
    audioTracker++;
  } else if (audioTracker == 1) {
    audio.muted = false;
    audio2.muted = false;
    audioTracker--;
  }

}

//grid mining functies 1-6
function onClick1() {

  console.log(clicks);
  var element = document.getElementById("content1--js");
  if (clicks <= 0) {
    element.classList.add("stone1");
    clicks += 1;
    audio.play();
    return clicks;

  } else if (clicks <= 1) {
    element.classList.toggle("stone2");
    audio.play();
    clicks += 1;
    return clicks;

  } else if (clicks <= 2) {
    element.classList.toggle("stone3");
    audio.play();
    clicks += 1;
    return clicks;

  } else if (clicks = 3) {
    element.classList.remove("stone1", "stone2", "stone3", "mine__grid__content1")
    element.classList.add("coltan");
    audio2.play();
    mineralCounter++;
    var results = [clicks = 0, mineralCounter];
    document.getElementById("CounterVar--js").innerHTML = mineralCounter + "/3";
    document.getElementById('content1--js').removeAttribute("onclick");
    document.getElementById('textAppear1').style.opacity = "1";
  }
  return results;
};

function onClick2() {

  console.log(clicks);
  var element = document.getElementById("content2--js");
  if (clicks <= 0) {
    element.classList.add("stone1");
    clicks += 1;
    audio.play();
    return clicks;
  } else if (clicks <= 1) {
    element.classList.toggle("stone2");
    clicks += 1;
    audio.play();
    return clicks;
  } else if (clicks <= 2) {
    element.classList.toggle("stone3");
    clicks += 1;
    audio.play();
    return clicks;
  } else if (clicks = 3) {
    element.classList.remove("stone1", "stone2", "stone3", "mine__grid__content2")
    element.classList.add("empty");
    audio2.play();
    var results = [clicks = 0, mineralCounter];
    document.getElementById('content2--js').removeAttribute("onclick");
    document.getElementById('textAppear2').style.opacity = "1";

  }
  return results;

};

function onClick3() {
  console.log(clicks);
  var element = document.getElementById("content3--js");
  if (clicks <= 0) {
    element.classList.add("stone1");
    clicks += 1;
    audio.play();
    return clicks;
  } else if (clicks <= 1) {
    element.classList.toggle("stone2");
    clicks += 1;
    audio.play();
    return clicks;
  } else if (clicks <= 2) {
    element.classList.toggle("stone3");
    clicks += 1;
    audio.play();
    return clicks;
  } else if (clicks = 3) {
    element.classList.remove("stone1", "stone2", "stone3", "mine__grid__content3")
    element.classList.add("empty");
    audio2.play();
    var results = [clicks = 0, mineralCounter];
    document.getElementById('content3--js').removeAttribute("onclick");
    document.getElementById('textAppear3').style.opacity = "1";
  }
  return results;
};

function onClick4() {
  console.log(clicks);
  var element = document.getElementById("content4--js");
  if (clicks <= 0) {
    element.classList.add("stone1");
    clicks += 1;
    audio.play();
    return clicks;
  } else if (clicks <= 1) {
    element.classList.toggle("stone2");
    clicks += 1;
    audio.play();
    return clicks;
  } else if (clicks <= 2) {
    element.classList.toggle("stone3");
    clicks += 1;
    audio.play();
    return clicks;
  } else if (clicks = 3) {
    element.classList.remove("stone1", "stone2", "stone3", "mine__grid__content4")
    element.classList.add("wolframite");
    audio2.play();
    mineralCounter++;
    var results = [clicks = 0, mineralCounter];
    document.getElementById("CounterVar--js").innerHTML = mineralCounter + "/3";
    document.getElementById('content4--js').removeAttribute("onclick");
    document.getElementById('textAppear4').style.opacity = "1";
  }
  return results;
};

function onClick5() {
  console.log(clicks);
  var element = document.getElementById("content5--js");
  if (clicks <= 0) {
    element.classList.add("stone1");
    clicks += 1;
    audio.play();
    return clicks;
  } else if (clicks <= 1) {
    element.classList.toggle("stone2");
    clicks += 1;
    audio.play();
    return clicks;
  } else if (clicks <= 2) {
    element.classList.toggle("stone3");
    clicks += 1;
    audio.play();
    return clicks;
  } else if (clicks = 3) {
    element.classList.remove("stone1", "stone2", "stone3", "mine__grid__content5")
    element.classList.add("casserite");
    audio2.play();
    mineralCounter++;
    var results = [clicks = 0, mineralCounter];
    document.getElementById("CounterVar--js").innerHTML = mineralCounter + "/3";
    document.getElementById('content5--js').removeAttribute("onclick");
    document.getElementById('textAppear5').style.opacity = "1";
  }

  return results;
};

function onClick6() {
  console.log(clicks);
  var element = document.getElementById("content6--js");
  if (clicks <= 0) {
    element.classList.add("stone1");
    clicks += 1;
    audio.play();
    return clicks;
  } else if (clicks <= 1) {
    element.classList.toggle("stone2");
    clicks += 1;
    audio.play();
    return clicks;
  } else if (clicks <= 2) {
    element.classList.toggle("stone3");
    clicks += 1;
    audio.play();
    return clicks;
  } else if (clicks = 3) {
    element.classList.remove("stone1", "stone2", "stone3", "mine__grid__content6")
    element.classList.add("empty");
    audio2.play();
    var results = [clicks = 0, mineralCounter];
    document.getElementById('content6--js').removeAttribute("onclick");
    document.getElementById('textAppear6').style.opacity = "1";
  

  }
  return results;
};
//einde grid mining functie

// Mineralen checken + button laten verschijnen
setInterval(onLoad, 500);

function onLoad() {
  if (mineralCounter == 3) {
    document.getElementById("myButton--js").style.opacity = "1";
    document.getElementById("myButton--js").style.backgroundColor = "#0EA900";
    document.getElementById("CounterVar--js").style.fontSize = "2.55rem";
    document.getElementById("CounterVar--js").style.borderColor = "#00FF00";
    document.getElementById("CounterVar--js").innerHTML = "✔";
    document.getElementById("CounterVar--js").style.color = "#eeeeee";
    document.getElementById("myButton--js").disabled = false;
    
  } else {
    console.log("big error");
  }
}