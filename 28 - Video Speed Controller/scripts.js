const video = document.querySelector(".flex");
const speed = document.querySelector(".speed");
const speedBar = document.querySelector(".speed-bar");
let isDown = false;

function handleMove(e) {
  if (!isDown) {
    return;
  }

  const y = e.pageY - this.offsetTop;
  const min = 0.5;
  const max = 5;
  const percent = y / this.offsetHeight;
  const speedBarHeight = `${Math.round(percent * 100)}%`;
  const playbackRate = percent * (max - min) + min;

  speedBar.style.height = speedBarHeight;
  speedBar.textContent = `${playbackRate.toFixed(2)}x`;
  video.playbackRate = playbackRate;
}

speed.addEventListener("mousemove", handleMove);

speed.addEventListener("mousedown", () => {
  isDown = true;
});

speed.addEventListener("mouseup", () => {
  isDown = false;
});

speed.addEventListener("mouseleave", () => {
  isDown = false;
});
