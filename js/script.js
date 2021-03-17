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

const changePlayer = function () {
  currentScore = 0;
  document.getElementById(
    `current--${activePlayer}`
  ).textContent = currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("active");
  player1.classList.toggle("active");
};

// === DICE SCORING ===
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

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
    }
  }
});

// ======================= HOLD =========================

btnHold.addEventListener("click", function () {
  img.classList.add("hidden");
  scores[activePlayer] += currentScore;

  document.getElementById(`total--${activePlayer}`).textContent =
    scores[activePlayer];
  console.log(scores[activePlayer]);
  if (scores[activePlayer] >= 10) {
    playing = false;
    console.log(`Winner is Player ${activePlayer}`);

    document
      .querySelector(`.play-arena__player${activePlayer}`)
      .classList.add("winner");

    document
      .querySelector(`.play-arena__player${activePlayer}`)
      .classList.remove("active");

    document.querySelector(
      `.play-arena__player${activePlayer}__player-name`
    ).textContent += ` WIN! `;
  } else {
    changePlayer();
  }
});
