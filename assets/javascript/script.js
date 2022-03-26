var rootEl = $('#root');

var welcomeTxt = document.querySelector('.lrgTitle')
var rules = document.querySelector('.intro-Rules')
var beginGame = document.querySelector('.start-btn')
var timeLeft = 5
var blank = document.querySelector('#blankSpace')
var timeDisplay = document.querySelector('.timerStart')
var quest = document.querySelector('.questions')
var testers = $('#test')
beginGame.addEventListener('click', function () {
    var timer = setInterval(function () {
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(timer)
        } else if (timeLeft === 0) {
            $(timeDisplay).text(timeLeft)
            timeLeft.text('')
            // timeDisplay.textcontent = timeLeft
            // timeLeft.textContent = " "
        } else (
            timeDisplay.textContent = timeLeft
        )
    }, 1000)
})

var pTest = $('<p>');
pTest.text('test');
testers.append(pTest);
