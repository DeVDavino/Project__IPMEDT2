var input = 0;
var textFieldTime = '                         ';
var textField_0 = '5 miljoen doden sinds 1988';
var textField_1 = 'Waarvan 40% kind';
var textField_2 = '200,000+ vrouwen en kinderen verkracht';
var textField_3 = '20,000+ gorillas en andere bedreigde diersoorten gedood';
var textField_4 = 'Mensen worden niet voldoende uitbetaald voor de werk die ze in de mijnen verrichten';
var textField_5 = 'Kinderarbeid';
var speed = 100;

function typeWriter(){
    if(input < textFieldTime.length){
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