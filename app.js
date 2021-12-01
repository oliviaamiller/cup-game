// import functions and grab DOM elements
const cupOne = document.getElementById('cup-one');
const cupTwo = document.getElementById('cup-two');
const cupThree = document.getElementById('cup-three');
const buttonOne = document.getElementById('button-one');
const buttonTwo = document.getElementById('button-two');
const buttonThree = document.getElementById('button-three');
const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');

// let state

let wins = 0;
let total = 0;

function resetImages() {
    cupOne.src = './assets/cup.png';
    cupTwo.src = './assets/cup.png';
    cupThree.src = './assets/cup.png';
}

function gameData() {
    winsEl.textContent = wins;
    lossesEl.textContent = total - wins;
    totalEl.textContent = total;

}

// set event listeners 
buttonOne.addEventListener('click', () => {
    resetImages();

    total ++;

    const randomCup = Math.floor(Math.random() * 3);

    if (randomCup === 0) {
        wins++;
        cupOne.src = './assets/cupandball.png';

    } else if (randomCup === 1) {
        cupTwo.src = './assets/cupandball.png';

    } else {
        cupThree.src = './assets/cupandball.png';
    }

    gameData();
});

buttonTwo.addEventListener('click', () => {
    resetImages();

    total ++;

    const randomCup = Math.floor(Math.random() * 3);

    if (randomCup === 0) {
        cupOne.src = './assets/cupandball.png';

    } else if (randomCup === 1) {
        wins++;
        cupTwo.src = './assets/cupandball.png';

    } else {
        cupThree.src = './assets/cupandball.png';
    }

    gameData();
});

buttonThree.addEventListener('click', () => {
    resetImages();

    total ++;

    const randomCup = Math.floor(Math.random() * 3);

    if (randomCup === 0) {
        cupOne.src = './assets/cupandball.png';

    } else if (randomCup === 1) {
        cupTwo.src = './assets/cupandball.png';

    } else {
        wins++;
        cupThree.src = './assets/cupandball.png';
    }

    gameData();
});


  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
