var level = "Level 1 (coal)"
var cash = 0;
var addthing = document.getElementById("addthing");
const element = document.getElementById("money");
setInterval(function() {cash += 5; element.innerHTML = "$" + cash;}, 1050);
setInterval(function() {addthing.innerHTML = "+5"}, 1050);


setInterval(function() {addthing.innerHTML = "&nbsp;"}, 1030.9);
document.getElementById("level").innerHTML = level;
