
var timeBreak;
function timerCount() {
    
    var currentTime = document.getElementById("timer");
    currentTime.innerHTML = Number(currentTime.innerHTML) + 1;
    //setTimeout(timerCount, 1000);
    console.log("done");
    timeBreak = setTimeout(function() {timerCount(); }, 1000);
}

function stopTimer() {
    clearTimeout(timeBreak);
}

window.onload = timerCount;