var rootEl = $('#root');

var bigTitle = $('.mainTitle')
var gameRules = $('.rules')
var beginGame = $('.start-btn')
var timeLeft = 5
var timeDisplay = $('.timerStart')
var quest = $('.questions')
var testers = $('#test')
var sectionOne = $('#sectionOne')

var titleActual = $('<h1>')
var gameRulesParagraph = $('<p>')

var answers = $('#answers')
var questions = $('#questions')
var buttons = $('#buttons')

var buttonList = $('<ol>')
var buttonOne = $('<li>')
var buttonTwo = $('<li>')
var buttonThree = $('<li>')
var buttonFour = $('<li>')

$(sectionOne).append(titleActual);
$(sectionOne).append(gameRulesParagraph);
$(sectionOne).append(beginGame);

titleActual.text('TEST YOUR KNOWLEDGE');
gameRulesParagraph.text("Rules: This is a timed trivia game! You are going to see a series of questions which will have multiple choice answers. Select the answer you think is correct! If you answer correctly, congratulations, you can move on to the next question! But if you answer incorrectly.. you will lose time off the clock! Good luck!")

$(beginGame).click(function () {
    var timer = setInterval(function () {
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(timer)
        } else if (timeLeft === 0) {
            $(timeDisplay).text(timeLeft)
            $(timeLeft).text(timeLeft)
        } else $(timeDisplay).text(timeLeft)
} ,1000)
});


// beginGame.addEventListener('click', function () {
//     var timer = setInterval(function () {
//         timeLeft--;
//         if (timeLeft < 0) {
//             clearInterval(timer)
//         } else if (timeLeft === 0) {
//             $(timeDisplay).text(timeLeft)
//             timeLeft.text('')
//             // timeDisplay.textcontent = timeLeft
//             // timeLeft.textContent = " "
//         } else (
//             timeDisplay.textContent = timeLeft
//         )
//     }, 1000)
// })

// var pTest = $('<p>');
// pTest.text('test');
// testers.append(pTest);
