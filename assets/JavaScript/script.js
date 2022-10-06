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
var scoreEl = document.getElementById("score")
var index = 0;
var penalty = [];
var finalScore = [];
let currentQuestion = questions[index];

// dynamicly coded in var answerButtonEl = document.querySelector(".answersButton")


function setNextQuestion() {
    index++;
    if (index >= questions.length) {
        
        setTimeout(function () {
            endScreen();
        }, 500)
    } else {
        setTimeout(function () {

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
    setTimeout(function() {
        timerEl.textContent = ''
        scoreEl.textContent = "You scored : " + finalScore;
        console.log(finalScore);
    },200);
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

    setNextQuestion();

}

function wrong() {
    lessTime();
    
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
// not working
function lessTime() {
    penalty++;
    penalty++;
    penalty++;
    penalty++;
    penalty++;
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
        };
        if (index >= questions.length) {
            finalScore.push(Math.floor(timeLeft));

            clearInterval(timeInterval);

        
        }
    }, 1000);
}

function startGame() {
    quizSiteEl.classList.add("hide");
    // remove hide class to questions
    questionsBoxEl.classList.remove("hide");
    countdown();
    generateQuestion();
};
// working from here up

answerButtonEl.addEventListener('click', function (event) {

    console.log(event.target)
    event.stopPropagation();
    var element = event.target;
    if (element.matches("button") === true) {
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
    } else {
        
    }
});


quizEl.addEventListener("click", startGame);

submitButtonEl.addEventListener("click", function (event) {
    event.preventDefault();
    var userNameInput = document.getElementById('userName');
    console.log(userNameInput.value);
    highscore = {
        highScoreName: userNameInput.value,
        highScoreValue: finalScore.value,
    }
    var resetEl = document.getElementById('resetButton');
    resetEl.classList.remove('hide');

    localStorage.setItem("highscore", JSON.stringify(highscore));
   

    
}
);

// TODO::
// deduction of time on wrong
// update time remaining
//  //  //  need to get highscore side working
// ref 26 for highscores