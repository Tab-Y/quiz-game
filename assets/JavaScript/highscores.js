// code got storing highscores in local storage
// primary code for high-scores page
var highscoresList = document.querySelector("#theList");
var userName = [];
var userScore = [];
var highscores = [];
// render highscores
// displays scores in elements
// clear highscores
// clears local storage to empty display



function highscoreDisplay() {
    let highscoresRecall = JSON.parse(localStorage.getItem("userHighscore"));
    console.log(highscoresRecall);
    for (var i = 0; i < highscoresRecall.length; i++) {
        console.log("hello");
        userName.textContent = highscoresRecall.userName;
        console.log(userName);
        userScore.textContent = highscoresRecall.userScore;
        console.log(userScore);
    };
    console.log("else")
};

function renderScores() {
    highscoreDisplay();

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