
var cat = document.getElementById("cat")
var cash = 0;
var addthing = document.getElementById("plusamt");
const element = document.getElementById("money");
setInterval(function() { element.innerHTML = "$" + cash }, 99);
setInterval(function(){cash += 5; new Audio("https://github.com/zippyfish/cat_miner/raw/main/Meow.ogg.mp3").play(); addthing.innerHTML = "+5";},1050);
setInterval(function(){addthing.innerHTML = "&nbsp;"}, 1000)
document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        cash += 10 ;
        addthing.innerHTML = "+10";
        if (cash > 100) {
          cat.classList.add("rainbow");
          const myTimeout = setTimeout(stopRainbow , 5000);

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
