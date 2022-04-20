//Through this practice session I want to enter a specific element from the array and have it display a specific message for that selection

const fondMemGames = ['Star Fox', 'Super Mario 3', 'RE2', 'The Bouncer', 'Final Fantasy 9', 'Gears of War']

let message;
const request = prompt('What is a game that brings a lot of nostalgia to you from your childhood?');

if(fondMemGames.includes(request)) {
    message = `Man ${request} was amazing! Great game!`;
} else {
    message = `Nope, ${request} wasn't cool enough!`;
}

document.querySelector('h1').innerHTML = message;