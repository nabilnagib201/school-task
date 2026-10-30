console.log("travel.js is runing...");

let arabWar = document.getElementById("arabWar");
let threeWarsWay = document.getElementById("threeWarsWay");
let israelWar = document.getElementById("israelWar");
let OctobarWar = document.getElementById("OctobarWar");

if (arabWar) {
    arabWar.addEventListener("click", function() {
        console.log("Button clicked!");
        window.location.href = "templates/arabWar.html";
    });
}

if (threeWarsWay) {
    threeWarsWay.addEventListener("click", function() {
        console.log("Button clicked!");
        window.location.href = "templates/threeWarsWay.html";
    });
}

if (israelWar) {
    israelWar.addEventListener("click", function() {
        console.log("Button clicked!");
        window.location.href = "templates/israelWar.html";
    });
}

if (OctobarWar) {
    OctobarWar.addEventListener("click", function() {
        console.log("Button clicked!");
        window.location.href = "templates/seven_october.html";
    });
}