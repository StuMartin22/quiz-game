// creates root element 
var rootEl = $('#root');

// beginning of variable definitions
// E.g.line defines variable bigTitle as .mainTitle class from HTML
var sectionOne = $('#sectionOne')
var titleActual = $('<h1>')
var gameRulesParagraph = $('<p>')
var cardTimer = $('.card-timer')
// var bigTitle = $('.mainTitle') 
// var gameRules = $('.rules') 
var beginGame = $('.start-btn')
var timeLeft = 5
var timeDisplay = $('.timerStart')
var quest = $('.questions')

var questionSection = $('#questionSection')
var questions = $('#questions')
var answers = $('#answers')
var buttons = $('#buttons')

var hideList = false
var questionIndex = 0

var gameOver = $('#gameOver')
var continueBtn = $('#continueBtn')
var highScorePage = $('#highScorePage')
var beginningBtn = $('#beginning')
var initials = $('.initials')
// end of variable definitions

// The following begin appending children elements to parent element 
// line 1 appends child element buttonList to parent element buttons
sectionOne.append(titleActual);
sectionOne.append(gameRulesParagraph);
sectionOne.append(beginGame);
// end of appending elements list

// changes text within variable
titleActual.text('TEST YOUR KNOWLEDGE');
gameRulesParagraph.text("Rules: This is a timed trivia game! You are going to see a series of questions which will have multiple choice answers. Select the answer you think is correct! If you answer correctly, congratulations, you can move on to the next question! But if you answer incorrectly.. you will lose time off the clock! Good luck!");
// end of changes to text of variable

//toggles card-timer and questionSection to be toggled off when page loads
cardTimer.toggle();
questionSection.toggle();
gameOver.toggle();
highScorePage.toggle();
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

beginGame.click(startGame)
// End of beginGame 

// game starts and elements show themselves on click of start game button.
beginGame.click(screenFlip)

continueBtn.on('click', function () {
    gameOver.toggle();
    highScorePage.toggle();
    // $(promptUser)
});

beginningBtn.on('click', function () {
    sectionOne.toggle();
    highScorePage.toggle();
    location.reload();
});

// end of elements showing selves on click start.

function startGame() {
    var timer = setInterval(function () {
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(timer);
        } else if (timeLeft === 0) {
            timeDisplay.text(timeLeft);
            cardTimer.toggle();
            questionSection.toggle();
            gameOver.toggle();
        } else timeDisplay.text(timeLeft);
    }, 1000)
};

function screenFlip() {
    if (hideList) {
        questionSection.toggle();
        cardTimer.toggle();
        sectionOne.toggle();
        hideList = !hideList;
    } else {
        questionSection.toggle();
        cardTimer.toggle();
        sectionOne.toggle();
        hideList = !hideList;
    }
};

var initialsInput = $('#initialsForm')
var topTen = []
let currentPlayer;

continueBtn.on('click', function (event) {
    event.preventDefault();
    console.log(initialsInput);
    var initials = initialsInput.val()
    console.log(initials);
    topTen.push(initials);
    localStorage.setItem('initialsInput', JSON.stringify(topTen));
    console.log(topTen);
    renderMessage();
    console.log(topTen);
});

function renderMessage(topTen) {
    var scoreSheet = JSON.parse(localStorage.getItem("initialsInput"));
    console.log(scoreSheet);
    for (var i = 0; i < scoreSheet.length; i++) {
        console.log(scoreSheet[i]);
        var liEl = $('<li class="scores">')
        liEl.text(scoreSheet[i])
        $('ul').append(liEl);
    }
}


// var endGame = function () {
//     if 
// }
// questionIndex

// function nextQuestion(questionIndex) {
//     $(questions).text= ("")
//     $(answers).text= ("")
//     for (var i = 0; i < gameQuestions.length; i++) {
//         var Q = (gameQuestions[Index].question)
//         var answerList= (gameQuestions[Index].answers)
//         gameQuestions.textContent = Q
//     }
//     answerList.each(function(ans) {
//         var answerButton= $('<button>'); 
//         $(answerButton).style.position = "inline";
//         $(answerButton).css(style.left = "49%");
//         $(answerButton).css(style.transform = "translateX(-49%)");
//             $(answerButton).addclass("answer-btn")
//             $(answerButton).text = ans
//             $(userChoice).append(answerButton)
//             $(answerButton).on('click', function () {
//                 //console.log(answerButton.textContent)
//                 ansCheck(answerButton.text)
//             })
//     })
// }
// let answer;
// var scoreKeeper= [];
// var anAnswer = anAnswer || 0;
// //function to check for correct/incorrect answers in the object and to deduct time for incorrect selections
// //function also displays messages on correct/incorrect 
// var checker= $('<h2>')
// function ansCheck(answer) {
//     var scoreBoard= document.getElementById('scoreInfo')
//         if ($(answer) === $(questions)[questionIndex].correct) {
//             anAnswer++;
//             $(scoreBoard).text= anAnswer + " out of 5 correct answers";
//             $(checker).text= "Great work! Your selection is correct."
//         }
//             else {
//                 console.log("wrong")
//                 $(checker).text= "Sorry! Your selection is incorrect. Please refresh the browser to try again."
//                 $(timeLeft)= timeLeft-15;
//             }
//             $(questionSection).append(checker)
//             questionIndex++;
//             next(questionIndex)
//             console.log(questionIndex)
// }
// $(beginGame).on("click", function nextQuestion () {
//     console.log(gameQuestions[questionIndex])
//     questionIndex++;
//     console.log(gameQuestions[questionIndex])
//     if (questionIndex===gameQuestions.length) {
//         console.log('true')
//     } else {
//         nextQuestion();
//     }
//     });
    // nextQuestion();


// link buttons to answers
//if correct move on(){}
//else deduct time (){}
// questionIndex++ 
// nextquestion();
// call quizover/endquiz function to populate score page

//TODO:

//connect questions and answers to appropriate elements
//function where if answer is correct move on
//function where if answer is incorrect reduce time

//if questions run out or if time runs out show end game page
