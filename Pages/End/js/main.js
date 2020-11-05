var i = 0;
var textField_0 = '5 miljoen doden sinds 1988';
var textField_1 = 'Waarvan 40% kind';
var textField_2 = '200,000+ vrouwen en kinderen verkracht';
var textField_3 = '20,000+ gorillas en andere bedreigde diersoorten gedood';
var textField_4 = 'Mensen worden niet voldoende uitbetaald voor het werk die ze in de mijnen verrichten';
var textField_5 = 'Kinderarbeid';
document.getElementById("section__4--js").style.opacity = 0;
document.getElementById("section__social--js").style.opacity = 0;
var speed = 100;


window.onscroll = function(){
    console.log(window.scrollY);
    if(window.scrollY >= 120 && window.scrollY <= 140){
        typeWriter();
    }
    else if(window.scrollY >= 1268){
        document.getElementById("section_textbox4--js").classList.add("appear");
        document.getElementById("section__box1--js").classList.add("appear");
        document.getElementById("section_box2--js").classList.add("fromBottom");
        document.getElementById("section__4--js").style.opacity = 1;
        document.getElementById("section__social--js").style.opacity = 1;

    }

}

function typeWriter() {
    if (i < textField_4.length) {
        document.getElementById("demo0__text--js").innerHTML += textField_0.charAt(i);
        document.getElementById("demo1__text--js").innerHTML += textField_1.charAt(i);
        document.getElementById("demo2__text--js").innerHTML += textField_2.charAt(i);
        document.getElementById("demo3__text--js").innerHTML += textField_3.charAt(i);
        document.getElementById("demo4__text--js").innerHTML += textField_4.charAt(i);
        document.getElementById("demo5__text--js").innerHTML += textField_5.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}