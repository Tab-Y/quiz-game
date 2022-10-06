// Array for keeping questions and answer organized
var questions = [
    {
        question: "What is a boolean?",
        choices: ["A true or false statement", "A group of words stored together", "another answer", "clearly a wrong answer"],
        answer: 0,
    },
    {
        question: "Question 2",
        choices: ["A", "B", "C", "D"],
        answer: 1,
    },
    {
        question: "Question 3",
        choices: ["A", "B", "C", "D"],
        answer: 2,
    },
    {
        question: "Question 4",
        choices: ["A", "B", "C", "D"],
        answer: 3,
    },
    {
        question: "Question 5",
        choices: ["A", "B", "C", "D"],
        answer: 0,
    },
];


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
var index = 0;
var timeLeft = [];
let currentQuestion = questions[index];
// dynamicly coded in var answerButtonEl = document.querySelector(".answersButton")

function setNextQuestion() {
    index++;
    if (index >= questions.length) {
        console.log("done");
        endScreen();
    } else {
        setTimeout(function () {
            console.log(questions[index]);
            console.log(currentQuestion);
            generateQuestion();
        }, 500);
    }
}

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
function endScreen() {
    endScreenEl.classList.remove("hide");
    var makeH2El = document.createElement('h2');
    makeH2El.textContent = "Congratulations!";
    endScreenEl.appendChild(makeH2El);

    // stop clock and log timeleft
    // create input form
    // save form locally
    console.log("Almost done")
}

function correct() {
    console.log("correct");
    setTimeout(function () {
        questionsEl.textContent = '';
        while (answerButtonEl.firstChild) {
            answerButtonEl.removeChild(answerButtonEl.firstChild)
        };
        questionsBoxEl.classList.remove("correct")
    }, 500);
    console.log(index);
    console.log(currentQuestion);
    setNextQuestion();
    
}

function wrong() {
    console.log('wrong')
    lessTime();
    timerEl.textContent = "Time remaining " + timeLeft;
    setTimeout(function () {
        questionsEl.textContent = '';
        while (answerButtonEl.firstChild) {
            answerButtonEl.removeChild(answerButtonEl.firstChild)
        };
        questionsBoxEl.classList.remove("wrong")
    }, 500);
    setNextQuestion();
}
// working from here down
function gameOver() {
    console.log("game over")
}
function lessTime() {
    let timeLeft = [] - 10;
    console.log(timeLeft)
}

function countdown() {
    console.log("works 1");
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

answerButtonEl.addEventListener('click', function (event) {
    event.stopPropagation();
    var element = event.target;
    let currentQuestion = questions[index];
    console.log(element.getAttribute('data-index'));
    console.log(currentQuestion.answer);
    if (element.getAttribute('data-index') == currentQuestion.answer) {
        questionsBoxEl.classList.add("correct")
        // display correct thing
        correct();
    } else {
        questionsBoxEl.classList.add("wrong")
        wrong();
        // display wrong thing
    }
});

quizEl.addEventListener("click", startGame);

submitButtonEl.addEventListener("click", function(event) {
    var userNameInput = document.querySelector('#userName').value;
    
    var highscore = {
        userName: userNameInput,
        userScore: timeLeft,
    };
    localStorage.setItem("userHighscore", JSON.stringify(highscore));
}
);