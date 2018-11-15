$(document).ready(function () {
    
    var score = 0;
    var wins = 0;
    var losses = 0;
    var randomNumber = 19;

    var crystal1 = Math.floor(Math.random() * 13) + 1;
    var crystal2 = Math.floor(Math.random() * 13) + 1;
    var crystal3 = Math.floor(Math.random() * 13) + 1;
    var crystal4 = Math.floor(Math.random() * 13) + 1;

    randomNumber = Math.floor(Math.random() * 101) + 19;

    

    // console.log(crystal1);
    // console.log(crystal2);
    // console.log(crystal3);
    // console.log(crystal4);

    $("#button1").on("click", function () {
        score += crystal1;
        console.log(score);
        if (score === randomNumber) {
            alert("User won!");
            wins++;
            resetGame();
            $("#win-text").text(wins);
        } else if (score > randomNumber) {
            // alert("User lost...");
            $("#lose-text").text(losses);
            losses++;
            resetGame();
        } $("#score").text(score);

    })
    $("#button2").on("click", function () {
        score += crystal2;
        console.log(score);
        if (score === randomNumber) {
            alert("User won!");
            wins++;
            resetGame();
            $("#win-text").text(wins);
        } else if (score > randomNumber) {
            // alert("User lost...");
            $("#lose-text").text(losses);
            losses++;
            resetGame();
        } $("#score").text(score);

    })
    $("#button3").on("click", function () {
        score += crystal3;
        console.log(score);
        if (score === randomNumber) {
            alert("User won!");
            wins++;
            resetGame();
            $("#win-text").text(wins);
        } else if (score > randomNumber) {
            // alert("User lost...");
            $("#lose-text").text(losses);
            losses++;
            resetGame();
        } $("#score").text(score);

    })
    $("#button4").on("click", function () {
        score += crystal4;
        console.log(score);
        if (score === randomNumber) {
            alert("User won!");
            wins++;
            resetGame();
            $("#win-text").text(wins);
        } else if (score > randomNumber) {
            // alert("User lost...");
            $("#lose-text").text(losses);
            losses++;
            resetGame();
        } $("#score").text(score);

    })
    $("#randomNumber").text(randomNumber);



function resetGame() {
    score = 0;
    randomNumber = Math.floor(Math.random() * 101) + 19;
    crystal1 = Math.floor(Math.random() * 13) + 1;
    crystal2 = Math.floor(Math.random() * 13) + 1;
    crystal3 = Math.floor(Math.random() * 13) + 1;
    crystal4 = Math.floor(Math.random() * 13) + 1;
    $("#randomNumber").text(randomNumber);


}

});


































