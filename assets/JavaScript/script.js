// Array for keeping questions and answer organized
var questions = [
    {
        question: "What is a boolean?",
        choices: ["A true or false statement", "A group of words stored together", "A word to substitute a function", "A series of commands"],
        answer: 0,
    },
    {
        question: "What is the git command to get an update for a remote repo while in your local repo?",
        choices: ["git update origin main", "git pull origin main", " git update", "git push origin main"],
        answer: 1,
    },
    {
        question: "What is the command to get a random whole number",
        choices: ["Math.random()", "math.floor()", "Math.floor(Math.random()*1)", "random-number"],
        answer: 2,
    },
    {
        question: "How do we store an object in an array?",
        choices: ['array = [a:"ans", b:"notAns", c:"cat", d:"dog"]', 'array = "a,b,c,d"', 'array = [a][b][c]', 'array = a,b,c,d'],
        answer: 0,
    },
    {
        question: "What does CSS stand for?",
        choices: ["Cascading Stlye Sheets", "Creative Style Solutions", "Cascading Syntax System", "Colorful Screen System"],
        answer: 0,
    },
];

// targets different parts of document
var bodyEl = document.querySelector('body')
var timerEl = document.getElementById('time');
var quizEl = document.getElementById('quiz');
var quizSiteEl = document.querySelector(".quizSite");
var questionsEl = document.querySelector("#questions");
var questionsBoxEl = document.querySelector('.questionsBox');
var submitButtonEl = document.querySelector(".submitButton");
var answerButtonEl = document.querySelector(".answer-buttons");
var endScreenEl = document.querySelector('.endScreen');
var answerEl = document.querySelector(".answers");
var scoreEl = document.getElementById("score");
var resetEl = document.getElementById('resetButton');
var index = 0;
var penalty = [];
var score = [];
var finalScore = (score - penalty);
var highscore = [];
var userName = [];
let currentQuestion = questions[index];

// slight delay to show right or wrong before loading the next question
// checks if there are more question in array
function setNextQuestion() {
    index++;
    if (index >= questions.length) {

        setTimeout(function () {
            getFinalScore();
            endScreen();
        }, 500)
    } else {
        setTimeout(function () {
            generateQuestion();
        }, 500);
    }
}
// puts the question on the document
function generateQuestion() {
    let currentQuestion = questions[index]
    for (var i = 0; i <= 3; i++) {
        // make the question
        questionsEl.textContent = currentQuestion.question;
        // make buttons
        var makeButtonEl = document.createElement('button');
        makeButtonEl.setAttribute('data-index', [i]);
        makeButtonEl.classList.add('answers');
        makeButtonEl.classList.add('btn');
        makeButtonEl.textContent = currentQuestion.choices[i];
        answerButtonEl.appendChild(makeButtonEl);
    }
}
// shows the users score and asks for input to save highscore
function endScreen() {
    endScreenEl.classList.remove("hide");
    var makeH2El = document.createElement('h2');
    makeH2El.textContent = "Congratulations!";
    endScreenEl.appendChild(makeH2El);
    setTimeout(function () {
        timerEl.textContent = ''
        scoreEl.textContent = "You scored : " + finalScore;
    }, 300);
}
// flashes green and moves to next question
function correct() {
    setTimeout(function () {
        questionsEl.textContent = '';
        while (answerButtonEl.firstChild) {
            answerButtonEl.removeChild(answerButtonEl.firstChild)
        };
        questionsBoxEl.classList.remove("correct")
    }, 500);
    setNextQuestion();
}
// flashes red and stays on same question
function wrong() {
    lessTime();
    setTimeout(function () {
        questionsBoxEl.classList.remove("wrong")
    }, 500);
}

// adds time penalty to lower score
function lessTime() {
    penalty++;
    penalty++;
    penalty++;
    penalty++;
    penalty++;

}
// starts timer on screen and waits for either time to run out, or for all answers to be given correct
function countdown() {
    var timeLeft = 60;
    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = "Time remaining " + timeLeft;
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            timeLeft = '';
            questionsEl.textContent = '';
            while (answerButtonEl.firstChild) {
                answerButtonEl.removeChild(answerButtonEl.firstChild)
            };
            endScreen();
        };
        if (index >= questions.length) {
            score.push(timeLeft);
            clearInterval(timeInterval);
        }
    }, 1000);
}
// calculates score with penalties
// sometimes doesn't run correctly
// sometimes either only takes penalty, or neither
// need to debug - not sure how
function getFinalScore() {
    finalScore = +score - +penalty;
}
// begins game
function startGame() {
    quizSiteEl.classList.add("hide");
    // remove hide class to questions
    questionsBoxEl.classList.remove("hide");
    countdown();
    generateQuestion();
};
// saves user input and final score in local storage to be used in highscore page

function saveScore() {
    var userNameInput = document.getElementById('userName');
    var highscore = {
        userName: userNameInput.value,
        finalScore,
    }
    var userHighscore = JSON.parse(localStorage.getItem('userHighscore')) || [];
    userHighscore.push(highscore);
    localStorage.setItem('userHighscore', JSON.stringify(userHighscore));

    resetEl.classList.remove('hide');
    // test.push(scoreHolder);
    // console.log(test)
}
// on click of answer buttons
answerButtonEl.addEventListener('click', function (event) {
    event.stopPropagation();
    var element = event.target;
    // makes sure buttons were pressed
    if (element.matches("button") === true) {
        let currentQuestion = questions[index];
        // compares selection to answer
        if (element.getAttribute('data-index') == currentQuestion.answer) {
            questionsBoxEl.classList.add("correct")
            correct();
        } else {
            questionsBoxEl.classList.add("wrong")
            wrong();
        }
    } else {

    }
});

quizEl.addEventListener("click", startGame);
// targets submit button to save input - presses enter on keyboard doesn't work
submitButtonEl.addEventListener("click", saveScore);
// refreshes page to setup quiz again
resetEl.addEventListener("click", function () {
    document.location.reload();
});