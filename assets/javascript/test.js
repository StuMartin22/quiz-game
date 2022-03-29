// var tester = ['blue', 'pink', 'orange']
// var colorIndex = 0;

// function nextcolor () {
//     console.log(tester[colorIndex])

//     colorIndex++; 
//     // console.log(tester[colorIndex])
//     if (colorIndex===tester.length) {
//         console.log('stop')
//     } else {
//         nextcolor();
//     }


// }

// nextcolor();

localStorage.setItem('Bob', 'Hello, my name is Bob');
console.log(localStorage.getItem('Bob'));

//practical purposes:
//Element.textContent = localStorage.getItem('Bob')

// Local Storage only works with Strings!!
localStorage.setItem('Bob', JSON.stringify('Hello, my name is Bob'));
console.log(JSON.parse(localStorage.getItem('Bob')));

//localStorage.setItem("highScore", $('input').val())

var arrayOfScores = [];

var newScore = {
    initials: initials,
    score: finalScore
}

arrayOfScores.push(newScore);


localStorage.setItem('AllHighScores', JSON.stringify(arrayOfScores));

//score:time -- displayed time as score
// intitials grabbed from input from page
// var collected scores = json.parse(localStorage.getItem(']'))