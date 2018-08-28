
$(document).ready(function() {


var wins = 0;
var losses = 0;

var score = 0;

var randoTarget = Math.floor(Math.random()*101) + 19;

var redGem = Math.floor(Math.random() * 11) + 1;
var blueGem = Math.floor(Math.random() * 11) + 1;
var yellowGem = Math.floor(Math.random() * 11) + 1;
var greenGem = Math.floor(Math.random() * 11) + 1;


$("#red-gem").on("click", function() {
    score += redGem;
    logic ();

})

$("#blue-gem").on("click", function () {
    score += blueGem;
    logic ();
})

$("#yellow-gem").on("click", function() {
    score += yellowGem;
    logic();
})

$("#green-gem").on("click", function() {
    score += greenGem;
    logic();
})


var reset = function() {

    score = 0;
    randoTarget = Math.floor(Math.random()*101) + 19;

    redGem = Math.floor(Math.random() * 11) + 1;
    blueGem = Math.floor(Math.random() * 11) + 1;
    yellowGem = Math.floor(Math.random() * 11) + 1;
    greenGem = Math.floor(Math.random() * 11) + 1;

    $("#random-number").text(randoTarget);
    $("#score").text("Your total score is: " + score)
}

var logic = function() {
    
    $("#score").text("Your total score is: " + score)
    
    if (score === randoTarget) {
        wins++;
        alert("You win!")
        $("#wins").text(wins);
        reset();

    } else if (score > randoTarget) {
        losses++;
        alert("You lose!")
        $("#losses").text(losses);
        reset();
    }
}

$("#random-number").text(randoTarget);




});

