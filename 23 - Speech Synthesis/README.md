# Speech Synthesis

## Notes

### [SpeechSynthesisUtterance](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance)

- `SpeechSynthesisUtterance` object contains the content the speech service should read and information about how to read it (`lang, pitch, rate, text, voice and volume`)

### [SpeechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis)

- `cancel()` removes all utterances from the utterance queue
- `speak(utterance)` adds an utterance to the utterance queue
- `getVoices()` returns a list of all available voices on the current device
- `voiceschanged` event fired when the list of voices has changed
