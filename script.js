import OBR from "https://cdn.skypack.dev/@owlbear-rodeo/sdk";

let diceCount = 1;
const MIN_DICE = 1;
const MAX_DICE = 6;

const countDisplay = document.getElementById('dice-count');
const btnMinus = document.getElementById('btn-minus');
const btnPlus = document.getElementById('btn-plus');
const btnRoll = document.getElementById('btn-roll');
const resultsContainer = document.getElementById('results-container');

// A helper function to create a clickable die
function createDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    const img = document.createElement('img');
    
    // Set to strictly look for .jpg
    img.src = `./assets/${roll}.jpg`;

    // Listen for clicks on THIS specific die to reroll it
    img.addEventListener('click', () => {
        const newRoll = Math.floor(Math.random() * 6) + 1;
        // Make sure the reroll also looks for .jpg
        img.src = `./assets/${newRoll}.jpg`;
        
        // Forces the CSS "popIn" animation to restart
        img.style.animation = 'none';
        img.offsetHeight; 
        img.style.animation = null; 
    });
    
    return img;
}

// Initialize the extension inside Owlbear Rodeo
OBR.onReady(() => {
    OBR.action.setWidth(400);
    OBR.action.setHeight(600);

    // Minus Button Logic
    btnMinus.addEventListener('click', () => {
        if (diceCount > MIN_DICE) {
            diceCount--;
            countDisplay.innerText = diceCount;
        }
    });

    // Plus Button Logic
    btnPlus.addEventListener('click', () => {
        if (diceCount < MAX_DICE) {
            diceCount++;
            countDisplay.innerText = diceCount;
        }
    });

    // Roll Button Logic
    btnRoll.addEventListener('click', () => {
        resultsContainer.innerHTML = ''; // Clear old dice

        for (let i = 0; i < diceCount; i++) {
            resultsContainer.appendChild(createDie());
        }
    });
});
