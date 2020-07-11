var min = 0;
var sec = 0;
var milisec = 0;
var interval;

var minHEad = document.getElementById('Minute');
var secHEad = document.getElementById('Seconds');
var miliHEad = document.getElementById('Miliseconds');


function timer() {
    milisec++
    miliHEad.innerHTML = milisec
    if (milisec >= 100) {
        sec++
        secHEad.innerHTML = sec;
        milisec = 0;

    }
    else if (sec >= 60) {
        min++
        minHEad.innerHTML = min;
        sec = 0;

    }
}
function start() {
    interval = setInterval(timer, 10);
}

function stop() {
    clearInterval(interval);
}
function reset() {
    min = 0;
    sec = 0;
    milisec = 0;
    minHEad.innerHTML = min;
    secHEad.innerHTML = sec;
    miliHEad.innerHTML = milisec;
    stop()
}


