// alert("Hi");

let player1Score = 0;
let player2Score = 0;

let player1CurrentScore = 0;
let player2CurrentScore = 0;

let img = document.querySelector(".control-panel__dice-pic");

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const score = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(score);

  // img.src = "/img/Dice-3.png";

  switch (score) {
    case 1:
      img.src = "/img/Dice-1.png";
      break;
    case 2:
      img.src = "/img/Dice-2.png";
      break;
    case 3:
      img.src = "/img/Dice-3.png";
      break;
    case 4:
      img.src = "/img/Dice-4.png";
      break;
    case 5:
      img.src = "/img/Dice-5.png";
      break;
    case 6:
      img.src = "/img/Dice-6.png";
      break;
    default:
      img.src = "/img/Dice-0.png";
  }

  return score;
}

let current1Doc = document.querySelector(".current__score");
let current2Doc = document.querySelector(".current--2");

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
      currentSum = 0;
      current1Doc.textContent = "ZERO";
    } else {
      current1Array.push(diceScore);
      currentSum = current1Array.reduce(reducer);
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
    currentSum = 0;
    current1Array = [];
    current1Doc.textContent = currentSum;
    img.src = "/img/Dice-0.png";
  });
