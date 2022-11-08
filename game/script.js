//if the welcome window wasn't already clicked on and deleted, 
if(localStorage.getItem("tutorial_modal") !== "yep" ){
$("#welcome-content, #welcome-background").toggleClass("active");}
//all the variables lol
var pickaxes = ["gold","baguette","iron","pickaxepickaxe"];/* excluding the rusty pickaxe because work smarter not harder*/
const cavemusic=new Audio("./sounds/catminer_caves.wav");
cavemusic.volume=0.3
const sp = document.getElementById("sp");
const sptxt = document.getElementById("sptxt");
const spbtn = document.getElementById("steelpick-btn");

const musicbtn =  document.getElementById('musicbtn');  
const gp = document.getElementById("gp");
const gptxt = document.getElementById("gptxt");
const irp = document.getElementById("irp");
const irptxt = document.getElementById("irptxt");
const aipbtn = document.getElementById("aip-btn");
const gpbtn = document.getElementById("gold_pickaxe-btn");
const irpbtn = document.getElementById("irp-btn");
const bgpbtn = document.getElementById("bgp-btn");
const aipButton = document.getElementById("aip-btn");
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
const pickpicktext = document.getElementById("pickpicktxt");
const pickaxepickaxe = document.getElementById("pickpick");
const pickpickbtn = document.getElementById("pickpick-btn"); 
const nextbtn = document.getElementById("nextbtn");
//update the money to the amount that the variable 'money' is 
var z = setInterval(function() {elem.innerHTML = "<img src='./assets/catcoin1.png' height='25px' style='vertical-align:middle;'>" + numeral(money).format('0.0a');;bgc(); Cookies.set("money",money);upc();if(isNaN(money)){window.money=0}else{donothingig()}}, 99);

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
//change the text when clicked on welcome modal
function e1(){
  document.getElementById('welcomeh1').innerHTML='Press SPACE to mine.'; 
  document.getElementById('nextbtn').innerText='CLICK HERE TO TRY IT!'
  nextbtn.onclick=e2;
}
//close the modal
function e2(){
  console.log('closing welcome modal..')
  $("#welcome-content, #welcome-background").toggleClass("active");
  localStorage.setItem("tutorial_modal","yep") 
}
//universal function to check for pickaxe. 
function checkforPick(price,funcname){
  if(money > price){
    money -= price;
    window[funcname]()
  } else {
    alert("You don't have enough catcoins.");
  }
}
//stop the default event(right-click)
function stopEvent(event){
    if(event.preventDefault != undefined)
     event.preventDefault();
    if(event.stopPropagation != undefined)
     event.stopPropagation();
}
//function to fill placeholders where i can't just put 'return false'
function donothingig(){
  return true;
}
function music2(){
  musicbtn.onclick=`cavemusic.volume=0.3`;musicbtn.innerText=`bring da music back!`
}
//open the menu(music n stuff)
function menu(){
  upcontent.innerHTML="<button onclick='location.href=`../`'>Back to title screen</button><br><br> <button onclick='musicsettings()'>Music</button>"
  $("#up1-content, #up1-background").toggleClass("active");
}
//open the music settings
function musicsettings(){
  upcontent.innerHTML="<h1>The Cat Miner Band<br><center><button id='musicbtn' onclick='cavemusic.volume=0;Cookies.set(`music_on`,`no`);music2();'>no music</button></center></h2>";
}
function music2(){
  musicbtn.onclick=`cavemusic.volume=0.3`;musicbtn.innerText=`bring da music back!`
}

function music1(){
  musicbtn.innerText="no music :("
  cavemusic.volume=0.3;
  musicbtn.onclick=`music2()`
}
//a work in progress, but eventually this'll be used for debugging features.
Mousetrap.bind('d e b u g', function() {
  upcontent.innerHTML="<h1>Debug menu</h1><br>"
  $("#up1-content, #up1-background").toggleClass("active");
  function frames(){var stats=new Stats();document.body.appendChild(stats.domElement);requestAnimationFrame(function loop(){stats.update();requestAnimationFrame(loop)});}
frames()
});
//jonathan mode(secret??)
Mousetrap.bind('j o n a t h a n', function() {
  Cookies.set("jonathanmode","on")
  cat.src="./assets/kbc1.jpg";
  cat.style="transform:translate"
  ore.src=""
  pickaxe.style.display="none"
  Mousetrap.bind('space',function(){
    cat.src="./assets/kbc2.jpg"
  },'keydown');
  Mousetrap.bind('space',function(){
    money += 1984;
    cat.src="./assets/kbc1.jpg"
    plusamt.innerHTML="+<img src='./assets/catcoin1.png' height='15px'>1984";
    $("#plusamt").show()
        plusamt.style.animation = "GoUp 4s forwards linear"
  },'keyup');
});

//if the most recent active pickaxe was not gold, baguette, or iron, then bind the spacebar to add 10 catcoin and reset the mining animation
if(Cookies.get("activepick")!==pickaxes){
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
if(Cookies.get("activepick")=="pickaxepickaxe"){pickpick();} else { console.log("e")}

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


function displayupgrade(upgrade,id){
  id.innerHTML=upgrade;
}
function upc(){
  if(money > 1000){
    irp.style.display = "inline";
    irp.src="./assets/iron_pickaxe.png"
    irptxt.style.display = "inline";
        irptxt.innerHTML = `<b>Iron Pickaxe - <img src="./assets/catcoin1.png" height="15px">1,000</b><br>The second pickaxe that Cat Miner made. He was getting better at making pickaxes and even mined the iron himself.<button class="buy" id="irp-btn" style="position: absolute;right:0; " onclick="checkforPick(1000,'IP_Interval')">BUY </button></p>`
    irpbtn.style.display="inline";
   } else {
donothingig()
  }
  if(money > 1005 && Cookies.get("modal1alrshown") != "yep"){
    npamodal("./assets/iron_pickaxe.png","Iron Pickaxe")
    Cookies.set("modal1alrshown","yep");
  }
  if(money > 1000000){
    gp.style.display = "inline";
    gptxt.style.display = "inline";
    gpbtn.style.display="inline";
    gp.src="./assets/gold_pickaxe.png";
    gptxt.innerHTML=`Gold Pickaxe - <img src="./assets/catcoin1.png" height="15px">1.0M</b><br>Slightly better than the Iron Pickaxe.<br><button style="position: absolute;right:0;"class="buy" id="gold_pickaxe-btn"onclick="checkforPick(1000000,'GP_Interval')">BUY</button></p>`
    Cookies.set("upg1", "yep")
  } else {
    donothingig()
  }
  if(money > 1000003 && Cookies.get("upg1") == "yep"){
    displayupgrade(`Gold Pickaxe - <img src="./assets/catcoin1.png" height="15px">1.0M</b><br>Slightly better than the Iron Pickaxe.<br><button style="position: absolute;right:0;"class="buy" id="gold_pickaxe-btn"onclick="checkforPick(1000000,'GP_Interval')">BUY</button></p>`,gptxt)
  } else {
    donothingig()
  }
  if(money > 1000005 && Cookies.get("modal2alrshown") != "yep"){
    npamodal("./assets/gold_pickaxe.png","Gold Pickaxe")
    Cookies.set("modal2alrshown","yep");
  } else {
    donothingig()
  }
  if(money > 2500000){
    pickpickbtn.style.display="inline";
    pickaxepickaxe.style.display="inline";
    pickaxepickaxe.src="./assets/pickaxe_pick.png";
    pickpicktext.innerHTML=`<b> Pickaxe Pickaxe - <img src="./assets/catcoin1.png" height="15px">2.5M</b><br>When you see a tiny pickaxe, you can't help but tape it to your old one... <br>Right?<button class="buy" id="bgp-btn" onclick="checkforPick(2500000,'pickpick')" style="left:100%;position: absolute;">BUY</button>`
  } else {
    donothingig()
  }
  if(money > 2500005 && Cookies.get("modal3alrshown")!=="yep"){
npamodal("./assets/pickaxe_pick.png","Pickaxe Pickaxe")
Cookies.set("modal3alrshown","yep")
  }  if(money > 7000000){
    spbtn.style.display="inline";
    sp.style.display="inline";
    sp.src="./assets/steel_pick.png";
    sptxt.innerHTML=`<b> Steel Pickaxe - <img src="./assets/catcoin1.png" height="15px">7M</b><br>This pickaxe is slightly better than the pickaxe pickaxe, just shinier. <br> wow<button class="buy" id="bgp-btn" onclick="checkforPick(2500000,'pickpick')" style="left:100%;position: absolute;">BUY</button>`
  } else {
    donothingig()
  }
  if(money > 7000005 && Cookies.get("modal4alrshown")!=="yep"){
npamodal("./assets/steel_pick.png","Steel Pickaxe")
Cookies.set("modal4alrshown","yep")
  }
  if(money > 20000000){
    bgep.style.display = "inline";
    bgptxt.style.display = "inline";
    bgpbtn.style.display="inline";
    bgptxt.innerHTML=`<p style="top:80%; position: absolute; left:30%;"id="bgptxt"><b> Baguette Pickaxe - <img src="./assets/catcoin1.png" height="15px">10M</b><br>The superior Baguette Pickaxe was said to be imported straight from France. <br>This pickaxe gets you 50k catcoin per second. Just... don't eat it.<button class="buy" id="pickpick-btn" onclick="checkforPick(10000000,'bgp')" style="left:100%;position: absolute;">BUY</button></p>
    <img src="./assets/hmmmmm.png" id="bgp" style="  image-rendering: pixelated;position: absolute;top:80%; height:70px; ">`
  } else {
    donothingig()
  }
  if(money > 20000005 && Cookies.get("travelTicket")!== "1"){
    upcontent.innerHTML = "<h1 style='text-align:center;'>New Pickaxe Availible!</h1><img src='./assets/baguettepick.png' height='120px'>Baguette Pickaxe<br>And you got a <br><h3>Travel Ticket<img src='./assets/travelticket.png' height='20px'></h3>"
    $("#up1-content, #up1-background").toggleClass("active");
    Cookies.set("travelTicket","1");
  } else {
    donothingig()
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
    if(Cookies.get("jonathanmode")!=="on"){
        money += 8000;
        plusamt.innerHTML = "+<img src='./assets/catcoin1.png' height='15px'>8,000";
        pickaxe.style.animation = 'none';
        pickaxe.offsetHeight; /* trigger reanimate */
        pickaxe.style.animation = null; 
        pickaxe.style.animationPlayState="running"
        ms2.play();
    } else {
      money += 8000;
      plusamt.innerHTML = "+<img src='./assets/catcoin1.png' height='15px'>8,000";
    cat.src="./assets/kbc1.jpg"
      
    }
  },'keyup');
  Mousetrap.bind('space',function(){
    if(Cookies.get("jonathanmode")!=="on"){
donothingig()
    } else {
      cat.src="./assets/kbc2.jpg"

    }
  },'keydown')
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
function pickpick() {
  document.getElementById("pickpick-btn").disabled=true;
  document.getElementById("pickpick-btn").innerText="OWNED";
  //do the same thing with the other buttons that are to buy stuff and for the buttons that are (probably) bought
  gpbtn.innerText="OWNED";
  gpbtn.disabled=true;
  document.getElementById("irp-btn").disabled=true;
  document.getElementById("irp-btn").innerText="OWNED";
  //set the pickaxe's src image to the baguette
  pickaxe.src = "./assets/pickaxe_pick.png";
  pickaxe.style="height:125px"
  pickaxe.style.animationDuration = "2.7s";
  Cookies.set("activepick","pickpick")
  //clear the interval, idk what the interval is for rn 
  clearInterval(window.g); 
  ore.innerHTML="<img src='./assets/coal1.png' height='160px'>";
  Mousetrap.bind('space', function(){
    money += 40000;
    
    plusamt.innerHTML = "+<img src='./assets/catcoin1.png' height='15px'>80k";
    pickaxe.style.animation = 'none';
    pickaxe.offsetHeight; /* trigger reflow */
    pickaxe.style.animation = null; 
    pickaxe.style.animationPlayState="running"
    ms1.play();
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
  pickaxe.style="height:125px"
  pickaxe.style.animationDuration = "2.7s";
  Cookies.set("activepick","pickaxe")
  //clear the interval, idk what the interval is for rn 
  clearInterval(window.g); 
  ore.innerHTML="<img src='./assets/coal1.png' height='160px'>";
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
function steelpick(){
  document.getElementById("bgp-btn").disabled=true;
  document.getElementById("bgp-btn").innerText="OWNED";
  //do the same thing with the other buttons that are to buy stuff and for the buttons that are (probably) bought
  gpbtn.innerText="OWNED";
  gpbtn.disabled=true;
  document.getElementById("irp-btn").disabled=true;
  document.getElementById("irp-btn").innerText="OWNED";
  //set the pickaxe's src image to the baguette
  pickaxe.src = "./assets/steelpick.png";
  pickaxe.style="height:125px"
  pickaxe.style.animationDuration = "2.7s";
  Cookies.set("activepick","pickaxe")
  //clear the interval, idk what the interval is for rn 
  clearInterval(window.g); 
  ore.innerHTML="<img src='./assets/coal1.png' height='160px'>";
  Mousetrap.bind('space', function(){
        money += 50000;
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
