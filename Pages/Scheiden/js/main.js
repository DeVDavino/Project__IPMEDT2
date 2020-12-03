var firstMineral = document.getElementById('js--container__item--1');
var secondMineral = document.getElementById('js--container__item--2');
var thirdMineral = document.getElementById('js--container__item--3');
var forthMineral = document.getElementById('js--container__item--4');
var fifthMineral = document.getElementById('js--container__item--5');
var sixthMineral = document.getElementById('js--container__item--6');
let itemsContainer = document.getElementById('dropbox');
var paragraph = document.getElementById('footer__counter--js');
var button = document.getElementById('js--button');
var muteButton = document.getElementById('js--muteButton');
var clicks = 0;
var audio = new Audio("./audio/scheiden.mp3");

var audioTracker = 0;

function mute() {

    muteButton.classList.toggle("headermute--muted");
    if (audioTracker == 0) {
        audio.muted = true;
        audioTracker++;
    } else if (audioTracker == 1) {
        audio.muted = false;
        audioTracker--;
    }

}

setInterval(check, 100);

function check() {
    if (clicks >= 6) {
        button.style.opacity = '1';
    } else {
        button.style.opacity = '0';
    }
}


function onClickEvent(thisElement) {
    audio.play();
    clicks++;
    if(thisElement.id == "js--container__item--1"){
        thisElement.classList.add("container__item1--active");
    }else if(thisElement.id == "js--container__item--2"){
        thisElement.classList.add("container__item2--active");
    }else if(thisElement.id == "js--container__item--3"){
        thisElement.classList.add("container__item3--active");
    }else if(thisElement.id == "js--container__item--4"){
        thisElement.classList.add("container__item4--active");
    }else if(thisElement.id == "js--container__item--5"){
        thisElement.classList.add("container__item5--active");
    }else if(thisElement.id == "js--container__item--6"){
        thisElement.classList.add("container__item6--active");
    }
    document.getElementById("js--footer__counter").innerHTML = clicks;
    document.getElementById("js--footer__counter2").innerHTML = clicks / 5 + " kg";
    thisElement.removeAttribute("onclick");
    thisElement.style.opacity = "0";
    return clicks;
}
