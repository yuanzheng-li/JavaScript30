const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

function handleEnter() {
  const dropdown = this.querySelector(".dropdown");
  background.classList.add("open");
  this.classList.add("trigger-enter");
  setTimeout(
    () =>
      this.classList.contains("trigger-enter") &&
      this.classList.add("trigger-enter-active"),
    150
  );

  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  background.style.setProperty("width", `${dropdownCoords.width}px`);
  background.style.setProperty("height", `${dropdownCoords.height}px`);
  background.style.setProperty(
    "transform",
    `translate(${dropdownCoords.left}px, ${dropdownCoords.top -
      navCoords.top}px)`
  );
}

function handleLeave() {
  this.classList.remove("trigger-enter", "trigger-enter-active");
  background.classList.remove("open");
}

triggers.forEach(trigger =>
  trigger.addEventListener("mouseenter", handleEnter)
);
triggers.forEach(trigger =>
  trigger.addEventListener("mouseleave", handleLeave)
);
