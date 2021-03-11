// alert("Hi");

let player1Score = 0;
let player2Score = 0;

let player1CurrentScore = 0;
let player2CurrentScore = 0;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const score = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(score);
  return score;
}

let current1Doc = document.querySelector(".current__score");
const current2Doc = document.querySelector(".current--2");

const reducer = (accumulator, currentValue) => accumulator + currentValue;
let currentSum = 0;

let current1Array = [];
console.log(current1Array);
let current2 = [];

document
  .querySelector(".control-panel__btn--roll")
  .addEventListener("click", function () {
    const diceScore = getRandomIntInclusive(1, 6);
    if (diceScore === 1) {
      console.log("You rolled 1 throw passes to another player");
      current1Array = [];
      console.log(current1Array);
      current1Doc.textContent = 0;
    } else {
      current1Array.push(diceScore);
      console.log(current1Array);
      currentSum = current1Array.reduce(reducer);
      console.log(currentSum);
      current1Doc.textContent = currentSum;
    }
  });

// =======================TOTAL=========================

let total1 = 0;
let total2 = 0;

const firstTotal = document.querySelector(
  ".play-arena__player1__points-earned"
);

document
  .querySelector(".control-panel__btn--hold")
  .addEventListener("click", function () {
    total1 += currentSum;
    firstTotal.textContent = total1;
  });
