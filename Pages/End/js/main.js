var i = 0;
var textField_0 = ' De feiten:';
var textField_1 = '- 5 miljoen doden sinds 1988(Begin Congoleese oorlog), Waarvan 40% kind';
var textField_2 = '- 200,000+ vrouwen en kinderen verkracht';
var textField_3 = '- 20,000+ gorillas en andere bedreigde diersoorten gedood voor bouw nieuwe mijnen';
var textField_4 = '- Mensen worden niet voldoende uitbetaald voor het werk dat ze in de mijnen verrichten';
var textField_5 = '- Kinderen worden veelvuldig gebruikt voor deze onmenselijke arbeid met een hoog sterftecijfer';
document.getElementById("js--section__4").style.opacity = 0;
document.getElementById("js--section__social").style.opacity = 0;
var speed = 100;


window.onscroll = function(){
    if(window.scrollY >= 110 && window.scrollY <= 140){
        typeWriter();
    }
    else if(window.scrollY >= 1050){
        document.getElementById("js--section__textbox4").classList.add("appear");
        document.getElementById("js--section__box1").classList.add("appear");
        document.getElementById("js--section__box2").classList.add("fromLeft");
        document.getElementById("js--section__4").style.opacity = 1;
        document.getElementById("js--section__social").style.opacity = 1;
    }

}

function typeWriter() {
    if (i < textField_5.length) {
        document.getElementById("js--demo0__text").innerHTML += textField_0.charAt(i);
        document.getElementById("js--demo1__text").innerHTML += textField_1.charAt(i);
        document.getElementById("js--demo2__text").innerHTML += textField_2.charAt(i);
        document.getElementById("js--demo3__text").innerHTML += textField_3.charAt(i);
        document.getElementById("js--demo4__text").innerHTML += textField_4.charAt(i);
        document.getElementById("js--demo5__text").innerHTML += textField_5.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}