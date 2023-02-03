let loader = document.getElementById('loader');
let i = 0;

window.onload = () => {
    setTimeout(()=>{
    loader.style.display='none';

    },1900)
}
const pickaxes = ["rusty","iron","gold","pickaxe","steel","baguette","glitchy"];
const places = ["cave","paris"/* there are plans to add more for sure */];
const cats = ["original","butterscotch","hearts","sochi"];
const ores = ["coal","beignet"/*  same thing here, just putting a placeholder */]
const gems = [""];
const pick_src = { 
    'rusty': './assets/rusty_pick.png',
    'iron': './assets/iron_pick.png',
    'gold': './assets/gold_pick.png',
    'pickaxe': './assets/pickaxe_pick.png',
    'steel': './assets/steel_pick.png',
    'baguette': './assets/baguette_pick.png',
    'glitchy': './assets/aipickaxe.png'
};
const ore_src = {
    "cave":"./assets/coal1.png",
    "paris":"./assets/beignet.png"
}
const pick_prices = {
    'iron': 500,
    'gold': 500000,
    'pickaxe': 2500000,
    'steel':5000000,
    'baguette':20000000,
    'glitchy':2222225828528528
};
const ccperpick = {
    'rusty':5,
    'iron':10000,
    'gold':50000,
    'pickaxe':250000,
    'steel':500000,
    'baguette':500000,
    'glitchy':5702671010111001
}
const dialog_lines = {
    "Mr. Loaf": ["Welcome to my shop!","This is the "+pickaxes[pickaxes.indexOf(localStorage.getItem("activepick"))+    wow]+" Pickaxe.","Would you like to buy it?","Here you go, a new shiny pickaxe!", "Ok, have a good day!","It looks like you already have this pickaxe.","My shelf is full right now.", "It looks like you don't have enough catcoins.\n Thanks anyway!"],
    "Pilot Bob": ["Welcome everyone to the When Cats Fly Airport!","Today, we have a flight to "+places[wow]+"!","It looks like you don't have a ticket. Would you like to buy one?","Thanks for your business!","Were you looking for a different flight? You can reuse old tickets.","Attention! We are now boarding!","Alright folks, enjoy your flight!", "Thanks for flying When Cats Fly Airlines!"]
}
const pick_places = {
    "iron":"cave",
    "gold":"cave",
    "pickaxe":"cave",
    "steel":"cave",
    "baguette":"paris",
    "glitchy": "cativerse"
}
const place_img = {
    "cave":"./assets/cavebg.png",
    "paris":"./assets/parisbg.png"
}
const minig_img = {
    "cave":"./assets/hmmmmm.png",
    "paris":"./assets/hmmmmm.png"
}
const ticket_prc = {
    "paris":10000000
}
var wow;
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
const pilotbob = document.querySelector("#pilot")
const ore = document.querySelector("#ore")
const pick1 = document.getElementById("pick1");const pick2=document.getElementById("pick2");const pick3 = document.getElementById("pick3");const pick4 = document.getElementById("pick4");
var activePlace;
var activePick;
var activeCat;
var catcoins;
var boughtpicks = ["rusty"];
var visitedplaces = []
var ccpm; /*(catcoins per mine) */
var as_place;
//e
console.log("are you a developer?? cause if u try to cheat then cat miner will be iuwheiunhfwfn.")
//load the saved pickaxe
if(localStorage.getItem("activepick") === 'undefined' | null){
    //pretty self-explanatory
    console.log("%c no saved pickaxe found,starting new game.","font-family:sans-serif");
    var activePick = pickaxes[0];
    localStorage.setItem("activepick",activePick)
    var catcoins = 0;
    var ccpm = 5;
    visitedplaces[0]="cave";
} else if(pickaxes.includes(localStorage.getItem("activepick"))){
    //since the saved pickaxe is an item in that array, just set the active pickaxe to the saved value.
    var activePick = localStorage.getItem("activepick");
    var catcoins = parseInt(localStorage.getItem("catcoins"));
    var activePlace=localStorage.getItem('activeplace');
    var visitedplaces = JSON.parse(localStorage.getItem("visitedplaces"));
    console.log("%c found a saved pickaxe.","color:green; font-family:sans-serif;")

} else if(!localStorage.getItem("activepick")) {
    console.log("%c no saved pickaxe found,starting new game.","font-family:sans-serif");
    var activePick = pickaxes[0];
    localStorage.setItem("activepick",activePick)
    var catcoins = 0;
    var ccpm = 5;
    var activePlace = places[0];
    visitedplaces[0]="cave";

} else{
    alert('error! please look in the log and report the bug on github!')
}
//set the active catcoins per mine
if(localStorage.getItem("ccpm")){
    var ccpm = parseInt(localStorage.getItem("ccpm"));
} else {
    var ccpm = 5;
}
if(localStorage.getItem("boughtpicks")){
    var boughtpicks = localStorage.getItem("boughtpicks")
} else {
    //just so that you can't really buy the first one yaknow
    var boughtpicks = ["rusty"];
}
function hide(el){
    document.getElementById(el).style.display="none";
}
//save the game every 0.1 seconds
let saveInterval = setInterval(() => {
    localStorage.setItem("activepick",activePick);
    localStorage.setItem("activecat",activeCat);
    localStorage.setItem("activeplace",activePlace);    
    localStorage.setItem("catcoins",catcoins);
    localStorage.setItem("ccpm",ccpm)
    localStorage.setItem("boughtpicks",boughtpicks);
    localStorage.setItem("visitedplaces",JSON.stringify(visitedplaces))
    //set the catcoins element to be the amount of catcoins
    cc_el.innerHTML = "<img src='./assets/catcoin1.png' height='30px' style='vertical-align:middle'>" + numeral(catcoins).format('0.0a');
},100)
//load the pickaxe
pick_el.src = pick_src[activePick];
//load the ore
activePlace ? ore.src=ore_src[activePlace] : ore.src=ore_src["cave"];
//load the background
activePlace ? document.body.style.backgroundImage="url("+place_img[activePlace]+")" : document.body.style.backgroundImage="url("+place_img["cave"]+")";
visitedplaces[places.indexOf(activePlace)] ? console.log('you are in the cave'): visitedplaces[places.indexOf(activePlace)] = places[activePlace]   
visitedplaces[places.indexOf(activePlace)]=places[places.indexOf(activePlace)]

//since the baguette's scaling is wonky, and da pickaxe is of large size, change the size to fit the other pickaxes.
if(localStorage.getItem("activepick")==='baguette'){
    pick_el.style.height="128px";
    //just to clarify 
    console.log('%c pickaxe is baguette!!! wow!!!',"color:orange; font-family:sans-serif;");
} else {
        console.log('wow')
}
//set the spacebar to mine 
Mousetrap.bind('space',(e) =>{
    if(!e.repeat){
    catcoins +=ccpm;
    pick_el.style.animation = 'none';
    pick_el.offsetHeight;
    pick_el.style.animation = null;
    } else {
        return; 
    }
},'keydown')

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
    if(catcoins > pick_prices[pick] && !boughtpicks.includes(pick)){
    //you have less moolah
    catcoins -= pick_prices[pick];
    //render the pickaxe
    pick_el.src = pick_src[pick];
    //set da active pickaxe to the right active pickaxe and ya dah ya dah ydaafuywgefhf
    activePick=pick;
    //the pickaxe wants to be stronger 
    ccpm = ccperpick[pick];
    //you have bought the pickaxe
    boughtpicks[pick_id] = pick;
    } else if(boughtpicks.includes(pick)){
        //you have already bought this pick
        buy_btn.disabled = true;
    } else {
        return 'not enough money'
        }
    //since baguette has wonky scaling set it to correct size :)
    if(activePick ==='baguette'){
        pick_el.style.height="128px";
        //just to clarify 
        console.log('%c pickaxe is baguette!!! wow!!!',"color:orange; font-family:sans-serif;");
    }
}
function viewPick(e){
    dg_options.style.display = 'none';
    hide('shop-pick')
    dialog_lines["Mr. Loaf"][1] = "This is the "+pickaxes[e]+" Pickaxe, which costs "+numeral(pick_prices[pickaxes[e]]).format("0.0.a")+" catcoins.";
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
        dg_action.onclick = () => {hide('dialog')}
        hide('shop-pick');
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
            dg_action.innerText = "▶";
            dg_action.onclick = () => {hide('dialog')}
            
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
    shop_window.style.display="inline";
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
    travel_ctr.style.display = "block";
    trvl_place.innerText = activePlace[0].toUpperCase() + activePlace.slice(1);
    trvl_mg.value = activePlace;
    trvl_mgimg.src = minig_img[places[places.indexOf(activePlace)]];
    trvl_img.style.background = "url("+place_img[activePlace]+")";
    trvl_img.style.backgroundRepeat = "repeat";
    trvl_img.style.backgroundSize = "1000px 800px";
    
})
trvl_visit.addEventListener("click",() => {
    airport.style.display="block";
    airport.src='./assets/airport.jpg';
    pilotbob.style.display="block";
    pilotbob.src = "./assets/pilotbob-1.png"
    airport.hidden=false;
    if(window.innerHeight!==window.screen.height){
        pilotbob.style.top="30%"
    }
    setTimeout(() => {var dng = new Audio("./assets/ding.mp3");dng.volume=0.25;dng.play();
    dialog.style.display="flex";
    dialog_el.innerText = dialog_lines["Pilot Bob"][0];
    dg_person.innerText = "Pilot Bob";
    dg_action.innerText="▶";
    dialog_lines["Pilot Bob"][1] = "Today, we have a flight to "+places[places.indexOf(localStorage.getItem("activeplace"))+1].charAt(0).toUpperCase()+places[places.indexOf(localStorage.getItem("activeplace"))+1].slice(1)+"!";
    dg_action.onclick=() => {
        if(localStorage.getItem("visitedplaces").includes(places[0])){
        dialog_el.innerText=dialog_lines["Pilot Bob"][1];
        dg_action.onclick=() =>{
        dialog_el.innerText=dialog_lines["Pilot Bob"][2];
        dg_options.style.display="block";
        dg_action.innerText = "▲";
        o1.onclick=()=>{
            if(catcoins >= ticket_prc[places[places.indexOf(activePlace)+1]]){
            dialog_el.innerText=dialog_lines["Pilot Bob"][3];
            hide("options");
            dg_action.onclick = () => {
                dng.play()
                dialog_el.innerText=dialog_lines["Pilot Bob"][5];
                catcoins-=ticket_prc[places[places.indexOf(activePlace)+1]]
                dg_action.innerText = "▶";
                dg_action.onclick=()=>{var activePlace=places[places.indexOf(activePlace)+1];visitedplaces[places.indexOf(activePlace)]=places[places.indexOf(activePlace)];clearInterval(saveInterval);localStorage.setItem("activeplace",places[places.indexOf(activePlace)+1]);location.reload()}
                
            } 

        } else if(catcoins!==ticket_prc[places[places.indexOf(activePlace)+1]] | catcoins<ticket_prc[places[places.indexOf(activePlace)+1]]){
            console.log(ticket_prc[places[places.indexOf(activePlace)+1]]+" "+catcoins)
            hide("options");
            dialog_el.innerText="Sorry, but you can't buy a ticket with "+numeral(catcoins).format("0.0a")+" catcoins."
            dg_action.onclick = () => {
                dialog_el.innerText = "See you soon!";
                dg_action.onclick=()=>{hide("dialog");hide("airport");hide("trvl-menu");}
            }
        }
        }
           o2.onclick=()=>{
            dialog_el.innerText= "Alright, see you soon!";
            hide("options")
            dg_action.onclick=()=>{hide("airport");hide("dialog");hide("pilot");hide("options")}
            }
    }}}},1500);
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