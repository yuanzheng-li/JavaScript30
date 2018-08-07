function playSound(e) {
  const key = document.querySelector(`div.key[data-key='${e.keyCode}']`);
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);

  if(!key || !audio) {
    return;
  }
  
  key.classList.add('playing');
  audio.currentTime = 0; //rewind audio to the start.
  audio.play();
}

function removeTransition(e) {
  if(e.propertyName !== 'transform') {
    return;
  }

  this.classList.remove('playing');
}

Array
  .from(document.querySelectorAll('div.key'))
  .forEach(key => {
    key.addEventListener('transitionend', removeTransition);
  });

window.addEventListener('keydown', playSound);