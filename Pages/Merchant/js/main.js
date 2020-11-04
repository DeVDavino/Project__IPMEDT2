var i = 0;
var txt = 'Verzameld:      0.4 kg';
var txt1 = 'prijs: $10 per kg ';
var txt2 = 'prijs: $5 per kg ';
var txt3 = 'prijs: $5 per kg ';
var txt4 = '$                           4';
var txt5 = '$                                2';
var txt6 = '$                                     2';
var txt7 = '                                           8';
var speed = 100;
var speed1 = 500;
var calcTracker = 0;
var audio = new Audio("audio/audio3.mp3");
var audioTracker = 0;

function mute(){

muteButton.classList.toggle("headermute--muted");
if(audioTracker == 0){
    audio.muted = true;
    audioTracker++;
} else if(audioTracker == 1){
    audio.muted = false;
    audioTracker--;
}

}
function typeWriter() {
  if (i < txt7.length) {
    audio.play();
    document.getElementById("demo").innerHTML += txt.charAt(i);
    document.getElementById("demo1").innerHTML += txt.charAt(i);
    document.getElementById("demo2").innerHTML += txt.charAt(i);
    document.getElementById("demo3").innerHTML += txt1.charAt(i);
    document.getElementById("demo4").innerHTML += txt2.charAt(i);
    document.getElementById("demo5").innerHTML += txt3.charAt(i);
    document.getElementById("demo6").innerHTML += txt4.charAt(i);
    document.getElementById("demo7").innerHTML += txt5.charAt(i);
    document.getElementById("demo8").innerHTML += txt6.charAt(i);
    document.getElementById("demo9").innerHTML += txt7.charAt(i);
    i++;
    calcTracker++;
    setTimeout(typeWriter, speed);
    return calcTracker;
  }
}
