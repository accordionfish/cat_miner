var plusamt = document.getElementById("plusamt");
var elem = document.getElementById("cash");
var cat = $("#cat");
var pickaxe = document.getElementById("pickaxe");
var aipickaxe = "notbought";
var money = 0;
var aipButton = document.getElementById("aip-btn");
var o = setInterval(function() {money += 5; plusamt.innerText = "+5";setTimeout(function(){plusamt.innerHTML = "&nbsp;";},800);}, 1000)
var z = setInterval(function() {elem.innerHTML = "$" + money;}, 99);
document.body.onkeyup = function(e) {
  if (e.keyCode == 32) {
      money += 10;
        plusamt.innerHTML="+10";
  } else {
    return true;
  }
}
$(function(){
  $("#modal-launcher, #modal-background, #modal-close").click(function() {
      $("#modal-content, #modal-background").toggleClass("active");
  });
});
function checkForAIPickaxe(){
  if(money > 100000000){
    money -= 100000000;
    pickaxe.src = "aipickaxe.png";
    pickaxe.style.animationDuration = "0.1s";
    clearInterval(o);
    AIInterval()
    document.getElementById("aip-btn").disabled=true;
    document.getElementById("aip-btn").innerText="OWNED";
  } else {
    alert("You don't have enough money.");
  }
}
function AIInterval(){
  var q = setInterval(function() {money += 10000000000000005; plusamt.innerText = "+10000000000000005";setTimeout(function(){plusamt.innerHTML = "&nbsp;";},800);}, 1000)
  document.body.onkeyup = function(e) {
    if (e.keyCode == 32) {
        money += 10000000000000;
        plusamt.innerHTML = "+10 Trillion";
          
    } else {
      return true;
    }
  }
}
function checkForIronPickaxe(){
  // something smoething something something
  /*                         _
                            / /
  /\__/\                  / /
 | •  • |________________| |
  ---                      /
      ___________________/
  
  
  */
      if(money > 1000){
        money -= 1000;
        pickaxe.src = "iron_pickaxe.png";
        pickaxe.style.animationDuration = "2.7s";
        clearInterval(o);
        IP_Interval()
        document.getElementById("irp-btn").disabled=true;
        document.getElementById("irp-btn").innerText="OWNED";
      } else {
        alert("You don't have enough money.");
      }
}
function IP_Interval(){
  clearInterval(q);
  var m = setInterval(function() {money += 5000; plusamt.innerText = "+5000";setTimeout(function(){plusamt.innerHTML = "&nbsp;";},800);}, 1000)

}
function checkForGoldPickaxe(){

  if(money > 1000000){
    money -= 1000000;
    pickaxe.src = "gold_pickaxe.png";
    pickaxe.style.animationDuration = "2.7s";
    clearInterval(all);
    GP_Interval()
    document.getElementById("gold_pickaxe-btn").disabled=true;
    document.getElementById("gold_pickaxe-btn").innerText="OWNED";
  } else {
    alert("You don't have enough money.");
  }
}
function GP_Interval(){
  var g = setInterval(function() {money += 25000; plusamt.innerText = "+25,000";setTimeout(function(){plusamt.innerHTML = "&nbsp;";},800);}, 1000)
}