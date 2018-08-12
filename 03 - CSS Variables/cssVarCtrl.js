const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  input.addEventListener('change', updateValue);
  input.addEventListener('mousemove', updateValue);
});

function updateValue() {
  const sizing = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + sizing);
}