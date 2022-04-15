// const head = `What are some Stephen King Books you are looking for!?`;
// document.querySelector('h1').innerHTML = head;

const darkTower = ['The Gunslinger', 'The Drawing of the Three', 'The Wastelands', 'Wizard and Glass', 'Wolves of the Calla', 'Song of Susannah', 'The Dark Tower']

const inStockKing = ['Carrie', 'Skeleton Crew', 'The Shining', 'Cujo', `${darkTower}`, 'It', 'The Stand', 'The Raft']

const ask = prompt('What King book were you looking for?');
let message = ``;
// So the goal here is to search whether the system is in stock and have the page display the answer and what we searched for. We'll use the 'includes' method and a conditional statement

if (inStockKing.includes(ask)) {
    message = `Yes! We have ${ask} in stock!`;
} else {
    message = `No, we dont have ${ask} anylonger. :(`;
}

// Changing up the original if cond. and a making it an 'if else' cond and a Logical NOT Operator so that if null is entered it wil display specific message

document.querySelector('h1').innerHTML = message;

console.log(inStockKing);