var questionIndex = 0
var gameQuestions = [
    {
        question: "the question",
        answers: ['answer 1', 'answer 2', 'answer 3'],
        correct: 'answer 1'
    },
    {
        question: "the question",
        answers: ['answer 1', 'answer 2', 'answer 3'],
        correct: 'answer 1',
    },
    {
        question: "question 3",
        answers: ['answer 1', 'answer 2','answer 3'],
        correct: 'answer 3',
    },
    {
        question: 'question 4',
        answers: ['answer 1', 'answer 2', 'answer 3'],
        correct: 'answer 2',
    },
    {
        question: 'question 5',
        answers: ['answer 1', 'answer 2', 'answer 3'],
        correct: 'answer 3',
    },
]

var initialsInput = $('#initialsForm')
var topTen = []
var currentPlayer;

$(topTen).each(function (topTen) {
    var continueBtn = $('<button>');
    $(continueBtn).addclass("continueBtn");
    $(continueBtn).text(currentPlayer).push(topTen);
    $(continueBtn).append(continueBtn);
    $(currentPlayer).append(continueBtn);
    $(continueBtn).on('click', function() {
        renderMessage(continueBtn)
    })
});

$(continueBtn).on('click', function (event) {
    event.preventDefault();
    console.log(initialsInput);
    currentPlayer = {
        initials: $(topTen).val()
    };
    $(topTen).push(currentPlayer);
    localStorage.setItem('currentPlayer', JSON.stringify(topTen));
    renderMessage();
    console.log(currentPlayer);
});

function renderMessage(topTen) {
    var scoreSheet = JSON.parse(localStorage.getItem("currentPlayer"));
    for (var i=0; i < scoreSheet.length; i++) {
        console.log(scoreSheet[currentPlayer]);
        everything += playerListFromStorage[currentPlayer];
    }
    var everything ="";
    
}