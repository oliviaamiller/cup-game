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

const cupArray = ['cup-one', 'cup-two', 'cup-three'];

function resetStyles() {
    cupOne.src = './assets/cup.png';
    cupTwo.src = './assets/cup.png';
    cupThree.src = './assets/cup.png';
}

function gameData() {
    winsEl.textContent = wins;
    lossesEl.textContent = total - wins;
    totalEl.textContent = total;
}

function getRandomItem(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function handleGuess(userGuess, correctSpot) {
    resetStyles();
    total++;

    const correctEl = document.getElementById(correctSpot);
    correctEl.src = './assets/cupandball.png';


    if (userGuess === correctSpot) {
        wins++;
    }
    gameData();
}

// set event listeners 
buttonOne.addEventListener('click', () => {
    const correctSpot = getRandomItem(cupArray);
    console.log(correctSpot);
    handleGuess('cup-one', correctSpot);
});

buttonTwo.addEventListener('click', () => {
    const correctSpot = getRandomItem(cupArray);
    console.log(correctSpot);
    handleGuess('cup-two', correctSpot);
});

buttonThree.addEventListener('click', () => {
    const correctSpot = getRandomItem(cupArray);
    console.log(correctSpot);
    handleGuess('cup-three', correctSpot);
});


  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
