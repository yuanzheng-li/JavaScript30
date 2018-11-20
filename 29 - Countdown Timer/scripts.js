const displayTime = document.querySelector(".display__time-left");
const displayEnd = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("button[data-time]");
let countDown;

function timer(seconds) {
  clearInterval(countDown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countDown = setInterval(() => {
    const secondLeft = Math.round((then - Date.now()) / 1000);
    if (secondLeft < 0) {
      clearInterval(countDown);
      // TODO: play a sound
      return;
    }
    displayTimeLeft(secondLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minute = Math.floor(seconds / 60);
  const second = seconds % 60;
  const displayContent = `${minute}:${second < 10 ? "0" : ""}${second}`;
  displayTime.textContent = displayContent;
  document.title = displayContent;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hours = end.getHours();
  const adjustedHours = hours > 12 ? hours - 12 : hours;
  const minutes = end.getMinutes();
  displayEnd.textContent = `Be back at ${adjustedHours}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

function onSubmit(e) {
  e.preventDefault();
  const seconds = this.minutes.value * 60;
  this.reset();
  timer(seconds);
}

buttons.forEach(button => button.addEventListener("click", startTimer));
document.customForm.addEventListener("submit", onSubmit);
