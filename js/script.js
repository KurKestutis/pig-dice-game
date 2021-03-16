// html elements selecting

const total_El_0 = document.getElementById("total--0");
const total_El_1 = document.getElementById("total--1");

let current_El_0 = document.getElementById("current--0");
let current_El_1 = document.getElementById("current--1");

let img = document.querySelector(".control-panel__dice-pic");

function rollDice() {
  const score = Math.trunc(Math.random() * 6 + 1);
  console.log(score);
  img.src = `/img/Dice-${score}.png`;
  return score;
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;
let currentSum = 0;

let current1Array = [];
let current2 = [];

document
  .querySelector(".control-panel__btn--roll")
  .addEventListener("click", function () {
    const diceScore = rollDice();
    if (diceScore === 1) {
      console.log("You rolled 1 throw passes to another player");
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

document
  .querySelector(".control-panel__btn--hold")
  .addEventListener("click", function () {
    total1 += currentSum;
    total_El_0.textContent = total1;
    currentSum = 0;
    current1Array = [];
    current_El_0.textContent = currentSum;
    img.src = "/img/Dice-0.png";
  });
