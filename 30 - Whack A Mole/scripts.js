const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
let lastHole;
let timeup = false;
let score = 0;

function randomTime(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomHole(holes) {
  const index = Math.floor(Math.random() * holes.length);
  const hole = holes[index];

  if (lastHole === hole) {
    return randomHole(holes);
  }

  lastHole = hole;

  return hole;
}

function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeup) {
      peep();
    }
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeup = false;
  score = 0;
  peep();
  setTimeout(() => (timeup = true), 10000);
}

function hit(e) {
  if (!e.isTrusted) {
    return;
  }

  score++;
  this.classList.remove("up");
  scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener("click", hit));
