// const psQuiz = [
//     ['What is your favorite PS1 game?', 'RE2'],
//     ['What is your first PS1 game you played?', 'Crash Bandicoot'],
//     ['What is your favorite FF on PS1?', '9'],
//     ['How old were you when you got a PS1?', '8']
// ]

// let correct = [];
// let incorrect = [];
// let correctAnswers = 0;

// for ( let x = 0; x < psQuiz.length; x++ ) {
//     let questions = psQuiz[x][0];
//     let answers = psQuiz[x][1];
//     let response = prompt(questions);

//     if ( response === answers) {
//         correctAnswers++; 
//         correct.push(questions);
//     } else {
//         incorrect.push(questions);
//     }
// }

// function testScore(arr) {
//     items = ``;
//     for( let x = 0; x < arr.length; x++ ) {
//         items += `<li>${arr[x]}</li>`;
//     }
//     return items;
// }

// let result = `<h1>You got a total of ${correctAnswers} questions correct.</h1>`;

// document.querySelector('main').innerHTML = `${result}
//     <h2>Questions you got right!</h2>
//     <ol>
//         ${testScore(correct)}
//     </ol>
//     <h2>INCORRECT Questions!</h2>
//     <ol>
//         ${testScore(incorrect)}
//     </ol>
// `;

// Practice run #2

const reAsks = [
    ['What is your favorite character from RE1?', 'Chris'],
    ['What is your favorite character from RE2?', 'Leon'],
    ['What Nemesis remake very good?', 'It was, but too short!'],
    ['Favorite enemy from RE4?', 'Lake Monster']
]

let correct = [];
let incorrect = [];
let correctAnswers = 0;

for( let x = 0; x < reAsks.length; x++) {
    let questions = reAsks[x][0];
    let answers = reAsks[x][1];
    let response = prompt(questions);

    if(response === answers) {
        correctAnswers++;
        correct.push(questions);
    } else {
        incorrect.push(questions);
    }
}

function listQuestions(arr) {
    items = ``;
    for( let x = 0; x < arr.length; x++) {
        items += `<li>${arr[x]}</li>`;
    }
    return items;
}

document.querySelector('h1').innerHTML = `Looks like you got a total of ${correctAnswers} of the questions correct!`
document.querySelector('main').innerHTML = `
    <h2><strong>Correct Questions</strong></h2>
    <ol>
        ${listQuestions(correct)}
    </ol>
    <h2><strong>InCorrect Questions</strong></h2>
    <ol>
        ${listQuestions(incorrect)}
    </ol>
`
