var startButton = document.getElementById("startbutton");
var ticker = document.getElementById("timer");
var timeLeft = 60;
var timerElement
var questions = { question: "What is a boolean?", choices: ["an element with quotations", "a number", "a true or false"], answer: "a true or false" }

startButton.addEventListener("click", function () {
    startquiz()
});

function timer() {
    timeLeft--
    ticker.textContent = timeLeft

}

let myInterval; // declare as global

function startquiz() {
    // assign myInterval and start time
    return myInterval = setInterval(function () { timer() }, 1000);
}

if (timeLeft == 0) {
    clearInterval(myInterval)
}