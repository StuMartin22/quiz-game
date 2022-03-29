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

$(beginGame).on("click", function nextQuestion () {
    // console.log(gameQuestions[questionIndex])
    questionIndex++;
    // console.log(gameQuestions[questionIndex])
    if (questionIndex===gameQuestions.length) {
        console.log('true')
    } else {
        nextQuestion();
    }
    });

// nextQuestion();