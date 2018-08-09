const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setTime() {
  const date = new Date();

  const second = date.getSeconds();
  const secondHandDeg = (second / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondHandDeg}Deg)`;

  const minute = date.getMinutes();
  const minHandDeg = (minute / 60) * 360 + (second / 60) * (360 / 60) + 90;
  minHand.style.transform = `rotate(${minHandDeg}Deg)`;

  const hour = date.getHours();
  const hourHandDeg = (hour / 12) * 360 + (minute / 60) * (360 / 12) + 90;
  hourHand.style.transform = `rotate(${hourHandDeg}Deg)`;
}

setTime();
setInterval(setTime, 1000);