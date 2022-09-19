$(function(){
  $("#welcome-background, #welcome-close").click(function() {
      $("#welcome-content, #welcome-background").toggleClass("active");
  });
});
if(localStorage.getItem("tutorial_modal") !== "yep" ){
$("#welcome-content, #welcome-background").toggleClass("active");}
//Variable definition
const cavemusic=new Audio("./sounds/catminer_caves.wav");
cavemusic.volume=0.5

const gp = document.getElementById("gp");
const gptxt = document.getElementById("gptxt");
const irp = document.getElementById("irp");
const irptxt = document.getElementById("irptxt");
const aipbtn = document.getElementById("aip-btn");
const gpbtn = document.getElementById("gold_pickaxe-btn");
const irpbtn = document.getElementById("irp-btn");
const bgpbtn = document.getElementById("bgp-btn");
var aipButton = document.getElementById("aip-btn");
const bgep = document.getElementById("bgp");
const bgptxt = document.getElementById("bgptxt");
const ap = document.getElementById("ap");
const aptxt = document.getElementById("aptxt");
const plusamt = document.getElementById("plusamt");
const elem = document.getElementById("cash");
const ore = document.getElementById("ore");
const cmtitle= document.getElementById("title");
const pickaxe = document.getElementById("pickaxe");
const cctnr=document.getElementById("catcontainer");
const upcontent = document.getElementById("up1-editthis")
const cutscenething=document.getElementById("cutscene");
const ms1 = new Audio("./sounds/mine1.wav");
const ms2 = new Audio("./sounds/mine2.wav");
const cat = document.getElementById("cat");
const aipickaxe = "notbought";  
const nextbtn = document.getElementById("nextbtn");
//if the cookie 'money' is a string, parse it into an integer and if it is the string 'NaN',  set the money to 0.
if(Cookies.get("money") !== "NaN"){window.money = parseInt(Cookies.get("money"));} else {window.money=0;}
//close the upgrade modal
$(function(){
    $("#up1-background, #up1-close").click(function() {
        $("#up1-content, #up1-background").toggleClass("active");
    });
  });
//remove right-click functionality
document.oncontextmenu = function(e){
   stopEvent(e);
}
function e1(){
  document.getElementById('welcomeh1').innerHTML='Press SPACE to mine.'; 
  document.getElementById('nextbtn').innerText='CLICK HERE TO TRY IT!'
  nextbtn.onclick=e2;
}

function e2(){
  console.log('closing welcome modal..')
  $("#welcome-content, #welcome-background").toggleClass("active");
  localStorage.setItem("tutorial_modal","yep")
  
}
//universal function to check for pickaxe. errors out, idk why
function checkforPick(price,funcname){
  if(money > price){
    money -= price;
    window[funcname]()
  } else {
    alert("You don't have enough money.");
  }
}
//stop the default event(right-click)
function stopEvent(event){
    if(event.preventDefault != undefined)
     event.preventDefault();
    if(event.stopPropagation != undefined)
     event.stopPropagation();
}

function donothingig(){
  return true;
}

function menu(){
  upcontent.innerHTML="<button onclick='location.href=`../`'>Back to title screen</button><br><br> <button onclick='musicsettings()'>Music</button>"
  $("#up1-content, #up1-background").toggleClass("active");
  
}
function musicsettings(){
  upcontent.innerHTML="<h1>The Cat Miner Band<button onclick='cavemusic.volume=0;Cookies.set(`music_on`,`no`)'>no music :(</button></h2>";
    
}
Mousetrap.bind('d e b u g', function() {
  upcontent.innerHTML="<h1>Debug menu</h1><br>"
  $("#up1-content, #up1-background").toggleClass("active");
  function frames(){var stats=new Stats();document.body.appendChild(stats.domElement);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});}
frames()
});
//update the money to the amount that the variable 'money' is 
var z = setInterval(function() {elem.innerHTML = "<img src='./assets/catcoin1.png' height='25px' style='vertical-align:middle;'>" + numeral(money).format('0.0a');;bgc(); Cookies.set("money",money);upc();if(isNaN(money)){window.money=0}else{donothingig()}}, 99);

//if the most recent active pickaxe was not gold, baguette, or iron, then bind the spacebar to add 10 catcoin and reset the mining animation
if(Cookies.get("activepick")!==["gold","baguette","iron"]){
  Mousetrap.bind('space', function() {     
      money += 10;
        plusamt.innerHTML="+<img src='./assets/catcoin1.png' height='15px'>10";
        pickaxe.style.animation = 'none';
        pickaxe.offsetHeight; /* trigger reflow */
        pickaxe.style.animation = null; 
        pickaxe.style.animationPlayState="running"
        $("#plusamt").show()
        plusamt.style.animation = "GoUp 4s forwards linear"
        ms1.play();
  },'keyup');
} else {
  console.log("pickaxe is not copper")
}
if(Cookies.get("activepick") == "iron"){IP_Interval()}else{console.log("other pickaxe, doing other stuff")}
if(Cookies.get("activepick")=="gold"){GP_Interval()} else { console.log("e")}
if(Cookies.get("activepick")=="baguette"){bgp();} else { console.log("e")}
//when the Pickaxe Shop Button is pressed, open the pickaxe shop
$(function(){
  $("#ugp1-launcher, #ugp1-background, #ugp1-close").click(function() {
      $("#ugp1-content, #ugp1-background").toggleClass("active");
  });
});
function bgc() {
  if(Cookies.get("travelTicket") !=="1"){
    document.body.classList.add("cave");
    elem.style="color:white;" 
    cmtitle.style="color:white;" 
    plusamt.style="color:white;" 
    if(Cookies.get('music_on')!=="no"){
    cavemusic.play()
    } else {
      donothingig()
    }
  } if(Cookies.get("travelTicket")=="1") {
    document.body.classList.add("paris");
    cavemusic.pause();

  }
}
function npamodal(yy,pickname){
  var e = new Audio("./sounds/e.wav")
  e.play()
  upcontent.innerHTML = "<h1 style='text-align:center;'>New Pickaxe Availible!</h1><img src='"+yy+"' height='120px' style='margin-left: auto;margin-right: auto;display: block;'/><center><h2 style='text-align:center;bottom:0;'>"+pickname+"</h2></center>"
  $("#up1-content, #up1-background").toggleClass("active");
  
}
function e1247(functionname){
    window[functionname]()
}
function upc(){
  if(money > 1000){
    irp.style.display = "inline";
    irptxt.style.display = "inline";
    irpbtn.style.display="inline";
   } else {
    return false
  }
  if(money > 1005 && Cookies.get("modal1alrshown") != "yep"){
    npamodal("./assets/iron_pickaxe.png","Iron Pickaxe")
    Cookies.set("modal1alrshown","yep");
  }
  if(money > 1000000){
    gp.style.display = "inline";
    gptxt.style.display = "inline";
    gpbtn.style.display="inline"

  } else {
    return false;
  }
  if(money > 1000005 && Cookies.get("modal2alrshown") != "yep"){
    npamodal("./assets/gold_pickaxe.png","Gold Pickaxe")
    $("#up1-content, #up1-background").toggleClass("active");
    Cookies.set("modal2alrshown","yep");
  }
  if(money > 5000000){
    bgep.style.display = "inline";
    bgptxt.style.display = "inline";
    bgpbtn.style.display="inline";
  } else {
    return false;
  }
  if(money > 5000005 && Cookies.get("modal3alrshown") != "yep"){
    upcontent.innerHTML = "<div id='up1-close'>To exit, click on sky</div><h1 style='text-align:center;'>New Pickaxe Availible!</h1><img src='./assets/baguettepick.png' height='120px'>Baguette Pickaxe<br>And you got a <br><h3>Travel Ticket<img src='./assets/travelticket.png' height='20px'></h3>"
    $("#up1-content, #up1-background").toggleClass("active");
    $("#cutscene, #cutscene-bg").toggleClass("active");
        cutscenething.innerHTML="<video src='./assets/cutscene.mov' onended=\"$('#cutscene').remove();\" autoplay></video>"
    Cookies.set("modal3alrshown","yep");
    Cookies.set("travelTicket","1");
    
  }
  if(money > 100000000){
    return true;
  }
}
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
  document.getElementById("aip-btn").disabled=true;
  document.getElementById("aip-btn").innerText="OWNED";
  Mousetrap.bind('space', function() {  
        money += 10000000000000;
        plusamt.innerHTML = "+10 Trillion";
        pickaxe.style.animation = 'none';
        pickaxe.offsetHeight; /* trigger reanimate */
        pickaxe.style.animation = null; 
        pickaxe.style.animationDuration = "0.1s";
      },'keyup')
    }
function IP_Interval(){
  pickaxe.src = "./assets/iron_pickaxe.png";
  pickaxe.style.animationDuration = "2.7s";
  document.getElementById("irp-btn").disabled=true;
  document.getElementById("irp-btn").innerText="OWNED";
  pickaxe.src = "./assets/iron_pickaxe.png";
  Cookies.set("activepick","iron")
  Mousetrap.bind('space', function() {
        money += 8000;
        plusamt.innerHTML = "+<img src='./assets/catcoin1.png' height='15px'>8,000";
        pickaxe.style.animation = 'none';
        pickaxe.offsetHeight; /* trigger reanimate */
        pickaxe.style.animation = null; 
        pickaxe.style.animationPlayState="running"
        ms2.play();
  },'keyup');
}
function checkForGoldPickaxe(){
  if(money > 1000000){
    money -= 1000000;

    GP_Interval();
  } else {
    alert("You don't have enough money.");
  }
}
function GP_Interval(){
  pickaxe.src = "./assets/gold_pickaxe.png";
  pickaxe.style.animationDuration = "2.7s";
  document.getElementById("gold_pickaxe-btn").disabled=true;
  document.getElementById("gold_pickaxe-btn").innerText="OWNED";
  document.getElementById("gold_pickaxe-btn").innerText="OWNED";
  document.getElementById("irp-btn").disabled=true;
  document.getElementById("irp-btn").innerText="OWNED";
  Cookies.set("activepick","gold");
  window.g = setInterval(function() {money += 25000; plusamt.innerHTML = "+<img src='./assets/catcoin1.png' height='15px'>25,000";setTimeout(function(){plusamt.innerHTML = "&nbsp;";},800);}, 1000)
    Mousetrap.bind('space', function(){
        money += 15000;
        plusamt.innerHTML = "+<img src='./assets/catcoin1.png' height='15px'>15,000";
        pickaxe.style.animation = 'none';
        pickaxe.offsetHeight; /* trigger reflow */
        pickaxe.style.animation = null; 
        pickaxe.style.animationPlayState="running"  
        ms1.play();
        localStorage.setItem("money",money)
    
  },'keyup');
}
function bgp(){
  //Disable and set the text to "OWNED" on the "buy baguette pick" button
  document.getElementById("bgp-btn").disabled=true;
  document.getElementById("bgp-btn").innerText="OWNED";
  //do the same thing with the other buttons that are to buy stuff and for the buttons that are (probably) bought
  gpbtn.innerText="OWNED";
  gpbtn.disabled=true;
  document.getElementById("irp-btn").disabled=true;
  document.getElementById("irp-btn").innerText="OWNED";
  //set the pickaxe's src image to the baguette
  pickaxe.src = "./assets/baguettepick.png";
  pickaxe.style.animationDuration = "2.7s";
  Cookies.set("activepick","baguette")
  //clear the interval, idk what the interval is for rn 
  clearInterval(window.g); 
  ore.innerHTML="<img src='./assets/coal1.png' height='160px'>";
  window.c = setInterval(function() {money += 50000; plusamt.innerHTML = "+<img src='./assets/catcoin1.png' height='15px'>50k";setTimeout(function(){plusamt.innerHTML = "&nbsp;";},800);}, 1000)
  Mousetrap.bind('space', function(){
        money += 80000;
        plusamt.innerHTML = "+<img src='./assets/catcoin1.png' height='15px'>80k";
        pickaxe.style.animation = 'none';
        pickaxe.offsetHeight; /* trigger reflow */
        pickaxe.style.animation = null; 
        pickaxe.style.animationPlayState="running"
        ms1.play();
},'keyup');
} 
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 alert("you are using mobile.  As of right now, Cat Miner is in BETA. when the full game releases, there will be a mobile app.")
}
