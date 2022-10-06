// code got storing highscores in local storage
// primary code for high-scores page
var highscoresList = document.querySelector("#theList")
// render highscores
// displays scores in elements
// clear highscores
// clears local storage to empty display



function highscoreDisplay() {
    highscoresRecall = JSON.parse(localStorage.getItem("userHighscore"));
    userName.textContent = highscoresRecall.userName;
    userScore.textContent = highscoresRecall.userScore;
};

function renderScores() {


    for (var i = 0; i < 10; i++) {
        var score = highscores[i];

        var li = document.createElement("li");
        li.textContent = userName, score;
        li.setAttribute("data-index", i);

        
        highscoresList.appendChild(li);

        // create list element
        // put user name and their score into list
        // append list element
    }
};


renderScores();