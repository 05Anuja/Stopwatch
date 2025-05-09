let timer = document.querySelector(".timer");
let stopBtn = document.getElementById("stop");
let startBtn = document.getElementById("start");
let resetBtn = document.getElementById("reset");

let msecs = 0;
let secs = 0;
let mins = 0;
let timerId = null;

// startBtn.addEventListener('click', function () {
//     if (timerId !== null) {
//         clearInterval(timerId);
//     }
//     timerId = setInterval(startTimer, 10);
// });

function startBtnFun() {
    if (timerId !== null) {
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
}

// stopBtn.addEventListener('click', function() {
//     clearInterval(timerId);
// });

function stopBtnFun() {
    clearInterval(timerId);
}

// resetBtn.addEventListener('click', function() {
//     clearInterval(timerId);
//     msecs = 0;
//     secs = 0;
//     mins = 0;
//     timer.innerHTML = `00 : 00 : 00`
// });

function resetBtnFun() {
    clearInterval(timerId);
    msecs = 0;
    secs = 0;
    mins = 0;
    timer.innerHTML = `00 : 00 : 00`;
}

function startTimer() {
    msecs ++;
    if (msecs === 100) {
        msecs = 0;
        secs ++;
        if (secs === 60) {
            secs = 0;
            mins += 1;
        }
    }

    let msecString = msecs < 10 ? `0${msecs}` : msecs;
    let secString = secs < 10 ? `0${secs}` : secs;
    let minString = mins < 10 ? `0${mins}` : mins;

    timer.innerHTML = `${minString} : ${secString} : ${msecString}`;
}