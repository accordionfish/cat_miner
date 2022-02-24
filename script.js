var level = 1;

var cat = document.getElementById("cat")
var cash = 0;
var addthing = document.getElementById("plusamt");
const element = document.getElementById("money");
var lvl1interval = setInterval(function() { element.innerHTML = "$" + cash }, 99);
var meow = setInterval(function(){cash += 5; new Audio("https://github.com/zippyfish/cat_miner/raw/main/Meow.ogg.mp3").play(); addthing.innerHTML = "+5";},1050);
var lvl1addthing = setInterval(function(){addthing.innerHTML = "&nbsp;"}, 1000)
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        cash += 10 ;
        addthing.innerHTML = "+10";
        if (cash > 10) {
          cat.classList.add("rainbow");
          const myTimeout = setTimeout(stopRainbow , 5000);
          checkLevel()

} else {
  return true;
}
    }
    }
function nothingToSeeHere() {
    addthing.innerHTML = "nothing happened...";
}
function stopRainbow(){
  cat.classList.remove("rainbow")
}
function levelUp(){
  level += 1;
  if(level=2){
  level2();
  } else {
   return true;
  }
}
function checkLevel(){
 if(cash>99 && cash < 200){
 levelUp();
 }else {
 
 }
}
function level2(){
 clearInterval(lvl1interval);
 clearInterval(lvl1addthing);
 setInterval(function(){element.innerHTML = "$" + cash; cash +=100; addthing.innerHTML = "+100"}, 1000)
}
