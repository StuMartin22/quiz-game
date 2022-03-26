var rootEl = $('#root'); // creates root element 

var bigTitle = $('.mainTitle') // beginning of variable definitions
var gameRules = $('.rules') //E.g.line defines variable bigTitle as .mainTitle class from HTML
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
var buttonFour = $('<li>') // end of variable definitions

$(buttons).append(buttonList); // begin appending children elements to parent element 
$(buttonList).append(buttonOne); // line 1 appends child element buttonList to parent element buttons
$(buttonList).append(buttonTwo);
$(buttonList).append(buttonThree);
$(buttonList).append(buttonFour);

$(sectionOne).append(titleActual);
$(sectionOne).append(gameRulesParagraph);
$(sectionOne).append(beginGame); // end of appending elements list

titleActual.text('TEST YOUR KNOWLEDGE'); // changes text within variable
gameRulesParagraph.text("Rules: This is a timed trivia game! You are going to see a series of questions which will have multiple choice answers. Select the answer you think is correct! If you answer correctly, congratulations, you can move on to the next question! But if you answer incorrectly.. you will lose time off the clock! Good luck!") //changes text of variable

$(beginGame).click(function () { // begins game on button click - button click starts function
    var timer = setInterval(function () { // variable timer defined in function and begins an interval
        timeLeft--; // takes timeLeft and deducts time
        if (timeLeft < 0) { // if timeLeft is less than 0 then we will clear the timer to prevent it from counting into the negatives
            clearInterval(timer)
        } else if (timeLeft === 0) { // if time is 0 then it will clear the time display.
            $(timeDisplay).text(timeLeft) // timedisplay will show time left
            $(timeDisplay).text('') // timedisplay text set to 0 -- when timer hits 0 the clock disappears.
        } else $(timeDisplay).text(timeLeft) // if there is time on the clock then it will display that.
} ,1000) //function is counting down every 1 second.
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
