// creates root element 
var rootEl = $('#root'); 

// beginning of variable definitions
//E.g.line defines variable bigTitle as .mainTitle class from HTML
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
var questionSection = $('#questionSection')
var hideList = false
// end of variable definitions

// The following begin appending children elements to parent element 
// line 1 appends child element buttonList to parent element buttons
$(buttons).append(buttonList); 
$(buttonList).append(buttonOne); 
$(buttonList).append(buttonTwo);
$(buttonList).append(buttonThree);
$(buttonList).append(buttonFour);

$(sectionOne).append(titleActual);
$(sectionOne).append(gameRulesParagraph);
$(sectionOne).append(beginGame); 
// end of appending elements list

// changes text within variable
titleActual.text('TEST YOUR KNOWLEDGE'); 
gameRulesParagraph.text("Rules: This is a timed trivia game! You are going to see a series of questions which will have multiple choice answers. Select the answer you think is correct! If you answer correctly, congratulations, you can move on to the next question! But if you answer incorrectly.. you will lose time off the clock! Good luck!") 
// end of changes to text of variable

// THE FOLLOWING DESCRIBES BEGIN GAME ON CLICK BELOW
// begins game on button click / click starts function
// timer variable defined within function, begins timer
// takes time left and deducts time --;
// if timeLeft is less than 0 then we will clear the timer to prevent it from counting into the negatives
// timedisplay will show time left
// timedisplay text disappears when timer hits 0
// if there is time on the clock, then the display will show that instead
// the function counts down every 1 second

$(beginGame).click(function () { 
    var timer = setInterval(function () { 
        timeLeft--; 
        if (timeLeft < 0) { 
            clearInterval(timer)
        } else if (timeLeft === 0) { 
            $(timeDisplay).text(timeLeft) 
            $(timeDisplay).text('') 
        } else $(timeDisplay).text(timeLeft) 
} ,1000) 
});
// End of beginGame 

// $(beginGame).on('click', function () {
//     if (hideList) {
//         $(questionSection).css('display','none');
//         hideList = !hideList;
//     } else 
//         { $(questionSection).css('display','block')
//         hideList = !hideList;
//         }
//     });

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
