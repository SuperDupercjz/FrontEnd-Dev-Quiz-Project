var topScores = JSON.parse(localStorage.getItem("topScores"));
topScores.sort(function(scoreA, scoreB) {
    if (scoreA.score < scoreB.score) {return 1; }
    if (scoreA.score > scoreB.score) { return -1; }
    if (scoreA.score === scoreB.score) { return  0 };
});

var scoreContainer = document.getElementById("topScors");
for (var i = 0; i < 5; i++) {
    // create the <li> for a score
    var li = document.createElement("li")
    li.innerText = topScores[i].name + ": ( " + topScores[i].score + " ) ";
    scoreContainer.appendChild(li)
}

