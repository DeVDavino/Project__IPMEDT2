var clicks = 0;
var mineralCounter = 0;
var audio = new Audio("audio/stone.mp3");
var audio2 = new Audio("audio/stone2.mp3");
var i = 0;
document.getElementById("js--CounterVar").innerHTML = mineralCounter + "/3";
var x = 0;
var audioTracker = 0;
document.getElementById("js--myButton").disabled = true;
var muteButton = document.getElementById("js--muteButton");

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

// grid functie
function onClick(thisElement) {
  if (clicks <= 0) {
    thisElement.classList.add("stone--1");
    clicks += 1;
    audio.play();
    return clicks;
  } else if (clicks <= 1) {
    thisElement.classList.toggle("stone--2");
    audio.play();
    clicks += 1;
    return clicks;

  } else if (clicks <= 2) {
    thisElement.classList.toggle("stone--3");
    audio.play();
    clicks += 1;
    return clicks;

  } else if (clicks = 3) {
    if(thisElement.id == "js--content1") {
      thisElement.classList.remove("stone--1", "stone--2", "stone--3", "mine__content1");
      thisElement.classList.add("coltan");
      document.getElementById('js--textAppear1').style.opacity = "1";
      thisElement.removeAttribute("onclick");
      mineralCounter++;
      document.getElementById("js--CounterVar").innerHTML = mineralCounter + "/3";
    }else if(thisElement.id == "js--content2") {
      thisElement.classList.remove("stone--1", "stone--2", "stone--3", "mine__content1");
      thisElement.classList.add("wolframite");
      document.getElementById('js--textAppear2').style.opacity = "1";
      thisElement.removeAttribute("onclick");
      mineralCounter++;
      document.getElementById("js--CounterVar").innerHTML = mineralCounter + "/3";
    }else if(thisElement.id == "js--content3") {
      thisElement.classList.remove("stone--1", "stone--2", "stone--3", "mine__content1");
      thisElement.classList.add("casserite");
      document.getElementById('js--textAppear3').style.opacity = "1";
      thisElement.removeAttribute("onclick");
      mineralCounter++;
      document.getElementById("js--CounterVar").innerHTML = mineralCounter + "/3";
    }
    else if(thisElement.id == "js--content4" || "js--content5" || "js--content6") {
      thisElement.classList.remove("stone--1", "stone--2", "stone--3", "mine__content1");
      thisElement.classList.add("empty");
      thisElement.getElementsByClassName("textappear")[i].style.opacity = 1;
      thisElement.removeAttribute("onclick");
    }
    audio2.play();
    var results = [clicks = 0, mineralCounter];
  }
  return results;
};

// Mineralen checken + button laten verschijnen
setInterval(onLoad, 500);

function onLoad() {
  if (mineralCounter == 3) {
    document.getElementById("js--myButton").style.opacity = "1";
    document.getElementById("js--myButton").style.backgroundColor = "#0EA900";
    document.getElementById("js--CounterVar").style.fontSize = "2.55rem";
    document.getElementById("js--CounterVar").style.borderColor = "#00FF00";
    document.getElementById("js--CounterVar").innerHTML = "✔";
    document.getElementById("js--CounterVar").style.color = "#eeeeee";
    document.getElementById("js--myButton").disabled = false;
  } 
}
setInterval(check, 100);

function check() {
  var button = document.getElementById("js--myButton");
  if (mineralCounter >= 3) {
    button.style.opacity = '1';
  } else {
    button.style.opacity = '0';
  }
}