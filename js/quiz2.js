// // const head = `What are some Stephen King Books you are looking for!?`;
// // document.querySelector('h1').innerHTML = head;

// const darkTower = ['The Gunslinger', 'The Drawing of the Three', 'The Wastelands', 'Wizard and Glass', 'Wolves of the Calla', 'Song of Susannah', 'The Dark Tower']

// const inStockKing = ['Carrie', 'Skeleton Crew', 'The Shining', 'Cujo', `${darkTower}`, 'It', 'The Stand', 'The Raft']

// const ask = prompt('What King book were you looking for?');
// let message = ``;
// // So the goal here is to search whether the system is in stock and have the page display the answer and what we searched for. We'll use the 'includes' method and a conditional statement

// if (inStockKing.includes(ask)) {
//     message = `Yes! We have ${ask} in stock!`;
// } else {
//     message = `No, we dont have ${ask} anylonger. :(`;
// }

// // Changing up the original if cond. and a making it an 'if else' cond and a Logical NOT Operator so that if null is entered it wil display specific message

// document.querySelector('h1').innerHTML = message;

// console.log(inStockKing);

//Lets repeat and practice

// const smashStars = ['Fox', 'Mario', 'Samus', 'Ike', 'Link', 'Captian Falcon', 'Falco']
// const heading = 'Welcome to Smash Central! Please select your favorite Smash character and see if available!';
// document.querySelector('h1').innerHTML = heading;
// let message;
// const ask = prompt('What Smash character would you like to play as?');


// if (smashStars.includes(ask)) {
//     message = `Yes! ${ask} is available! We'll get your game loaded with some New Challegers!`;
// } else {
//     message = `Oh I'm sorry. Looks like ${ask} has already been taken. Please select again`
// }


// document.querySelector('main').innerHTML = `<h2>${message}</h2>`;


//Pracitce run #3

const reStars = ['Leon', 'Claire', 'Chris', 'Jill', 'Barry', 'Rebecca']

let message;
const ask = prompt('What is your favorite Resident Evil character?');

if(reStars.includes(ask)) {
    message = `Sick! ${ask} has to be the GOAT of RE!`;
} else {
    message = `EWWW sorry, ${ask} is pretty lame. Keep shootin! (Lol, pun intended)`
}

document.querySelector('main').innerHTML = `<h1>${message}</h1>`;