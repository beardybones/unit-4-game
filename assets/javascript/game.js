$(document).ready(function () {
    
    var crystal1 = Math.floor(Math.random() * 13) + 1;
    var crystal2 = Math.floor(Math.random() * 13) + 1;
    var crystal3 = Math.floor(Math.random() * 13) + 1;
    var crystal4 = Math.floor(Math.random() * 13) + 1;

    var counter = Math.floor(Math.random() * 101) + 19;

    var score = 0

    console.log(crystal1);
    console.log(crystal2);
    console.log(crystal3);
    console.log(crystal4);

    $("#button1").on("click", function () {
        score += crystal1;
        console.log(score);

    })
    $("#button2").on("click", function () {
        score += crystal2;
        console.log(score);

    })
    $("#button3").on("click", function () {
        score += crystal3;
        console.log(score);

    })
    $("#button4").on("click", function () {
        score += crystal4;
        console.log(score);

    })
    

$("#counter").text(counter);

$("#wins").text("Wins:")

$("#losses").text("Losses:")
























});


































