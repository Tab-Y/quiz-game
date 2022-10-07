// code got storing highscores in local storage
// primary code for high-scores page
var highscoresList = document.querySelector("#theList");
var index = 0;
var userName = [];
var userScore = [];
var highscores = [];
var userHighscore = [];
// render highscores
// displays scores in elements
// clear highscores
// clears local storage to empty display
var test = [
    'userName: "tony, finalScore:34',
    'userName: "gale, finalScore:55',
]

function init () {
    var storedScores = JSON.parse(localStorage.getItem('userHighscore'));
    if (storedScores !== null) {
        highscores = storedScores;
    }
    renderScores();
}



function highscoreDisplay() {
    
};

function renderScores() {
    highscoresList.textContent = '';

    for (var i = 0; i<10; i++) {
        var liEl = document.createElement('li');
        liEl.setAttribute('data-index', i);
        liEl.classList.add('high-scores');
        liEl.textContent = userHighscore[0].userName;
        highscoresList.appendChild(liEl);
    }
    
    
};

function start() {
    var userHighscore = JSON.parse(localStorage.getItem("userHighscore"));
    highscores.push(userHighscore);
    console.log(userHighscore[0].userName)
    renderScores();
}

start();