const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));

function handleCheck(e) {
  let inBetween = false;
  //Shift key is down and user is checking an item.
  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}
