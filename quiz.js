var formQuiz = document.querySelector("#quiz-form");
var submitBtn = document.querySelector("#submit-btn");
var outputDiv = document.querySelector("#outputDiv");

var answers = ["Equilateral", "Median", "No", "Yes", "36", "10"];

submitBtn.addEventListener("click", clickHandler);

function clickHandler() {
  
    var i = 0;
  var score = 0;

  var userAnswer = new FormData(formQuiz);

  for (const value of userAnswer.values()) {
    if (value === answers[i]) {
      score = score + 1;
    }
    i++;
   
  }

  outputDiv.innerText = "Your score is " + score;
}

