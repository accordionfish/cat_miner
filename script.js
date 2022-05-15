var ms1 = new Audio("./sounds/mine1.wav");
var ms2 = new Audio("./sounds/mine2.wav");
var plusamt = document.getElementById("plusamt");
var elem = document.getElementById("cash");
var cat = $("#cat");
var pickaxe = document.getElementById("pickaxe");
var aipickaxe = "notbought";
window.money = 0;
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
var aipButton = document.getElementById("aip-btn");
var zo = setInterval(function() {money += 5; plusamt.innerText = "+5";setTimeout(function(){plusamt.innerHTML = "&nbsp;";},800);}, 1000)
var z = setInterval(function() {elem.innerHTML = "<img src='./assets/catcoin1.png' height='15px'>" + numberWithCommas(money)}, 99);
document.body.onkeyup = function(e) {
  if (e.keyCode == 32) {
      money += 10;
        plusamt.innerHTML="+<img src='./assets/catcoin1.png' height='15px'>10";
        pickaxe.style.animation = 'none';
        pickaxe.offsetHeight; /* trigger reflow */
        pickaxe.style.animation = null; 
        ms1.play();
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
    pickaxe.src = "./assets/aipickaxe.png";
    pickaxe.style.animationDuration = "0.1s";
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
        pickaxe.style.animation = 'none';
        pickaxe.offsetHeight; /* trigger reflow */
        pickaxe.style.animation = null; 
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
        pickaxe.src = "./assets/iron_pickaxe.png";
        pickaxe.style.animationDuration = "2.7s";
        clearInterval(zo);
        IP_Interval();
        document.getElementById("irp-btn").disabled=true;
        document.getElementById("irp-btn").innerText="OWNED";
      } else {
        alert("You don't have enough money.");
      }
}
function IP_Interval(){
  window.int1q = setInterval(function() {money += 5000; plusamt.innerText = "+5000";setTimeout(function(){plusamt.innerHTML = "&nbsp;";},800);}, 1000)
  document.body.onkeyup = function(e) {
    if (e.keyCode == 32) {
        money += 8000;
        plusamt.innerHTML = "+$8,000";
        pickaxe.style.animation = 'none';
        pickaxe.offsetHeight; /* trigger reflow */
        pickaxe.style.animation = null; 
        ms2.play();
    } else {
      return true;
    }
  }
}
function checkForGoldPickaxe(){
  if(money > 1000000){
    money -= 1000000;
    pickaxe.src = "./assets/gold_pickaxe.png";
    pickaxe.style.animationDuration = "2.7s";
    GP_Interval();
    document.getElementById("gold_pickaxe-btn").disabled=true;
    document.getElementById("gold_pickaxe-btn").innerText="OWNED";
  } else {
    alert("You don't have enough money.");
  }
}
function GP_Interval(){
  clearInterval(window.int1q); 
  window.g = setInterval(function() {money += 25000; plusamt.innerText = "+25,000";setTimeout(function(){plusamt.innerHTML = "&nbsp;";},800);}, 1000)
  document.body.onkeyup = function(e) {
    if (e.keyCode == 32) {
        money += 15000;
        plusamt.innerHTML = "+15,000";
        pickaxe.style.animation = 'none';
        pickaxe.offsetHeight; /* trigger reflow */
        pickaxe.style.animation = null; 
        ms1.play();
    } else {
      return true;
    }
  }
}
function cfbgp(){
  if(window.money > 5000000){
    money -= 5000000;
    pickaxe.src = "./assets/baguettepick.png";
    pickaxe.style.animationDuration = "2.7s";
    bgp();
    document.getElementById("bgp-btn").disabled=true;
    document.getElementById("bgp-btn").innerText="OWNED";
  } else {
    alert("You don't have enough money.");
  }
}
function bgp(){
  clearInterval(window.g); 
  var g = setInterval(function() {money += 50000; plusamt.innerText = "+50k";setTimeout(function(){plusamt.innerHTML = "&nbsp;";},800);}, 1000)
  document.body.onkeyup = function(e) {
    if (e.keyCode == 32) {
        money += 80000;
        plusamt.innerHTML = "+80k";
        pickaxe.style.animation = 'none';
        pickaxe.offsetHeight; /* trigger reflow */
        pickaxe.style.animation = null; 
        ms1.play();
    } else {
      return true;
    }
  }
}
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 alert("you are using mobile.  I plan to support mobile in the close future, but as of right now, the main game depends on the spacebar. ")
}
