// html elements selecting
const player0 = document.querySelector(".play-arena__player0");
const player1 = document.querySelector(".play-arena__player1");

const total_El_0 = document.getElementById("total--0");
const total_El_1 = document.getElementById("total--1");

let current_El_0 = document.getElementById("current--0");
let current_El_1 = document.getElementById("current--1");

let projectionEl0 = document.getElementById("projection--0");
let projectionEl1 = document.getElementById("projection--1");

let img = document.querySelector(".control-panel__dice-pic");

const btnRoll = document.querySelector(".control-panel__btn--roll");
const btnHold = document.querySelector(".control-panel__btn--hold");
const btnNewGame = document.querySelector(".control-panel__btn--new-game");

let scores, currentScore, activePlayer, playing, projectionScore;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  total_El_0.textContent = 0;
  total_El_1.textContent = 0;
  current_El_0.textContent = 0;
  current_El_1.textContent = 0;
  projectionScore = 0;

  player0.classList.add("active");
  player1.classList.remove("active");

  projectionEl0.textContent = 0;
  projectionEl1.textContent = 0;
};

init();

function rollDice() {
  const score = Math.trunc(Math.random() * 6 + 1);
  img.src = `img/Dice-${score}.png`;
  img.classList.remove("hidden");
  img.classList.toggle("move1");
  img.classList.toggle("move2");

  if (score !== 0) {
    projectionScore = scores[activePlayer] + score;
    document.getElementById(
      `projection--${activePlayer}`
    ).textContent = projectionScore;
  }

  return score;
}

const changePlayer = function () {
  currentScore = 0;
  projectionScore = 0;
  document.getElementById(
    `current--${activePlayer}`
  ).textContent = currentScore;
  document.getElementById(`projection--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("active");
  player1.classList.toggle("active");
};

// === Dice archiving ===
let allDice = [];

let player0Dice = [];
let player1Dice = [];

// Counting system
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// ======================= START PLAYNG =========================

btnRoll.addEventListener("click", function () {
  if (playing) {
    const diceScore = rollDice();
    if (diceScore === 1) {
      changePlayer();
    } else {
      currentScore += diceScore;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;

      projectionScore = scores[activePlayer] + currentScore;
      document.getElementById(
        `projection--${activePlayer}`
      ).textContent = projectionScore;
    }
  }
});

// ======================= HOLD =========================

btnHold.addEventListener("click", function () {
  if (playing) {
    img.classList.add("hidden");
    scores[activePlayer] += currentScore;

    document.getElementById(`total--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 30) {
      playing = false;
      document
        .querySelector(`.play-arena__player${activePlayer}`)
        .classList.add("winner");

      document
        .querySelector(`.play-arena__player${activePlayer}`)
        .classList.remove("active");

      document.getElementById(`projection--${activePlayer}`).textContent = 0;
    } else {
      changePlayer();
    }
  }
});

btnNewGame.addEventListener("click", function () {
  document
    .querySelector(`.play-arena__player${activePlayer}`)
    .classList.remove("winner");

  init();
});
