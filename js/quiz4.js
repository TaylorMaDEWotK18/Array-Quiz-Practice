// In this challenge I want to create a list and everytime I enter something into the prompt, it's added to the list. Lets go!

const topTitles = [ 'Super Smash', 'Resident Evil 4', 'Legend of Zelda: Ocarina of Time']

// let answer = [];

// for ( let x = 0; x > topTitles.length; x++) {
//     let ask = prompt('What are some of some of your favorite video game titles?');
//     answer.push(topTitles[x]);
//     }

function listTitlesStarting(arr) {
    items =``;
    for( let x = 0; x < arr.length; x++) {
        items += `${topTitles[x]}`;
    }
    return items
}

document.querySelector('main').innerHTML = `
    <ol>
        ${listTitlesStarting(topTitles)}
    </ol>`;