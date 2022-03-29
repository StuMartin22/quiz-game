// creates root element 
var rootEl = $('#root'); 

// beginning of variable definitions
// E.g.line defines variable bigTitle as .mainTitle class from HTML
var bigTitle = $('.mainTitle') 
var gameRules = $('.rules') 
var beginGame = $('.start-btn')
var timeLeft = 5
var timeDisplay = $('.timerStart')
var quest = $('.questions')
// var testers = $('#test')
var sectionOne = $('#sectionOne')
var titleActual = $('<h1>')
var gameRulesParagraph = $('<p>')
var answers = $('#answers')
var questions = $('#questions')
// var buttons = $('#buttons')
// var buttonList = $('<ol>')
// var buttonOne = $('<li>')
// var buttonTwo = $('<li>')
// var buttonThree = $('<li>')
// var buttonFour = $('<li>') 
var questionSection = $('#questionSection')
var hideList = false
var questionIndex = 0
// end of variable definitions

// The following begin appending children elements to parent element 
// line 1 appends child element buttonList to parent element buttons
// $(buttons).append(buttonList); 
// $(buttonList).append(buttonOne); 
// $(buttonList).append(buttonTwo);
// $(buttonList).append(buttonThree);
// $(buttonList).append(buttonFour);

$(sectionOne).append(titleActual);
$(sectionOne).append(gameRulesParagraph);
$(sectionOne).append(beginGame); 
// end of appending elements list

// changes text within variable
titleActual.text('TEST YOUR KNOWLEDGE'); 
gameRulesParagraph.text("Rules: This is a timed trivia game! You are going to see a series of questions which will have multiple choice answers. Select the answer you think is correct! If you answer correctly, congratulations, you can move on to the next question! But if you answer incorrectly.. you will lose time off the clock! Good luck!") 
// end of changes to text of variable

//toggles card-timer and questionSection to be toggled off when page loads
$(".card-timer").toggle()
$(questionSection).toggle()
//end of toggling off

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
            clearInterval(timer);
        } else if (timeLeft === 0) { 
            $(timeDisplay).text(timeLeft);
            // $(timeDisplay).text('') 
            $(".card-timer").text('');
            $(questionSection).text('');
            alert('GAME OVER')
        } else $(timeDisplay).text(timeLeft);
} ,1000) 
});
// End of beginGame 

// game starts and elements show themselves on click of start game button.
$(beginGame).on('click', function () {
    if (hideList) {
        $(questionSection).toggle();
        $(".card-timer").toggle();
        $("#sectionOne").toggle();
        hideList = !hideList;
    } else 
        { $(questionSection).toggle();
        $(".card-timer").toggle();
        $("#sectionOne").toggle();
        hideList = !hideList;
        }
    });
// end of elements showing selves on click start.

// questionIndex


// var pTest = $('<p>');
// pTest.text('test');
// testers.append(pTest);

// link buttons to answers
//if correct move on(){}
//else deduct time (){}
// questionIndex++ 
// nextquestion();
// call quizover/endquiz function to populate score page

