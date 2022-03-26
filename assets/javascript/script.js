var rootEl = $('#root');

var bigTitle = document.querySelector('.mainTitle')
var gameRules = document.querySelector('.rules')
var beginGame = document.querySelector('.start-btn')
var timeLeft = 5
var blank = document.querySelector('#blankSpace')
var timeDisplay = document.querySelector('.timerStart')
var quest = document.querySelector('.questions')
var testers = $('#test')
var sectionOne = $('#sectionOne')

var titleActual = $('<h1>')
var gameRulesParagraph = $('<p>')

sectionOne.append(titleActual);
sectionOne.append(gameRulesParagraph);

titleActual.text('TEST YOUR KNOWLEDGE');
gameRulesParagraph.text("Rules: This is a timed trivia game! You are going to see a series of questions which will have multiple choice answers. Select the answer you think is correct! If you answer correctly, congratulations, you can move on to the next question! But if you answer incorrectly.. you will lose time off the clock! Good luck!")

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
