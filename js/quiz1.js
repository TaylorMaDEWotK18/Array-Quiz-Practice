const psQuiz = [
    ['What is your favorite PS1 game?', 'RE2'],
    ['What is your first PS1 game you played?', 'Crash Bandicoot'],
    ['What is your favorite FF on PS1?', '9'],
    ['How old were you when you got a PS1?', '8']
]

let correct = [];
let incorrect = [];
let correctAnswers = 0;

for ( let x = 0; x < psQuiz.length; x++ ) {
    let questions = psQuiz[x][0];
    let answers = psQuiz[x][1];
    let response = prompt(questions);

    if ( response === answers) {
        correctAnswers++; 
    }
}

let result = `<h1>You got a total of ${correctAnswers} questions correct.</h1>`;

document.querySelector('main').innerHTML = result;