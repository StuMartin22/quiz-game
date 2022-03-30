var questionIndex = 0
var gameQuestions = [
    {
        question: "the question",
        answers: ['A', 'B', 'C'],
        correct: 'A'
    },
    {
        question: "the question",
        answers: ['A', 'B', 'C'],
        correct: 'A',
    },
    {
        question: "question 3",
        answers: ['A', 'B','C'],
        correct: 'C',
    },
    {
        question: 'question 4',
        answers: ['A', 'B', 'C'],
        correct: 'B',
    },
    {
        question: 'question 5',
        answers: ['A', 'B', 'C'],
        correct: 'C',
    },
]

var initialsInput = $('#initialsForm') 
var topTen = [] 
let currentPlayer; 

// $(topTen).each(function (topTen) {
//     var continueBtn = $('<button>');
//     $(continueBtn).addclass("continueBtn");
//     $(continueBtn).text(currentPlayer).push(topTen);
//     $(continueBtn).append(continueBtn);
//     $(currentPlayer).append(continueBtn);
//     $(continueBtn).on('click', function() {
//         renderMessage(continueBtn)
//     })
// });

$(continueBtn).on('click', function (event) {
    event.preventDefault();
    console.log(initialsInput);
    currentPlayer = {
        initials: $(initialsInput).val()
    };
    $(topTen).push(currentPlayer);
    localStorage.setItem('initialsInput', JSON.stringify(topTen));
    renderMessage();
    console.log(topTen);
});

function renderMessage(topTen) {
    var scoreSheet = JSON.parse(localStorage.getItem("initialsInput"));
    for (var i=0; i < scoreSheet.length; i++) {
        console.log(scoreSheet[currentPlayer]);
        everything += playerListFromStorage[currentPlayer];
    }
    var everything ="";
    $('#userForm').innerHTML = everything;
}