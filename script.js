import OBR from "https://cdn.skypack.dev/@owlbear-rodeo/sdk";

let diceCount = 1;
const MIN_DICE = 1;
const MAX_DICE = 6;

const countDisplay = document.getElementById('dice-count');
const btnMinus = document.getElementById('btn-minus');
const btnPlus = document.getElementById('btn-plus');
const btnRoll = document.getElementById('btn-roll');
const resultsContainer = document.getElementById('results-container');

// Initialize the extension inside Owlbear Rodeo
OBR.onReady(() => {
    
    // --- THIS FIXES THE WINDOW SIZE ---
    // Sets width to 340px and height to 500px
    OBR.action.setWidth(340);
    OBR.action.setHeight(500);

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
            const roll = Math.floor(Math.random() * 6) + 1;
            const img = document.createElement('img');
            img.src = `assets/${roll}.jpg`;
            img.alt = `Rolled ${roll}`;
            resultsContainer.appendChild(img);
        }
    });
});