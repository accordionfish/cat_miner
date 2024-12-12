//no ternary operators used, jk except for a few
let loader = document.getElementById('loader');
let i = 0;

window.onload = () => {
    setTimeout(()=>{
    loader.style.display='none';
    },1400)
}
//audio stuff
const catcoin_codes = ["blehhh","chameleon","bingus","yes"]
const accordion = new Audio("https://catminer-reltest.vercel.app/game/assets/accord1.wav")
const pickaxes = ["rusty","iron","gold","pickaxe","steel","baguette","accordion","snail","eiffeltower","lasagna","christmas Tree","glitchy",];
const boosts = ["catnip","catgrass","cat Coffee"]
const places = ["cave","paris","italy","christmas"/* there are plans to add more for sure */];
const cats = ["original","butterscotch","hearts","sochi"];
const ores = ["coal","beignet","gingerbread"/*  same thing here, just putting a placeholder */]
const pick_src = { 
    'rusty': 'https://catminer-reltest.vercel.app/game/assets/rusty_pick.png',
    'iron': 'https://catminer-reltest.vercel.app/game/assets/iron_pick.png',
    'gold': 'https://catminer-reltest.vercel.app/game/assets/gold_pick.png',
    'pickaxe': 'https://catminer-reltest.vercel.app/game/assets/pickaxe_pick.png',
    'steel': 'https://catminer-reltest.vercel.app/game/assets/steel_pick.png',
    'baguette': 'https://catminer-reltest.vercel.app/game/assets/baguette_pick.png',
    'snail':'https://catminer-reltest.vercel.app/game/assets/snail_pick.png',
    'eiffeltower':'https://catminer-reltest.vercel.app/game/assets/eiffeltower_pick.png',
    "accordion":"https://catminer-reltest.vercel.app/game/assets/accordion_pick.png",
    'glitchy': 'https://catminer-reltest.vercel.app/game/assets/aipickaxe.png',
    'christmas Tree': "assets/christmastree_pick.png",
    "lasagna":"https://catminer-reltest.vercel.app/game/assets/lasagnapick.png"
};
const ore_src = {
    "cave":"https://catminer-reltest.vercel.app/game/assets/coal1.png",
    "paris":"assets/beignet.png",
    "italy":"https://catminer-reltest.vercel.app/game/assets/placeholder.gif",
    "christmas":"https://png.pngtree.com/png-vector/20231015/ourmid/pngtree-the-gingerbread-man-png-image_10163077.png"
}
const boost_src = {
    "catnip":"https://cdn.glitch.global/b017f28e-a393-47a6-a5c8-982ee9f66fe5/catnip.png?1711982883470",
    "catgrass":"https://cdn.glitch.global/b017f28e-a393-47a6-a5c8-982ee9f66fe5/catgrass.png",
    "cat Coffee":"https://cdn.glitch.global/b017f28e-a393-47a6-a5c8-982ee9f66fe5/Cat-Cofe-Closed-Lid.png?1711986089464"
}
const boost_prices = {
    "catnip":10000,
    "catgrass":100000,
    "cat Coffee":2000000
}
const boost_mult = {
    "catnip":2,
    "catgrass":5,
    "cat Coffee":10
}
const pick_prices = {
    'iron': 15000,
    'gold': 55000,
    'pickaxe': 250000,
    'steel':1000000,
    'baguette':7000000,
    'accordion':40000000,
    'snail':80000000,
    'eiffeltower':75000000,
    'lasagna':1000000000,
    'christmas Tree':10000000000,
    'glitchy':2222225828528528
};
const ccperpick = {
    'rusty':50,
    'iron':100,
    'gold':4000,
    'pickaxe':40000,
    'steel':80000,
    'baguette':300000,
    'accordion':1000000,
    'snail':2000000,
    'eiffeltower':750000000,
    'lasagna':800000000,
    'christmas Tree':50000000000,
    'glitchy':5702671010111001
}
const dialog_lines = {
    "Mr. Loaf": ["Welcome to my shop!","This is the "+pickaxes[pickaxes.indexOf(localStorage.getItem("activepick"))+wow]+" Pickaxe.","Would you like to buy it?","Here you go, a shiny new pickaxe!", "Ok, have a good day!","It looks like you already have this pickaxe. Would you like to equip it?","That's all in my collection for now.\n(hint:maybe try traveling somewhere new)","It looks like you don't have enough catcoins.\n Thanks anyway!","Alright, here you go!","Ok, feel free to check out any others!"],
    "Pilot Bob": ["Welcome everyone to the When Cats Fly Airport!","Today, we have a flight to "+places[wow]+"!","It looks like you don't have a ticket. Would you like to buy one?","Thanks for your business!","Were you looking for a different flight? You can reuse old tickets.","Attention! We are now boarding!","Alright folks, enjoy your flight!", "Thanks for flying When Cats Fly Airlines!"],
    "speedymetal":["Welcome to my store!",", great choice!\n Want to buy it?","Thanks for shopping! ","Looks like you already bought this.\n Want to activate it?"]
}
const pick_places = {
    "iron":"cave",
    "gold":"cave",
    "pickaxe":"cave",
    "steel":"cave",
    "baguette":"paris",
    "accordion":"paris",
    "snail":"paris",
    "eiffeltower":"paris",
    "lasagna":'italy',
    "christmas Tree":"christmas",
    "glitchy": "cativerse"
}
const place_img = {
    "cave":"assets/cavebg.png",
    "paris":"assets/parisbg.png",
    "italy":"./assets/italy.png",
    "christmas":"https://static.vecteezy.com/system/resources/thumbnails/032/411/154/small_2x/deer-standing-in-winter-snow-background-with-christmas-tree-merry-christmas-and-happy-new-year-ai-generated-free-photo.jpg"
}
const minig_img = {
    "cave":"https://catminer-reltest.vercel.app/game/assets/placeholder.gif",
    "paris":"https://catminer-reltest.vercel.app/game/assets/placeholder.gif"
}
const ticket_prc = {
    "paris":10000000,
    "italy":50000000,
    "christmas":Infinity
}
const randomCatPositions = [
  ["20%","45%"],
  ["25%","55%"],
  ["20%","55%"],
  ["25%","45%"]
]
const pickInfoText = {
  "iron":"The very first pickaxe that Mr. Loaf obtained. He put it together with a stick and some scrap metal that he melted.",
  "gold":"Slightly better than the previous pickaxe, Mr. Loaf had found some gold and naturally wanted to make a pickaxe.",
  "pickaxe":"A pickaxe taped to another pickaxe? Pickaxeception???"
}
var wow;
var w = 0;
//get the ids of everything needed to be referred to
const dialog_el = document.getElementById("line")
const cc_el = document.getElementById("catcoins");
const pick_el = document.getElementById("pick");
const shop_el = document.getElementById("shop");
const shop_window = document.getElementById("shop_ctr");
const shop_pick = document.getElementById("shop-pick");
const buy_btn = document.getElementById("buy");
const cat = document.getElementById("cat");
const place_el = document.getElementById("place");
const dialog = document.getElementById("dialog");
const dg_person = document.getElementById("person");
const dg_action = document.querySelector("#action");
const dg_options = document.querySelector("#options");
const o1 = document.querySelector("#ac1");
const o2 = document.querySelector("#ac2");
const travel = document.querySelector("#travel");
const travel_ctr = document.querySelector("#trvl-menu");
const trvl_place = document.querySelector("#place");
const trvl_mg = document.querySelector("#minigame");
const trvl_mgimg = document.querySelector("#mini_img");
const trvl_img = document.querySelector("#place-img");
const trvl_visit = document.querySelector("#visit");
const airport = document.querySelector("#airport");
const flight = document.querySelector("#flight")
const shop2_btn = document.querySelector("#shop2");
const ore = document.querySelector("#ore-src");
const ore_ctr = document.querySelector("#ore")
const shop2 = document.querySelector("#shop2_ctr")
const pick1 = document.getElementById("pick1");const pick2=document.getElementById("pick2");const pick3 = document.getElementById("pick3");const pick4 = document.getElementById("pick4");
const boost1 = document.querySelector("#boost1");const boost2 = document.querySelector("#boost2");const boost3 = document.querySelector("#boost3");
const plusAmt = document.querySelector("#plus");
const pickInfo = document.querySelector("#pickInfo")
const eventBtn = document.querySelector("#event");
var plusOpacity = 1;
var plusPos;
var activePlace; 
var activePick;
var activeCat;
var activeBoost;
var catcoins;
var boughtpicks = [];
var boughtboosts = [];
var visitedplaces = [];
var ccpm; /*(catcoins per mine) */
var as_place;
var numOfHelperCats;
//thanks stack overflow
window.mobileCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};
if(mobileCheck()){
    document.write("sorry but cat miner isn't supported on mobile right now")
}
//special function when a pickaxe mines
var special_func = function(){};
//functions to speed up development
function hide(el){
  document.getElementById(el).style.display="none";
}
function show(el, type){
  el.style.display = type;
}
function storage(option,cookie,value){
  switch(option){
    case "get":
      localStorage.getItem(cookie);
      break;
    case "set":
      localStorage.setItem(cookie,value);
      break;
  }
}
function getCssProperty(elmId, property){
  var elem = document.getElementById(elmId);
  return window.getComputedStyle(elem,null).getPropertyValue(property);
} 
//e
console.log("are you a developer?? cause if u try to cheat then cat miner will be iuwheiunhfwfn.")
//load the saved pickaxe
//coulda used a switch statement but whatever
if(localStorage.getItem("activepick") === 'undefined' | null ){
    //start new game
    console.log("%c no saved pickaxe found,starting new game.","font-family:sans-serif");
    //rusty pickaxe
    var activePick = pickaxes[0];
    //set active pickaxe to active pick
    localStorage.setItem("activepick",activePick)
    var catcoins = 0;
    var ccpm = 50;
    visitedplaces[0]="cave";
    var numOfHelperCats = 0;
} else if(pickaxes.includes(localStorage.getItem("activepick"))){
    //since the saved pickaxe is an item in that array, just set the active pickaxe to the saved value.
    var activePick = localStorage.getItem("activepick");
    var catcoins = parseInt(localStorage.getItem("catcoins"));
    var activePlace=localStorage.getItem('activeplace');
    var activeBoost=localStorage.getItem('activeboost');
    var visitedplaces = JSON.parse(localStorage.getItem("visitedplaces"));
    var boughtboosts = JSON.parse(localStorage.getItem("boughtboosts"));
    var numOfHelperCats = Number(localStorage.getItem("numOfHelperCats"));

if (isNaN(numOfHelperCats)) {
    // If there's no stored value/ broken value, initialize it to a default value
    numOfHelperCats = 0;  // or any other default value you'd like
    localStorage.setItem("numOfHelperCats", JSON.stringify(numOfHelperCats));  // Save to localStorage

} else {
    // If the value exists in localStorage, parse it as an integer
    numOfHelperCats = Number(localStorage.getItem("numOfHelperCats"));
}

    console.log("%c found a saved pickaxe.","color:green; font-family:sans-serif;")

} else if(!localStorage.getItem("activepick")) {
    console.log("%c no saved pickaxe found,starting new game.","font-family:sans-serif");
    var activePick = pickaxes[0];
    localStorage.setItem("activepick",activePick)
    var catcoins = 0;
    var ccpm = 50;
    var numOfHelperCats = 0;
    var activePlace = places[0];
    visitedplaces[0]="cave";

} else{
    alert('error! please look in the log and report the bug on github!')
}
//set the active catcoins per mine
if(localStorage.getItem("ccpm")){
    var ccpm = parseInt(localStorage.getItem("ccpm"));
} else {
    var ccpm = 50;
}
if(localStorage.getItem("boughtpicks")){
    var boughtpicks = JSON.parse(localStorage.getItem("boughtpicks"))
} else {
    //ee
}
//if the catcoins value is NaN, set it to 0. 
if(isNaN(catcoins)){
  var catcoins = 0;
  console.log(catcoins)
} else {
  console.log(catcoins)
}
if(activePlace == "christmas"){
  particlesJS('particles-js',{
    "particles": {
      "number": {
        "value": 400,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#fff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 3
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 10,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 0,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "bottom",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "bubble"
        },
        "onclick": {
          "enable": false,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 0.5
          }
        },
        "bubble": {
          "distance": 400,
          "size": 4,
          "duration": 0.3,
          "opacity": 1,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  document.querySelector("#cat-cosmetics").src = "https://pngimg.com/d/santa_hat_PNG61.png";
  document.querySelector("#cat-cosmetics").hidden = false; 
}
//save the game every 0.1 seconds
let saveInterval = setInterval(() => {
    localStorage.setItem("activepick",activePick);
    localStorage.setItem("activecat",activeCat);
    localStorage.setItem("activeplace",activePlace);    
    localStorage.setItem("catcoins",catcoins);
    localStorage.setItem("ccpm",ccpm)
    localStorage.setItem("boughtpicks",JSON.stringify(boughtpicks));
    localStorage.setItem("visitedplaces",JSON.stringify(visitedplaces));
    localStorage.setItem("boughtboosts",JSON.stringify(boughtboosts));
    localStorage.setItem("activeboost",activeBoost);
    localStorage.setItem("numOfHelperCats",JSON.stringify(numOfHelperCats));
    //check if there is a boost(debug)
    if(activeBoost === undefined | null){
      //undefined boost
    } else if(activeBoost !== undefined | null | 'undefined') {
      //e
    }

  

    //set the catcoins element to be the amount of catcoins
    cc_el.innerHTML = "<img src='https://catminer-reltest.vercel.app/game/assets/catcoin1.png' height='30px' style='vertical-align:middle'>" + numeral(catcoins).format('0.0a');
},100)
let helperCatMoneyInt = setInterval(() =>{
  if(numOfHelperCats > 0){
    catcoins += ccperpick[activePick] / 5;
  }
},1000)
let helperCatInterval = setInterval(() =>{
  if(numOfHelperCats < 4){
  var randomnum = Math.floor(Math.random() * 5)
  if(randomnum === 3){
    alert('A helper cat has spawned!')
    tinycat = document.createElement("img");
    tinycat.style.position = "absolute";
    tinycat.style.left = randomCatPositions[numOfHelperCats][0];
    tinycat.style.top = randomCatPositions[numOfHelperCats][1];
    tinycat.src = "https://catminer-reltest.vercel.app/game/assets/cm.gif";
    tinycat.id="helpercat";
    tinycat.height=50;
    tinycat.style.zIndex = "-1";
    numOfHelperCats++;
    ore_ctr.appendChild(tinycat)
  } else {
    console.log(randomnum)
  }
}
},1000)
//load the pickaxe
pick_el.src = pick_src[activePick];
//load the ore
activePlace ? ore.src=ore_src[activePlace] : ore.src=ore_src["cave"];
//load the background

activePlace ? document.body.style.backgroundImage="url("+place_img[activePlace]+")" : document.body.style.backgroundImage="url("+place_img["cave"]+")";
visitedplaces[places.indexOf(activePlace)] ? console.log('you are in the cave'): visitedplaces[places.indexOf(activePlace)] = places[activePlace]   
visitedplaces[places.indexOf(activePlace)]=places[places.indexOf(activePlace)]
//load boosts (if you have them)
// honestly idk why I don't need this block of code because it seems important but it just suddenly started working for no reason
if(activeBoost && ccpm === ccperpick[activePick] * boost_mult[activeBoost]){
console.log('yey')
  if(activeBoost === "cat Coffee"){
    boost3.src= "https://cdn.glitch.global/b017f28e-a393-47a6-a5c8-982ee9f66fe5/Cat-Cofe-Empty-Lid.png?1711986084509";
  }
} else if(activeBoost && ccpm !== ccperpick[activePick] * boost_mult[activeBoost]){
  eatborgir()
  console.log('lemme fix that real quick')
}
//load helper cats
for(var h = 0; h < numOfHelperCats;h++){
  tinycat = document.createElement("img");
    tinycat.style.position = "absolute";
    tinycat.style.left = randomCatPositions[h][0];
    tinycat.style.top = randomCatPositions[h][1];
    tinycat.src = "https://catminer-reltest.vercel.app/game/assets/cm.gif";
    tinycat.id="helpercat";
    tinycat.height=50;
    ore_ctr.appendChild(tinycat);
}
//since the baguette's scaling is wonky, and da pickaxe is of large size, change the size to fit the other pickaxes.
if(localStorage.getItem("activepick")==='baguette'){
    pick_el.style.height="128px";
    //just to clarify 
    console.log('%c pickaxe is baguette!!! wow!!!',"color:orange; font-family:sans-serif;");
} else {
        console.log('wow')
}
//steal the eiffel tower (hehehe haw)
if(activePick==="eiffeltower" && activePlace === "paris"){
    document.body.style.backgroundImage = "url(assets/parisbg_hm.png)";
}
//make bad accordion playing noises while you mine
if(activePick==="accordion"){
    var special_func = ()=>{
        accordion.currentTime=0;
        accordion.play();
        try {
        pick_el.addEventListener("animationstart",()=>{pick_el.src="https://catminer-reltest.vercel.app/game/assets/accordion_pick1.png"});
        pick_el.addEventListener("animationend",()=>{
            pick_el.src="https://catminer-reltest.vercel.app/game/assets/accordion_pick.png";
        })
        } catch(e){
            accordion.addEventListener("audio")
            alert(e)
        }

    }
} else {
  pick_el.src = pick_src[activePick]
}
//set the spacebar to mine 
Mousetrap.bind('space',(e) =>{
    if(!e.repeat){
    plusOpacity = 1;
    catcoins +=ccpm;
    pick_el.style.animation = 'none';
    pick_el.offsetHeight;
    pick_el.style.animation = null;
    plusAmt.innerText = "+"+ccperpick[activePick];
    special_func();
    } else {
        console.log("you are holding down space? sorry that doesn't work anymore but here's a jerry \n 〽️\n🟡 wah"); 
    }
    //larry
if(activePick === "snail"){
    pick_el.src="https://catminer-reltest.vercel.app/game/assets/snail_pick1.png";
    pick_el.onanimationend=()=>{
        pick_el.src=pick_src["snail"];
    }
    pick_el.animationDuration="3s";
} else {
    //do stuff
    pick_el.onanimationend=()=>{/* doot dee doot*/}
}
},'keydown')
setInterval(()=>{
//random unrelated thingy
if(plusOpacity != 0){
  plusOpacity -=0.1;
plusAmt.style.opacity = plusOpacity;
}
},250)
ore_ctr.onclick=()=>{
   catcoins +=ccpm;
    pick_el.style.animation = 'none';
    pick_el.offsetHeight;
    pick_el.style.animation = null;
    special_func();
}
Mousetrap.bind("d e b u g",() =>{
    debug("alert");
})
eventBtn.onclick = () => {
  if(activePlace !== "christmas") {
    if(confirm("Go to event?")) {
      activePlace = "christmas"; 
      location.reload();
    } else {
      console.log('Not going to event');
    }
  } else {
    for(var n = 0; n < visitedplaces.length; n++) {
      let placeIndex = visitedplaces.length - 1 - n;
      if(visitedplaces[placeIndex] !== null && visitedplaces[placeIndex] !== "christmas" && visitedplaces[placeIndex] !== undefined) {
        if(confirm("Go back to " + visitedplaces[placeIndex] + "?")) { 
          activePlace = visitedplaces[placeIndex];
          location.reload();
          break; // Exit the loop after confirming a place
        } else {
          alert("Ok. Staying in Christmas");
          break;
        }
      }
    }
  }
}

Mousetrap.bind("c a t c o i n",() =>{
  if(prompt("enter secret code") === catcoin_codes[0] || catcoin_codes[1] || catcoin_codes[2]){
    alert('you got the secret code!!')
    catcoins+=10000000000;
  }
})
Mousetrap.bind("c o n s o l e",()=>{
  localStorage.setItem("console","something") 
})
function right() {
    //if da thing that you know you shuffle through pickaxes and stuff is not more than the amount of array
    if(!(i + 6 > Object.keys(pickaxes).length)  && visitedplaces.includes(pick_places[pickaxes[i+5]])){
     /* 6 because ya know like the 0th index in an array and youre adding 4 to the i variable and stuff*/
    i += 1;
    pick1.src = pick_src[pickaxes[i + 1]];
    pick2.src = pick_src[pickaxes[i + 2]];
    pick3.src = pick_src[pickaxes[i + 3]];
    pick4.src = pick_src[pickaxes[i + 4]];
    } else {
        dialog.style.display = 'flex';
        dialog_el.innerText = dialog_lines["Mr. Loaf"][6]

    }
}
function left() {
    if(i - 1 !== -2){
        i -=1;
    pick1.src = pick_src[pickaxes[i + 1]];
    pick2.src = pick_src[pickaxes[i + 2]];
    pick3.src = pick_src[pickaxes[i + 3]];
    pick4.src = pick_src[pickaxes[i + 4]];
    } else {
        dialog.style.display = 'flex';
        dialog_el.innerText = dialog_lines["Mr. Loaf"][6]
    }
}
function buyPick(pick, pick_id){
    if(catcoins >= pick_prices[pick] && !boughtpicks.includes(pick)){
    //you have less moolah
    catcoins -= pick_prices[pick];
    //render the pickaxe
    pick_el.src = pick_src[pick];
    //set da active pickaxe to the right active pickaxe and ya dah ya dah ydaafuywgefhf
    activePick=pick;
    //the pickaxe wants to be stronger 
    ccpm = ccperpick[pick];
    //you have bought the pickaxe
      
ore_ctr.onclick=()=>{
try {
  catcoins +=ccpm;
    pick_el.style.animation = 'none';
    pick_el.offsetHeight;
    pick_el.style.animation = null;
    special_func();
} catch(e){
  alert(e)
}
}
    try {
    boughtpicks.push(pick);    
    } catch(e) {
        alert(e)
    }
    } else if(boughtpicks.includes(pick)){
        //you have already bought this pick

    } else {
        return 'not enough money'
        }
    //since baguette has wonky scaling set it to correct size :)
    if(activePick ==='baguette'){
        pick_el.style.height="128px";
        //just to clarify 
        console.log('%c pickaxe is baguette!!! wow!!!',"color:orange; font-family:sans-serif;");
    }
    if(activePick==="snail" && !(boughtpicks.includes(pick))){
        alert("NOTICE:\nthe snail(larry) agreed to be a pickaxe. \nNo snails are to be harmed in the mining of this ore.")
    } else {
        console.log("pickaxe is not larry")
    }
    if(activePick==="eiffeltower" && activePlace === "paris"){
        document.body.style.backgroundImage = "url(https://catminer-reltest.vercel.app/game/assets/parisbg_hm.png)";
    } else {
        document.body.style.backgroundImage = "url("+place_img[activePlace]+")";
    }
    if(activePick==="accordion"){
        console.log("accordion")
    }
}
function viewPick(e){
    dg_options.style.display = 'none';
    pickInfo.style.display="block";
    pickInfo.innerText = pickInfoText[pickaxes[e]];
    hide('shop-pick')
    dialog_lines["Mr. Loaf"][1] = "This is the "+pickaxes[e][0].toUpperCase() + pickaxes[e].slice(1)+" Pickaxe, which costs "+numeral(pick_prices[pickaxes[e]]).format("0.0.a")+" catcoins.";
    shop_pick.style.display="inline";
    dialog.style.display="flex";
    shop_pick.src = pick_src[pickaxes[e]];
    dialog_el.innerText = dialog_lines["Mr. Loaf"][1];
    dg_action.onclick = () => {
        dialog_el.innerText = dialog_lines["Mr. Loaf"][2];
        dg_action.innerText = "▲";
        dg_action.onclick = () => {
        dg_options.style.display = 'block';
    }}
    o1.onclick = () => {
        if(boughtpicks.includes(pickaxes[e])){
            //you have already bought this pick
        dg_action.innerText = "▶";
        dg_action.onclick = () => {dg_options.style.display="block";o1.onclick=()=>{activePick=pickaxes[e];dialog_el.innerText=dialog_lines["Mr. Loaf"][8];hide('options');pick_el.src=pick_src[pickaxes[e]];if(pick==="snail" && !(boughtpicks.includes(pick))){ alert("NOTICE:\nthe snail(larry) agreed to be a pickaxe. \nNo snails are to be harmed in the mining of this ore.") } else { console.log("pickaxe is not larry") } if(activePick==="eiffeltower" && !(boughtpicks.includes(pick)) && activePlace === "paris"){ document.body.style.backgroundImage = "url(https://catminer-reltest.vercel.app/game/assets/parisbg_hm.png)"; special_func=()=>{pick_el.onanimationstart=()=>{};pick_el.onanimationend=()=>{}} } else { document.body.style.backgroundImage = "url("+place_img[activePlace]+")"; } if(activePick==="accordion"){ accordion.play() }};o2.onclick=()=>{}}
        hide('options');
        dialog_el.innerText = dialog_lines["Mr. Loaf"][5];
        
        console.log('works properly')
        } else if(!(buyPick(pickaxes[e],e) === 'not enough money')){
        buyPick(pickaxes[e],e);
        hide('options');
        console.log('bought pickaxe');
        dg_action.innerText = "▶";
        dg_action.onclick = () => {hide('dialog')}
        dialog_el.innerText = dialog_lines["Mr. Loaf"][3]
        } else {
            hide('options')
            dialog_el.innerText = dialog_lines["Mr. Loaf"][7];
            dg_action.innerText = "▲";
            dg_action.onclick=()=>{hide('dialog')}            
        }
    }
    o2.onclick = () => {
        dialog_el.innerText = dialog_lines["Mr. Loaf"][4]
        hide('options');
        dg_action.innerText = "▶";
        dg_action.onclick = () => {hide('dialog')}
    }

}
//when the button for the shop is clicked open it
shop_el.addEventListener('click', () => {
    console.log("opening shop..");
  hide('options')
    shop_window.style.display="inline";
    cc_el.style.display="block";
    cc_el.style.zIndex = "50";
    cc_el.style.animation = "slideInLeft 1s";
    cc_el.style.marginTop = "40px";
    if(pickaxes[pickaxes.indexOf(localStorage.getItem("activepick")) !== undefined | null]){
    pick1.src = pick_src[pickaxes[i + 1]];
    pick2.src = pick_src[pickaxes[i + 2]];
    pick3.src = pick_src[pickaxes[i + 3]];
    pick4.src = pick_src[pickaxes[i + 4]];
    } else {
        console.error("pickaxe is not in range.");
    }
    setTimeout(() => {dialog.style.display="flex";},200);
    dialog_el.innerText = dialog_lines["Mr. Loaf"][0];
    dg_person.innerText = Object.keys(dialog_lines)[0];
    dg_action.innerText = "▶";
    dg_action.onclick = function(){hide('dialog')}

});
if(localStorage.getItem("activepick") === 'glitchy') {
    if(localStorage.getItem("hm") === 'no'){
    var e1 = setInterval(() => {pick_el.style.animationPlayState = "running"},100)
    var e2 = setInterval(() => {pick_el.style.animationPlayState = "paused";catcoins+=1412222228471248;},90)
    var e3 = setInterval(() => {pick_el.style.top =  Math.floor(    Math.random() * 500)+"px";catcoins+=1412847222221248;},120)
    var e4 = setInterval(() => {pick_el.style.left = Math.floor(Math.random() * 1000 - 220)+"px"},110);
    } else if(prompt("if you are prone to seizures, then type 'yes'. otherwise , enjoy the glitchyness.") !== 'yes' | 'Yes' | 'yEs' | 'YeS' | 'yES' | 'YES'){
        var e1 = setInterval(() => {pick_el.style.animationPlayState = "running"},100)
        var e2 = setInterval(() => {pick_el.style.animationPlayState = "paused";catcoins+=1412222228471248;},90)
        var e3 = setInterval(() => {pick_el.style.top =  Math.floor(220 - Math.random() * 500)+"px";catcoins+=1412847222221248;},120)
        var e4 = setInterval(() => {pick_el.style.left =  Math.floor(Math.random() * 1000 -220)+"px"},110);
    localStorage.setItem("hm",'no')

    }
  else {
    clearInterval(e1)
    clearInterval(e2)
    clearInterval(e3)
    clearInterval(e4)

    var activePick = 'glitchy';
    pick_el.src = pick_src[activePick]
    localStorage.setItem("hm","yes")
}
} else {
    console.log("pickaxe is not glitched")
}

travel.addEventListener("click",() => {
    hide('dialog')
  hide('options')
  hide('flight')
  
    travel_ctr.style.display = "block";
    trvl_place.innerText = activePlace[0].toUpperCase() + activePlace.slice(1);
    trvl_mg.value = activePlace+"minigame";
    trvl_mg.onclick=()=>{alert('hey soo uhh theres no minigames finished yet, i will add them once 5 places are finished. (3 out of 5)\n btw the cave minigame is almost done')}
    trvl_mgimg.src = minig_img[places[places.indexOf(activePlace)]];
    trvl_img.style.background = "url("+place_img[activePlace]+")";
    trvl_img.style.backgroundRepeat = "repeat";
    trvl_img.style.backgroundSize = "cover";
    
});
Mousetrap.bind("c m d",()=>{window[prompt("enter cmd")]})
Mousetrap.bind("escape",() => {
  if(shop_window.style.display === "inline"){
    hide("shop_ctr");
    hide('dialog')
      cc_el.style.marginTop = '15px'
  } else if(shop2.style.display === "block"){
    hide("shop2_ctr");
    hide('dialog')
    cc_el.style.marginTop = '15px'
  } else if(airport.style.display === "block"){
    hide('airport');
    hide('dialog')
    cc_el.style.marginTop = '15px'
  } else if(travel_ctr.style.display === "block"){
    hide('trvl-menu')
    hide('dialog')
    cc_el.style.marginTop = '15px'
  }else {
    console.log('you pressed escape!')
  }
})

shop2_btn.addEventListener("click",()=>{
    shop2.style.display="block";
  hide('options')
  
    dg_person.innerText = "speedymetal";
  if(Math.floor(Math.random() * 10) !== 1){dialog_el.innerText=dialog_lines["speedymetal"][0]}
  else {
    dialog_el.innerText="Did you know I found the biggest glitch in the game?"
  };
    dialog.style.display="flex";
    dg_action.innerText="▶";
    dg_action.onclick=()=>{hide('dialog')}
    boost1.src = boost_src[boosts[w]];
    boost2.src = boost_src[boosts[w + 1]];
    boost3.src = boost_src[boosts[w + 2]];
    
})
function viewBoost(boost_id){
    dialog.style.display="flex";
    dialog_el.innerText= boosts[boost_id].charAt(0).toUpperCase() + boosts[boost_id].slice(1) + dialog_lines["speedymetal"][1]+"It costs "+numeral(boost_prices[boosts[boost_id]]).format('0.0a')+" catcoins.";
    dg_action.innerText="▲";
    dg_options.style.display="block";
    o1.onclick=()=>{
        if(buyBoost(boost_id) === "not enough money"){
            alert('insufficient funds.\n',catcoins, "<",boost_prices[boosts[boost_id]])
        } else if(buyBoost(boost_id) === "already bought"){
            console.log(`already bought\n${boughtboosts}`)
        }

        dialog_el.innerText=dialog_lines["speedymetal"][2];
    }
    o2.onclick =()=>{
       dialog_el.innerText="Alright, take your time."
    }
    dg_action.onclick=()=>{}
}
function debug(op){
  if(op !== "alert"){
  console.log("activepick = ",activePick,"\nactiveplace=",activePlace,"\ncatcoins=",catcoins,"\nvisitedplaces=",visitedplaces,"\nplaces=",places,"ccpm:",ccpm)
  console.log("ls activepick=",localStorage.getItem("activepick"),"\nls activeplace=",localStorage.getItem("activeplace"),"\nls cc=",localStorage.getItem('catcoins'),"\nls vp",localStorage.getItem("visitedplaces"))
  } else {
    alert("activepick = "+activePick+"\nactiveplace="+activePlace+"\ncatcoins="+catcoins+"\nvisitedplaces="+visitedplaces+"\nplaces="+places+"\nnumOfHelperCats:"+numOfHelperCats+"\nnumOfHelperCats LS:"+storage("get","numOfHelperCats",""))
    alert("ls activepick="+localStorage.getItem("activepick")+"\nls activeplace="+localStorage.getItem("activeplace")+"\nls cc="+localStorage.getItem('catcoins')+"\nls vp"+localStorage.getItem("visitedplaces"));
    if(confirm("change images?")){
      var changedis = prompt("say what you wanna change, not capitalized. example: cat / ore");
      switch(changedis){
        case "cat":
          cat.src=prompt("paste url here")
          break;
        case "ore":
          ore.src=prompt("paste url here");
          break;
        case "pickaxe":
          pick_el.src=prompt("paste url here");
          break;
        case "background":
          document.body.style.backgroundImage = "url("+prompt("paste url for background")+")";
      }
    } else if(confirm("change internal variables?")) {
      var variable_to_change = prompt("what variable?");
      switch(variable_to_change){
        case "place":
          var previousPlace = activePlace;
          activePlace = prompt("what place?");
          break;
        case "pick":
          var previousPick = activePick;
          activePick = prompt("what pick?");
          if(pickaxes.includes(activePick)){
            pick_el.src = pick_src[activePick]
          } else {
            alert("pickaxe not found.\nself destructing...");
            activePick = previousPick;
          }; 
      }
    }
  }
}
function buyBoost(id){
    if(catcoins >= boost_prices[boosts[id]] && !boughtboosts.includes(boosts[id])){
        //you have less moolah
        catcoins -= boost_prices[boosts[id]];
        //improve speed

        activeBoost=boosts[id];
            activeBoost.includes(boosts[id]) ? console.log(`it works..?\nactive boost value:${activeBoost}`) : console.log(`the value is undefined. there is some bug in da code.\nvalue:${activeBoost}`);
        //the pickaxe is stronger 
        ccpm = ccperpick[activePick] *= boost_mult[boosts[id]];
        try {
        boughtboosts.push(boosts[id]);    
        } catch(e) {
            alert(e)
        }
        } else if(boughtboosts.includes(boosts[id])){
            //you have already bought this boost
            return "already bought";
        } else {
            return 'not enough money';
            }
}

trvl_visit.addEventListener("click",()=>{
  try {
    //load images
    airport.style.display="block";
    flight.style.display="block";
    airport.src='https://catminer-reltest.vercel.app/game/assets/airport.jpg';
    airport.hidden=false;
    hide('options');
    //ding sound that is in every airport announcement in the US
    setTimeout(() => {var dng = new Audio("https://catminer-reltest.vercel.app/game/assets/ding.mp3");dng.volume=0.25;dng.play();
    //load dialog
    dg_person.innerText="Pilot Bob";
    dialog.style.display="flex";
    dialog_el.innerText= dialog_lines["Pilot Bob"][0];
    dg_action.innerText="▶";
    if(places[places.indexOf(localStorage.getItem("activeplace")) + 1] !== undefined){
                    flight.innerText=places[places.indexOf(activePlace)+1];
      dg_action.onclick=()=>{
            if(localStorage.getItem("visitedplaces").includes(places[0]) && places[places.indexOf(activePlace) + 1] !== undefined | null | 'undefined'){

              dialog_lines["Pilot Bob"][1] = "Today, we have a flight to "+places[places.indexOf(localStorage.getItem("activeplace"))+1].charAt(0).toUpperCase()+places[places.indexOf(localStorage.getItem("activeplace"))+1].slice(1)+"!"
                dialog_el.innerText=dialog_lines["Pilot Bob"][1];
                dg_action.onclick=()=>{
                    dialog_el.innerText=dialog_lines["Pilot Bob"][2];
                    dg_options.style.display="block";
                    dg_action.innerText = "▲";
                    o1.onclick=()=>{
                        if(catcoins >= ticket_prc[places[places.indexOf(activePlace)+1]] && places.indexOf(activePlace +1 !== undefined | null | 'undefined')){
                            dialog_el.innerText= dialog_lines["Pilot Bob"][3];
                            hide("options")
                            dg_action.onclick=()=>{
                                dng.play();              
                                dialog_el.innerText=dialog_lines["Pilot Bob"][5];
                                catcoins-=ticket_prc[places[places.indexOf(activePlace)+1]]
                                dg_action.onclick=()=>{activePlace=places[places.indexOf(activePlace)+1];visitedplaces[places.indexOf(activePlace)]=places[places.indexOf(activePlace)];clearInterval(saveInterval);localStorage.setItem("activeplace",activePlace);localStorage.setItem("visitedplaces",JSON.stringify(visitedplaces));debug();dg_action.onclick=()=>{location.reload()}}
                                dg_action.innerText = "▶";
                            }
                        } else if(catcoins <= ticket_prc[places[places.indexOf(activePlace)+1]] | catcoins !== ticket_prc[places[places.indexOf(activePlace)+1]]){
                            console.log(ticket_prc[places[places.indexOf(activePlace)+1]]+" "+catcoins)
                            hide("options");
                            dialog_el.innerText="Sorry, but you can't buy a ticket with "+numeral(catcoins).format("0.0a")+" catcoins.\n A ticket costs "+numeral(ticket_prc[[places[places.indexOf(activePlace)+1]]]).format('0.0a')+" catcoins."
                            dg_action.onclick = () => {
                                dialog_el.innerText = "See you soon!";
                                dg_action.onclick=()=>{hide("dialog");hide("airport");hide("trvl-menu");}
                            }
                        } else if(places[places.indexOf(activePlace)+1] === undefined){
                          
            dialog_lines["Pilot Bob"][6] = "Well, looks like you beat the game(as it is so far).\n To suggest features or report a bug go to the cat miner stuff document.\n ";
            dg_action.onclick=()=>{alert("there's no credits sequence for now so imma reload it for ya");location.reload();}
                        }
                    };o2.onclick=()=>{
                                                      dialog_el.innerText = "See you soon!";
                                dg_action.onclick=()=>{hide("dialog");hide("airport");hide("flight")}
                    }
                }
            } else if(places[places.indexOf(activePlace)+1] === undefined){ 

            dialog_lines["Pilot Bob"][6] = "Well, looks like you beat the game(as it is so far).\n To suggest features or report a bug go to the cat miner stuff document.\n ";
            dg_action.onclick=()=>{alert("there's no credits sequence for now so imma reload it for ya");location.reload();}
            }
        }
    } else if(places[places.indexOf(activePlace)+1] === undefined){
            flight.innerText="game beat!";
            dialog_lines["Pilot Bob"][6] = "Well, looks like you beat the game(as it is so far).\n To suggest features or report a bug go to the cat miner stuff document.\n ";
            dialog_el.innerText=dialog_lines["Pilot Bob"][6];
            dg_action.onclick=()=>{dg_options.style.display="block"; o1.innerText="thanks for playing!";o2.innerText="bye";o1.onclick=()=>{hide('airport')};o2.onclick=()=>{    hide('airport');
    hide('dialog');hide('flight')}}
    } else {
      console.log('hi')
    }
    })
} catch(e){
  alert(e)
}
}
  )

function eatborgir(){
    console.log("you ate borgir. nothing happened.")
}
function del_data(){
 //oh no the autosave its broken
    clearInterval(saveInterval)
    localStorage.clear()
    window.location.reload();
} 