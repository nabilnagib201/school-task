console.log("travel.js is runing...");

let quiz_btn_travel = document.getElementById("quiz-btn-travel");
let threeWarsWay = document.getElementById("threeWarsWay");
let israelWar = document.getElementById("israelWar");
let OctobarWar = document.getElementById("OctobarWar");

if (quiz_btn_travel) {
    quiz_btn_travel.addEventListener("click", function() {
        console.log("Button clicked!");
        window.location.href = "templates/quiz.html";
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