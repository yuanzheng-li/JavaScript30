const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector("#speak");
const stopButton = document.querySelector("#stop");

msg.text = document.querySelector('[name="text"]').value;

function populateVoices() {
  voices = this.getVoices();
  const voiceOptions = voices
    .filter(voice => {
      const englishAndChinese = /zh|en/g;
      return englishAndChinese.test(voice.lang);
    })
    .map(
      voice =>
        `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
    )
    .join("");

  voicesDropdown.innerHTML = voiceOptions;
}

function toggleSpeech(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value);
  toggleSpeech();
}

function setOptions() {
  msg[this.name] = this.value;
  toggleSpeech();
}

speechSynthesis.addEventListener("voiceschanged", populateVoices);
voicesDropdown.addEventListener("change", setVoice);
options.forEach(option => option.addEventListener("change", setOptions));
speakButton.addEventListener("click", toggleSpeech);
stopButton.addEventListener("click", () => toggleSpeech(false));
