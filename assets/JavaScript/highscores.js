// code got storing highscores in local storage
// primary code for high-scores page
var highscoresList = document.querySelector("#theList");
var index = 0;
var userName = [];
var userScore = [];
var highscores = [];
// render highscores
// displays scores in elements
// clear highscores
// clears local storage to empty display



function highscoreDisplay() {
    
};

function renderScores() {

    for (var i = 0; i<highscores.length; i++) {
        var liEl = document.createElement('li');
        liEl.setAttribute('data-index', [i]);
        liEl.classList.add('high-scores');
        liEl.textContent = highscores[i].userName;
        console.log(highscores)
        highscoresList.appendChild(liEl);
    }
    
    
};

function start() {
    var userHighscore = JSON.parse(localStorage.getItem("userHighscore"));
    highscores.push(userHighscore);
    renderScores();
}

start();