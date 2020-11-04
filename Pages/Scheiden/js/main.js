var firstMineral = document.getElementById('container__item--1');
var secondMineral = document.getElementById('container__item--2');
var thirdMineral = document.getElementById('container__item--3');
var forthMineral = document.getElementById('container__item--4');
var fifthMineral = document.getElementById('container__item--5');
var sixthMineral = document.getElementById('container__item--6');
let itemsContainer = document.getElementById('dropbox');
var paragraph = document.getElementById('mineral__counter--js');
var button = document.getElementById('button--js');
var muteButton = document.getElementById('muteButton');
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


function onClickEvent1() {
    firstMineral.classList.add("container__item1--active");
    audio.play();
    console.log(clicks);
    clicks++;
    document.getElementById("mineral__counter--js").innerHTML = clicks;
    document.getElementById("mineral__counter2--js").innerHTML = clicks / 5 + " kg";
    firstMineral.removeAttribute("onclick");
    firstMineral.style.opacity = "0";
    return clicks;
}

function onClickEvent2() {
    secondMineral.classList.add("container__item2--active");
    audio.play();
    console.log(clicks);
    clicks++;
    document.getElementById("mineral__counter--js").innerHTML = clicks;
    document.getElementById("mineral__counter2--js").innerHTML = clicks / 5 + " kg";
    secondMineral.removeAttribute("onclick");
    secondMineral.style.opacity = "0";
    return clicks;
}

function onClickEvent3() {
    thirdMineral.classList.add("container__item3--active");
    audio.play();
    console.log(clicks);
    clicks++;
    document.getElementById("mineral__counter--js").innerHTML = clicks;
    document.getElementById("mineral__counter2--js").innerHTML = clicks / 5 + " kg";
    thirdMineral.removeAttribute("onclick");
    thirdMineral.style.opacity = "0";
    return clicks;
}

function onClickEvent4() {
    forthMineral.classList.add("container__item4--active");
    audio.play();
    console.log(clicks);
    clicks++;
    document.getElementById("mineral__counter--js").innerHTML = clicks;
    document.getElementById("mineral__counter2--js").innerHTML = clicks / 5 + " kg";
    forthMineral.removeAttribute("onclick");
    forthMineral.style.opacity = "0";
    return clicks;
}

function onClickEvent5() {
    fifthMineral.classList.add("container__item5--active");
    audio.play();
    console.log(clicks);
    clicks++;
    document.getElementById("mineral__counter--js").innerHTML = clicks;
    document.getElementById("mineral__counter2--js").innerHTML = clicks / 5 + " kg";
    fifthMineral.removeAttribute("onclick");
    fifthMineral.style.opacity = "0";
    return clicks;
}

function onClickEvent6() {
    sixthMineral.classList.add("container__item6--active");
    audio.play();
    console.log(clicks);
    clicks++;
    document.getElementById("mineral__counter--js").innerHTML = clicks;
    document.getElementById("mineral__counter2--js").innerHTML = clicks / 5 + " kg";
    sixthMineral.removeAttribute("onclick");
    sixthMineral.style.opacity = "0";
    return clicks;
}