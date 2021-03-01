var startButton = document.getElementById("startbutton");
var ticker = document.getElementById("timer");
var timeLeft = 20;
var timerElement;
var score = 0;
var questions = [
  {
    question: "What is a boolean?",
    choices: ["an element with quotations", "a number", "a true or false"],
    answer: "a true or false",
  },
  {
    question: "what is most used language?",
    choices: ["Javascript", "Python", "Ruby"],
    answer: "Javascript",
  },
];
var currentquestions = 0;
var questionElement = document.getElementById("questions");
var buttonElement1 = document.getElementById("answers1");
var buttonElement2 = document.getElementById("answers2");
var buttonElement3 = document.getElementById("answers3");
buttonElement1.addEventListener("click", function (event) {
  console.log(event.target.innerText);
  submitAnswer(event.target.innerText);
  //if (event.target.innerText === questions[currentquestions].answer) {
  //     score++;
  //     console.log(currentquestions);
  //     currentquestions++;
  //   } else {
  //     timeLeft = timeLeft - 5;
  //     console.log(timeLeft);
  //   }
});
buttonElement2.addEventListener("click", function (event) {
  submitAnswer(event.target.innerText);
  //   console.log(event.target.innerText);
  //   if (event.target.innerText === questions[currentquestions].answer) {
  //     score++;
  //     console.log(currentquestions);
  //     currentquestions++;
  //   } else {
  //     timeLeft = timeLeft - 5;
  //     console.log(timeLeft);
  //   }
});
buttonElement3.addEventListener("click", function (event) {
  submitAnswer(event.target.innerText);
  //   console.log(event.target.innerText);
  //   if (event.target.innerText === questions[currentquestions].answer) {
  //     score++;
  //     console.log(currentquestions);
  //     currentquestions++;
  //   }
});

startButton.addEventListener("click", function () {
  startquiz();
});

function timer() {
  timeLeft--;
  ticker.textContent = timeLeft;
  if (timeLeft == 0) {
    clearInterval(myInterval);
  }
}

let myInterval; // declare as global

function startquiz() {
  console.log(questions[currentquestions].choices);
  console.log(questions[currentquestions].answer);
  console.log(questions[currentquestions].question);
  displayQuestion();
  return (myInterval = setInterval(function () {
    timer();
  }, 1000));
}
function displayQuestion() {
  questionElement.textContent = questions[currentquestions].question;
  buttonElement1.textContent = questions[currentquestions].choices[0];
  buttonElement2.textContent = questions[currentquestions].choices[1];
  buttonElement3.textContent = questions[currentquestions].choices[2];
}

function submitAnswer(answer) {
  console.log(answer);
  console.log(currentquestions);
  if (answer !== questions[currentquestions].answer) {
    timeLeft -= 5;
  }
  currentquestions++;
  if (currentquestions >= questions.length - 1) {
    //go to display high score
    return;
  }
  displayQuestion();
  console.log(answer);
}
// put the question on the page
// on click answer
// grade
// reassign current question to the next one
