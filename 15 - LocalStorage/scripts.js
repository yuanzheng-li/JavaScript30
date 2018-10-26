const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];

populatePlates(items, itemsList);

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);

function addItem(e) {
  e.preventDefault();

  const name = this.querySelector("[name=item]").value;
  const item = {
    name,
    done: false
  };

  items.push(item);

  this.reset();

  populatePlates(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
}

function populatePlates(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, index) => {
      return `
        <li>
          <input type="checkbox" data-index=${index} id="item${index}" ${plate.done ? "checked" : ""}>
          <label for="item${index}">${plate.name}</label>
        </li>
      `;
    })
    .join("");
}

function toggleDone(e) {
  if (!e.target.matches("input")) {
    return;
  }

  const index = e.target.dataset.index;
  items[index].done = !items[index].done;

  populatePlates(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
}
