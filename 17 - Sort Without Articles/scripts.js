const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog',
];

function strip(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

const sortedBands = bands.sort((a, b) => {
  if (strip(a) > strip(b)) {
    return 1;
  }

  if (strip(a) < strip(b)) {
    return -1;
  }

  return 0;
});

document.querySelector('#bands').innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
