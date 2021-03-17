// html elements selecting
const player0 = document.querySelector(".play-arena__player0");
const player1 = document.querySelector(".play-arena__player1");

const total_El_0 = document.getElementById("total--0");
const total_El_1 = document.getElementById("total--1");

let current_El_0 = document.getElementById("current--0");
let current_El_1 = document.getElementById("current--1");

let img = document.querySelector(".control-panel__dice-pic");

const btnRoll = document.querySelector(".control-panel__btn--roll");
const btnHold = document.querySelector(".control-panel__btn--hold");
const btnNewGame = document.querySelector(".control-panel__btn--roll");

function rollDice() {
  const score = Math.trunc(Math.random() * 6 + 1);
  img.src = `/img/Dice-${score}.png`;
  img.classList.remove("hidden");
  img.classList.toggle("move1");
  img.classList.toggle("move2");
  return score;
}

// === DICE SCORING ===

const scores = [0, 0];
let currentSum = 0;
let activePlayer = 0;

// === Dice archiving ===

let allDice = [];

let player0Dice = [];
let player1Dice = [];

let player0CurrentDice = [];
let player1CurrentDice = [];

// Counting system
const reducer = (accumulator, currentValue) => accumulator + currentValue;
let current1Array = [];

// ======================= START PLAYNG =========================

btnRoll.addEventListener("click", function () {
  const diceScore = rollDice();

  if (diceScore === 1) {
    current1Array = [];
    currentSum = 0;
    current_El_0.textContent = "ZERO";
  } else {
    current1Array.push(diceScore);
    currentSum = current1Array.reduce(reducer);
    current_El_0.textContent = currentSum;
  }
});

// ======================= HOLD =========================

let total1 = 0;
let total2 = 0;

btnHold.addEventListener("click", function () {
  total1 += currentSum;
  total_El_0.textContent = total1;
  currentSum = 0;
  current1Array = [];
  current_El_0.textContent = currentSum;
  img.classList.add("hidden");
});
