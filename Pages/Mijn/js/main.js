var clicks = 0;
var mineralCounter = 0;
var audio = new Audio("audio/stone.mp3");
var audio2 = new Audio("audio/stone2.mp3");
var i = 0;
document.getElementById("CounterVar--js").innerHTML = mineralCounter + "/3";


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

// grid functie
function onClick(thisElement) {
  if (clicks <= 0) {
    thisElement.classList.add("stone1");
    clicks += 1;
    audio.play();
    return clicks;
  } else if (clicks <= 1) {
    thisElement.classList.toggle("stone2");
    audio.play();
    clicks += 1;
    return clicks;

  } else if (clicks <= 2) {
    thisElement.classList.toggle("stone3");
    audio.play();
    clicks += 1;
    return clicks;

  } else if (clicks = 3) {
    if(thisElement.id == "content1--js"){
      thisElement.classList.remove("stone1", "stone2", "stone3", "mine__grid__content1");
      thisElement.classList.add("coltan");
      document.getElementById('textAppear1').style.opacity = "1";
      thisElement.removeAttribute("onclick");
      mineralCounter++;
      document.getElementById("CounterVar--js").innerHTML = mineralCounter + "/3";
    }else if(thisElement.id == "content2--js"){
      thisElement.classList.remove("stone1", "stone2", "stone3", "mine__grid__content1");
      thisElement.classList.add("wolframite");
      document.getElementById('textAppear2').style.opacity = "1";
      thisElement.removeAttribute("onclick");
      mineralCounter++;
      document.getElementById("CounterVar--js").innerHTML = mineralCounter + "/3";
    }else if(thisElement.id == "content3--js"){
      thisElement.classList.remove("stone1", "stone2", "stone3", "mine__grid__content1");
      thisElement.classList.add("casserite");
      document.getElementById('textAppear3').style.opacity = "1";
      thisElement.removeAttribute("onclick");
      mineralCounter++;
      document.getElementById("CounterVar--js").innerHTML = mineralCounter + "/3";
    }
    else if(thisElement.id == "content--js"){
      thisElement.classList.remove("stone1", "stone2", "stone3", "mine__grid__content1");
      thisElement.classList.add("empty");
      document.getElementsByClassName("textappear")[i].style.opacity = 1;
      thisElement.removeAttribute("onclick");
      i++;
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
    document.getElementById("myButton--js").style.opacity = "1";
    document.getElementById("myButton--js").style.backgroundColor = "#0EA900";
    document.getElementById("CounterVar--js").style.fontSize = "2.55rem";
    document.getElementById("CounterVar--js").style.borderColor = "#00FF00";
    document.getElementById("CounterVar--js").innerHTML = "✔";
    document.getElementById("CounterVar--js").style.color = "#eeeeee";
    document.getElementById("myButton--js").disabled = false;
  } 
}
setInterval(check, 100);

function check() {
  var button = document.getElementById("myButton--js");
  if (mineralCounter >= 3) {
    button.style.opacity = '1';
  } else {
    button.style.opacity = '0';
  }
}