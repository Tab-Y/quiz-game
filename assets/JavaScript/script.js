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


function gameOver() {
    console.log("game over")
}
function correct() {

}

function wrong () {
    timeLeft - 10;

}

function countdown() {
    console.log("works 1")
    var timeLeft = 60;
    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = "Time remaining " + timeLeft;

    if (timeLeft === 0) {
        clearInterval(timeInterval);
        gameOver();
    }
    }, 1000);
} 

function startGame() {
    console.log("works 1");

    var timeLeft = 60;
    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = "Time remaining " + timeLeft;

    if (timeLeft === 0) {
        clearInterval(timeInterval);
        gameOver();
    }
    }, 1000);
    console.log("working");
 
}







quizEl.addEventListener("click", startGame);
// correctEl.addEventListener("click", correct)
// wrongEl.addEventListener("click", wrong)
