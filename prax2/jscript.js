

//AI
function airock() { 
    var scene = document.getElementById("computer");
    scene.style.backgroundImage = 'url("rock.png")';
    scene.style.backgroundRepeat = "no-repeat";
    scene.style.backgroundPosition = "center";
}

function aipaper() {
    var scene = document.getElementById("computer");
    scene.style.backgroundImage = 'url("paper.png")';
    scene.style.backgroundRepeat = "no-repeat";
    scene.style.backgroundPosition = "center";
}

function aiscissors() {
    var scene = document.getElementById("computer");
    scene.style.backgroundImage = 'url("scissors.png")';
    scene.style.backgroundRepeat = "no-repeat";
    scene.style.backgroundPosition = "center";
}

function changeScore(scoreElement) {
    if (scoreElement == "player") {
         var currentScore = document.getElementById("playerScore");
        currentScore.innerHTML = Number(currentScore.innerHTML) + 1;
    } else if (scoreElement == "draw") {
        var currentScore = document.getElementById("drawScore");
        currentScore.innerHTML = Number(currentScore.innerHTML) + 1;
    } else if (scoreElement == "computer") {
        var currentScore = document.getElementById("aiScore");
        currentScore.innerHTML = Number(currentScore.innerHTML) + 1;
    }
}

function aiplay(playerNumber) {
    var nr = Math.floor(Math.random() * 3) + 1;
    if (nr == 1) {
        airock();
    } else if (nr == 2) {
        aipaper();
    } else {
        aiscissors();
    }
    if (playerNumber == 1 && nr == 1) {
        changeScore("draw");
    } else if (playerNumber == 1 && nr == 2) {
        changeScore("computer");
    } else if (playerNumber == 1 && nr == 3) {
        changeScore("player");
    } else if (playerNumber == 2 && nr == 1) {
        changeScore("player");
    } else if (playerNumber == 2 && nr == 2) {
        changeScore("draw");
    } else if (playerNumber == 2 && nr == 3) {
        changeScore("computer");
    } else if (playerNumber == 3 && nr == 1) {
        changeScore("computer");
    } else if (playerNumber == 3 && nr == 2) {
        changeScore("player");
    } else if (playerNumber == 3 && nr == 3) {
        changeScore("draw");
    }
}

//PLAYER
function playrock() { 
    var scene = document.getElementById("player");
    scene.style.backgroundImage = 'url("rock.png")';
    scene.style.backgroundRepeat = "no-repeat";
    scene.style.backgroundPosition = "center";
    aiplay(1);
}

function playpaper() {
    var scene = document.getElementById("player");
    scene.style.backgroundImage = 'url("paper.png")';
    scene.style.backgroundRepeat = "no-repeat";
    scene.style.backgroundPosition = "center";
    aiplay(2);
}

function playscissors() {
    var scene = document.getElementById("player");
    scene.style.backgroundImage = 'url("scissors.png")';
    scene.style.backgroundRepeat = "no-repeat";
    scene.style.backgroundPosition = "center";
    aiplay(3);
}


