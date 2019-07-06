'use strict';
document.addEventListener('DOMContentLoaded', () => {

    function addZero(number) {
        return number < 10 ? '0' + number : number;
    }

    function printTime(hours, minutes, seconds) {
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;
    }

    function getShowTime(){
        updatedTime = new Date().getTime();
        if (savedTime){
            differenceTime = (updatedTime - startTime) + savedTime;
        } else {
            differenceTime =  updatedTime - startTime;
        }

        hours = Math.floor((differenceTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((differenceTime % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((differenceTime % (1000 * 60)) / 1000);

        printTime(addZero(hours), addZero(minutes), addZero(seconds));
    }

    function startWatch() {
        if (!timerRunning) {
            startTime = new Date().getTime();
            tInterval = setInterval(getShowTime, 1);

            timerPaused = false;
            timerRunning = true;
        }
    }

    function stopWatch() {
        clearInterval(tInterval);
    }

    function pauseWatch() {
        if (!differenceTime){
           return;
        } else if (!timerPaused) {
            clearInterval(tInterval);
            savedTime = differenceTime;
            timerPaused = true;
            timerRunning = false;
        } else {
            startWatch();
        }
    }

    function resetWatch() {
        clearInterval(tInterval);
        savedTime = 0;
        differenceTime = 0;
        timerPaused = false;
        timerRunning = false;

        hours = 0;
        minutes = 0;
        seconds = 0;

        printTime(addZero(hours), addZero(minutes), addZero(seconds));
    }

    var hours = 0;
    var minutes = 0;
    var seconds = 0;
    var startTime = null;
    var updatedTime = null;
    var savedTime = null;
    var differenceTime = null;
    var tInterval = null;
    var timerRunning = false;
    var timerPaused = false;
    var startTimerButton = document.querySelector('.start-timer');
    var stopTimerButton = document.querySelector('.stop-timer');
    var pauseTimerButton = document.querySelector('.pause-timer');
    var resetTimerButton = document.querySelector('.reset-timer');


    startTimerButton.addEventListener('click', startWatch);
    stopTimerButton.addEventListener('click', stopWatch);
    pauseTimerButton.addEventListener('click', pauseWatch);
    resetTimerButton.addEventListener('click', resetWatch);


});