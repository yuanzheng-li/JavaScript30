const divs = document.querySelectorAll("div");
const button = document.querySelector("button");

function logClassName(e) {
  console.log(this.classList.value);
  // e.stopPropagation(); // stop bubbling
}

divs.forEach(div =>
  div.addEventListener("click", logClassName, {
    capture: true
  })
);

button.addEventListener(
  "click",
  () => {
    console.log("Click!!!");
  },
  {
    once: true
  }
);
