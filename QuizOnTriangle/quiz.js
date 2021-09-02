const formQuiz = document.forms[0];
const submitBtn = document.querySelector("#submit-btn");
const outputDiv = document.querySelector("#outputDiv");
const questionBox = document.querySelectorAll("#question-box");

const answers = ["Equilateral", "Median", "No", "Yes", "36", "10"];

let score = 0;

formQuiz.addEventListener('submit', (e) => {
    e.preventDefault();
  
    let i = 0;
    
  
  const userAnswer = new FormData(formQuiz);

  for (let value of userAnswer.values()) {
    if (value == answers[i]) {
      questionBox[i].style.backgroundColor = "skyblue"
      score = score + 1;
    }
    else{
        questionBox[i].style.backgroundColor = "lightYellow"
    }
    i++;
   
  }

  outputDiv.innerText = "Your score is " + score;
  submitBtn.style.display = "none";
})

