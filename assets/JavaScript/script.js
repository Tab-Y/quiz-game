// Array for keeping questions and answer organized
var questions = [
    {
        question: "What is a boolean?",
        choices: ["A true or false statement", "A group of words stored together", "another answer", "clearly a wrong answer"],
        answer: "A true or false statement",
    },
    {
        question: "Question 2",
        choices: ["A", "B", "C", "D"],
        answer: "B",
    },
    {
        question: "Question 3",
        choices: ["A", "B", "C", "D"],
        answer: "C",
    },
    {
        question: "Question 4",
        choices: ["A", "B", "C", "D"],
        answer: "D",
    },
    {
        question: "Question 5",
        choices: ["A", "B", "C", "D"],
        answer: "A",
    },
];


// scores for the board (Position in array)(user input Name)(score)
// array needs to sort by score from highest to lowest
// time needs to count down and track as score - start at 120 seconds (120000ms)
// score drops 100 points per second (120 * 100 = 12000 score max)
// quiz container changes during quiz
// prompts on screen 5-10 questions
// need array for localstorage




// var container = document.querySelector(".container");

// container.addEventListener("click", function(event) {
//   var element = event.target;

//   // TODO: Complete function
//   if (element.matches(".box")) {
//     var state = element.getAttribute("data-state");
    
//     if (state === "hidden") {
//       element.textContent = element.dataset.number
//       element.dataset.state = "visible";
      
      
//     } else {
//       element.textContent = ""
//       element.dataset.state = "hidden";

//     }
//   }
// });

var timerEl = document.getElementById('time');
var quizEl = document.getElementById('quiz');
var correctEl = document.querySelector(".correct");
var wrongEl = document.querySelector(".wrong");
var quizSiteEl = document.querySelector(".quizSite");
var instructionHeadEl = document.querySelector(".instructionHead");
var instructionTextEl = document.querySelector(".instructionText");
var headerEl = document.querySelector(".header");
var questionsEl = document.querySelector("#questions");
var questionsBoxEl = document.querySelector('.questionsBox');
var submitButtonEl = document.querySelector(".submitButton");
var answerButtonEl = document.querySelector(".answer-buttons");
// dynamicly coded in var answerButtonEl = document.querySelector(".answersButton")
// runs function to check if answer is right on click
// displays on screen if correct or wrong
// sets delay of 500 to show next question

function generateQuestion(){
    
    for (var i = 0; i < questions.length; i++) {
        // make the question
        questionsEl.textContent = questions[i].question;
            // make buttons
            var makeButtonEl = document.createElement('button');
            makeButtonEl.classList.add('answers');
            makeButtonEl.textContent = questions[i].choices;
            answerButtonEl.appendChild(makeButtonEl);

    }
    }
    // compare the answer
//     for (var i = 0; i < questions.length; i++) {
//         questionsEl.textContent = questions[i].question;

  
//         questions[i].choices.forEach(choice => {
//             if (questions.choices === questions.answer) {
//                 correct();
//             } else {
//                 wrong();
//             }
//             button.addEventListener('click', selectAnswer)
//         })
//        }


// function nextQuestion(){
//     questionsEl.textContent = questions.question;
//     questions.choices.forEach(choices => {
//         const button = document.createElement('button')
//     });

// }


function gameOver() {
    alert("Game over!")
    console.log("game over")
}

// function saveScore() {
//     var userInfo = {
//         userName: userNameInput.value,
//         userScore: timeLeft.value,
//     };
//     localStorage.setItem("userHighscore", JSON.stringify(highscore));
// }

// function correct() {
//     // flash correct
//     nextQuestion();
// }

// function wrong () {
//     // flash wrong
//     timeLeft + -10;
//     nextQuestion();

// }
// working from here down
function countdown() {
    console.log("works 1")
    var timeLeft = 60;
    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = "Time remaining " + timeLeft;

    if (timeLeft === 0) {
        clearInterval(timeInterval);
        timeLeft = '';
        gameOver();
    }
    }, 1000);
} 

function startGame() {
    console.log("started");
    quizSiteEl.classList.add("hide");
    // remove hide class to questions
    questionsBoxEl.classList.remove("hide");
    countdown();
    generateQuestion();
};
// working from here up


// function checkAnswer(){
//     if (questions.choices === questions.answer){
//         correct();
//     } else {
//         wrong();
//     }
// };

// submitButton.addEventListener("click", function(event){
//     event.preventDefault();
//     var highscore = {
//         userName: userNameInput.value,
//         userScore: timeRemaining.value,
//     };
//     localStorage.setItem("userHighscore", JSON.stringify(highscore));
// });





quizEl.addEventListener("click", startGame);
// nextButtonEl.addEventListener("click", checkAnswer);
// submitButtonEl.addEventListener("click", saveScore);
// correctEl.addEventListener("click", correct)
// wrongEl.addEventListener("click", wrong)
