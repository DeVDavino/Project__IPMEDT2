var clicks = 0;
var mineralCounter = 0;
var audio = new Audio("../audio/stone.mp3");
var audio2 = new Audio("../audio/stone2.mp3");

    function onClick1() {

      console.log(clicks);
        var element = document.getElementById("content1");
        if(clicks <= 0){
          element.classList.add("stone1");
          clicks += 1;
          audio.play();
          return clicks;
          
        } 
        else if(clicks <= 1){
          element.classList.toggle("stone2");
          audio.play();
          
          clicks += 1;
          return clicks;
          
        }
        else if(clicks <= 2){
          element.classList.toggle("stone3");
          audio.play();
          clicks += 1;
          return clicks;
          
        }
        else if(clicks = 3){
          element.classList.remove("stone1", "stone2", "stone3", "grid__content1")
          element.classList.add("coltan");
          audio2.play();
          mineralCounter++;
          var results = [clicks = 0, mineralCounter];
          
        }
        return results;
     };

function onClick2() {
      
      console.log(clicks);
        var element = document.getElementById("content2");
        if(clicks <= 0){
          element.classList.add("stone1");
          clicks += 1;
          audio.play();
          return clicks;
        } 
        else if(clicks <= 1){
          element.classList.toggle("stone2");
          clicks += 1;
          audio.play();
          return clicks;
        }
        else if(clicks <= 2){
          element.classList.toggle("stone3");
          clicks += 1;
          audio.play();
          return clicks;
        }
        else if(clicks = 3){
          element.classList.remove("stone1", "stone2", "stone3", "grid__content2")
          element.classList.add("empty");
          audio2.play();
          var results = [clicks = 0, mineralCounter];
       
        }
        return results;
     
     };
function onClick3() {
      console.log(clicks);
        var element = document.getElementById("content3");
        if(clicks <= 0){
          element.classList.add("stone1");
          clicks += 1;
          audio.play();
          return clicks;
        } 
        else if(clicks <= 1){
          element.classList.toggle("stone2");
          clicks += 1;
          audio.play();
          return clicks;
        }
        else if(clicks <= 2){
          element.classList.toggle("stone3");
          clicks += 1;
          audio.play();
          return clicks;
        }
        else if(clicks = 3){
          element.classList.remove("stone1", "stone2", "stone3", "grid__content3")
          element.classList.add("empty");
          audio2.play();
          var results = [clicks = 0, mineralCounter];
        }
        return results;
     };
function onClick4() {
      console.log(clicks);
        var element = document.getElementById("content4");
        if(clicks <= 0){
          element.classList.add("stone1");
          clicks += 1;
          audio.play();
          return clicks;
        } 
        else if(clicks <= 1){
          element.classList.toggle("stone2");
          clicks += 1;
          audio.play();
          return clicks;
        }
        else if(clicks <= 2){
          element.classList.toggle("stone3");
          clicks += 1;
          audio.play();
          return clicks;
        }
        else if(clicks = 3){
          element.classList.remove("stone1", "stone2", "stone3", "grid__content4")
          element.classList.add("wolframite");
          audio2.play();
          mineralCounter++;
          var results = [clicks = 0, mineralCounter];
        }
        return results;
     };
function onClick5() {
      console.log(clicks);
        var element = document.getElementById("content5");
        if(clicks <= 0){
          element.classList.add("stone1");
          clicks += 1;
          audio.play();
          return clicks;
        } 
        else if(clicks <= 1){
          element.classList.toggle("stone2");
          clicks += 1;
          audio.play();
          return clicks;
        }
        else if(clicks <= 2){
          element.classList.toggle("stone3");
          clicks += 1;
          audio.play();
          return clicks;
        }
        else if(clicks = 3){
          element.classList.remove("stone1", "stone2", "stone3", "grid__content5")
          element.classList.add("casserite");
          audio2.play();
          mineralCounter++;
          var results = [clicks = 0, mineralCounter];
        }
        
        return results;
     };
function onClick6() {
      console.log(clicks);
        var element = document.getElementById("content6");
        if(clicks <= 0){
          element.classList.add("stone1");
          clicks += 1;
          audio.play();
          return clicks;
        } 
        else if(clicks <= 1){
          element.classList.toggle("stone2");
          clicks += 1;
          audio.play();
          return clicks;
        }
        else if(clicks <= 2){
          element.classList.toggle("stone3");
          clicks += 1;
          audio.play();
          return clicks;
        }
        else if(clicks = 3){
          element.classList.remove("stone1", "stone2", "stone3", "grid__content6")
          element.classList.add("empty");
          audio2.play();
          var results = [clicks = 0, mineralCounter];
        }
        return results;
     };

function printMinerals(){
  if (mineralCounter == 3){
    console.log("Yeah boi");
  } else {
    console.log("fuck off");
  }
}

