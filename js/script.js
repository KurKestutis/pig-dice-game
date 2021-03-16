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
  return score;
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;
let currentSum = 0;

let current1Array = [];
let current2 = [];

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

// =======================TOTAL=========================

let total1 = 0;
let total2 = 0;

btnHold.addEventListener("click", function () {
  total1 += currentSum;
  total_El_0.textContent = total1;
  currentSum = 0;
  current1Array = [];
  current_El_0.textContent = currentSum;
  img.src = "/img/Dice-0.png";
});
