// In this challenge I want to create a list and everytime I enter something into the prompt, it's added to the list. Lets go!

const topTitles = [ 'Super Smash', 'Resident Evil 4', 'Legend of Zelda: Ocarina of Time']

// let answer = [];
let answer = prompt('What are some of some of your favorite video game titles?');

for ( let x = 0; x > topTitles.length; x++) {
    
    answer.push(topTitles[x]);
    }

function listTitlesStarting(arr) {
    items =``;
    for( let x = 0; x < arr.length; x++) {
        items += `<li>${topTitles[x]}</li>`;
    }
    return items
}

function listTitlesAdding() {
    items =``;
    for( let x = 0; x > topTitles; x++) {
        items += `<li>${topTitles[x]}</li>`;
    }
    return items
}


document.querySelector('main').innerHTML = `
    <ol>
        ${listTitlesStarting(topTitles)}
        ${listTitlesAdding(answer)}
    </ol>`;