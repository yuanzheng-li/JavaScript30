const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const cities = [];
const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("keyup", displayMatchedPlaces);
searchInput.addEventListener("change", displayMatchedPlaces);

fetch(endpoint)
  .then(response => response.json())
  .then(data => cities.push(...data));

function filterCities(wordToMatch, places) {
  return places.filter(place => {
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

function displayMatchedPlaces() {
  if (this.value) {
    const matches = filterCities(this.value, cities);
    if (matches.length > 0) {
      const html = matches
        .map(place => {
          const regex = new RegExp(this.value, "gi");
          const cityName = place.city.replace(
            regex,
            `<span class="hl">${this.value}</span>`
          );
          const stateName = place.state.replace(
            regex,
            `<span class="hl">${this.value}</span>`
          );
          return `
            <li>
              <span class="name">${cityName}, ${stateName}</span>
              <span class="population">${numberWithCommas(
                place.population
              )}</span>
            </li>
          `;
        })
        .join("");
      suggestions.innerHTML = html;
    } else {
      suggestions.innerHTML = `
        <li>No Matches.</li>
      `;
    }
  } else {
    suggestions.innerHTML = `
      <li>Filter for a city</li>
      <li>or a state</li>
    `;
  }
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
