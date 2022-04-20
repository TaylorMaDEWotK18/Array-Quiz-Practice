// //Through this practice session I want to enter a specific element from the array and have it display a specific message for that selection

// const fondMemGames = ['Star Fox', 'Super Mario 3', 'RE2', 'The Bouncer', 'Final Fantasy 9', 'Gears of War']

// let message;
// const request = prompt('What is a game that brings a lot of nostalgia to you from your childhood?');

// if (request === fondMemGames[2]) {
//     message = `Resident Evil has to be one of the greatest series of all time! And RE2 takes GOLD!`;
// } else if (request === fondMemGames[3]) {
//     message = `Wow... How amazing was ${request}.. The first time bootin up that PS2, playing for hours and hours.. Amazing`
// } else if (fondMemGames.includes(request)) {
//     message = `Man ${request} was amazing! Great game!`;
// } else {
//     message = `Nope, ${request} wasn't cool enough!`;
// }

// document.querySelector('h1').innerHTML = message;

// Next attempt I'm going to build similar program only using a for loop to cycle through

const fondMemGames = ['Star Fox', 'Super Mario World', 'Super Mario 3', 'RE2', 'Star Craft', 'Half-Life', 'Final Fantasy 9', 'Gears of War']

let message;

for ( let x = 0; x < fondMemGames.includes(response); x++) {
    response = prompt('What game brings back nostalgia from your childhood?');
    if (response === fondMemGames[1]) {
        message = `Wow... That Christmas Eve with ${response} was one of the best memories ever.. Thanks Dad`;
    } else if (response === fondMemGames[6]) {
        message = `SHEESH! You remember telling yourself that lesson of hard work mowin the lawn to make sure you could get that ${response}?`;
    } else if (response === fondMemGames[4]) {
        message = `Man do you remember the countless hours playing ${response} with Hugh... So freaking good!`;
    } else if (fondMemGames.includes(response)) {
        message = `Amazing choice! ${response} is SUCH a good choice!`;
    } else {
        message = `UWWWW... BOO to ${response}. That game is LAME!`;
    }
} 

document.querySelector('h1').innerHTML = message;