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


function renderScores() {
    var userHighscore = JSON.parse(localStorage.getItem("userHighscore"));
    userHighscore.sort(function (a, b) {
        return b.finalScore - a.finalScore;
    }
    );
    highscoresList.textContent = '';

    for (var i = 0; i < userHighscore.length; i++) {
        var liEl = document.createElement('li');
        liEl.setAttribute('data-index', i);
        liEl.classList.add('user-name');
        liEl.textContent = userHighscore[i].userName;
        var pEl = document.createElement('p');
        pEl.classList.add('high-scores');
        pEl.textContent = userHighscore[i].finalScore;
        liEl.appendChild(pEl);
        highscoresList.appendChild(liEl);
    }
};



renderScores();