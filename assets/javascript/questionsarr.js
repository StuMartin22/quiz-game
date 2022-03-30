var questionIndex = 0
var gameQuestions = [
    {
        question: "the question 1",
        answers: ['A', 'B', 'C'],
        correct: 'A'
    },
    {
        question: "the question 2",
        answers: ['A', 'B', 'C'],
        correct: 'A',
    },
    {
        question: "question 3",
        answers: ['A', 'B', 'C'],
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
let answerList;

// var initialsInput = $('#initialsForm')
// var topTen = []
// let currentPlayer; (RECENT)

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

// continueBtn.on('click', function (event) {
//     event.preventDefault();
//     console.log(initialsInput);
//     var initials = initialsInput.val()
//     console.log(initials); (RECENT)
    // currentPlayer = {
    // initials: $(initialsInput).text()
    // };
//     topTen.push(initials);(RECENT)
//     localStorage.setItem('initialsInput', JSON.stringify(topTen));
//     console.log(topTen);
//     renderMessage();
//     console.log(topTen);
// }); (RECENT)

// function renderMessage(topTen) {
//     var scoreSheet = JSON.parse(localStorage.getItem("initialsInput"));
//     console.log(scoreSheet);
//     for (var i = 0; i < scoreSheet.length; i++) {
//         console.log(scoreSheet[i]);
//         var liEl = $('<li class="scores">')
//         liEl.text(scoreSheet[i])
//         $('ul').append(liEl);
//     }
// } (RECENT)