var firstMineral = document.getElementById('card__container__item--1');
var secondMineral = document.getElementById('card__container__item--2');
var thirdMineral = document.getElementById('card__container__item--3');
var forthMineral = document.getElementById('card__container__item--4');
var fifthMineral = document.getElementById('card__container__item--5');
var sixthMineral = document.getElementById('card__container__item--6');
var paragraph = document.getElementById('card__counter--js');
var clicks = 0;

 

function onClickEvent1(){
    firstMineral.classList.toggle("card__container__item1");
    console.log(clicks);
    clicks++;  
    document.getElementById("card__counter--js").innerHTML = clicks;
    return clicks;
   
}
 

function onClickEvent2(){
        secondMineral.classList.toggle("card__container__item2");
        console.log(clicks);
        clicks++;  
        document.getElementById("card__counter--js").innerHTML = clicks;
        return clicks;
}

function onClickEvent3(){
    thirdMineral.classList.toggle("card__container__item3");
    clicks++;  
    document.getElementById("card__counter--js").innerHTML = clicks;
    return clicks;
}

function onClickEvent4(){
    forthMineral.classList.toggle("card__container__item4");
    clicks++;  
    document.getElementById("card__counter--js").innerHTML = clicks;
    return clicks;
}

function onClickEvent5(){
    fifthMineral.classList.toggle("card__container__item5");
    clicks++;  
    document.getElementById("card__counter--js").innerHTML = clicks;
    return clicks;
}

function onClickEvent6(){
    sixthMineral.classList.toggle("card__container__item6");
    clicks++;  
    document.getElementById("card__counter--js").innerHTML = clicks;
    return clicks;
}



