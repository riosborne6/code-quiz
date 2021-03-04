var startButton = document.getElementById("startbutton");
var ticker = document.getElementById("timer");
var timeLeft = 20;
var timerElement;
var score = 0;
var quizEl = document.getElementById("quiz");
var submitScore = document.createElement("initials");
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
  // if (event.target.innerText === questions[currentquestions].answer) {
  //   score++;
  //   console.log(currentquestions);
  //   currentquestions++;
  // } else {
  //   timeLeft = timeLeft - 5;
  //   console.log(timeLeft);
  //   currentquestions++;
  // }
});
buttonElement2.addEventListener("click", function (event) {
  submitAnswer(event.target.innerText);
  console.log(event.target.innerText);
  // if (event.target.innerText === questions[currentquestions].answer) {
  //   score++;
  //   console.log(currentquestions);
  //   currentquestions++;
  // } else {
  //   timeLeft = timeLeft - 5;
  //   console.log(timeLeft);
  //   currentquestions++;
  // }
});
buttonElement3.addEventListener("click", function (event) {
  submitAnswer(event.target.innerText);
  console.log(event.target.innerText);
  // if (event.target.innerText === questions[currentquestions].answer) {
  //   score++;
  //   console.log(currentquestions);
  //   currentquestions++;
  // } else {
  //   timeLeft = timeLeft - 5;
  //   console.log(timeLeft);
  //   currentquestions++;
  // }
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
  score++;
  console.log(currentquestions, questions.length - 1);
  if (currentquestions > questions.length - 1) {
    time = 0;
    clearQuestions();
    finishQuiz();
    return;
  }
  console.log(answer);
  displayQuestion();
}
function clearQuestions() {
  quizEl.removeChild(questionElement);
  quizEl.removeChild(buttonElement1);
  quizEl.removeChild(buttonElement2);
  quizEl.removeChild(buttonElement3);
}
function finishQuiz() {
  var h1El = document.createElement("h1");
  h1El.textContent = score;
  submitScore.setAttribute("initials");
  localStorage.setItem("initials");
  //input element. Give it an ID. Create a submit button. Give submit button and onclick event - set attribute.
  //submit button should should set local storage
  quizEl.appendChild(h1El);
}
function showHighScores() {
  document.getElementById("initials").innerHTML = localStorage.getItem(
    "initials"
  );
  // get local storage.
  // set the text content from the get local storage (html elements).
}
