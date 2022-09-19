const ctx = new AudioContext();

let audio;
/*let tempo;
let err;

  // fetches the tempp file
  fetch("Waiata1bpm.mp3")
  .then(data => data.arrayBuffer(createBufferSource(arrayBufferSourceNode)))
 // tempo calculator
  .then(analyze(arrayBufferSourceNode)
    .then((tempo) => {})
    .catch((err)) = {})
 
  .then(arrayBuffer => ctx.decodeAudioData(arrayBuffer))
  .then(decodedAudio => {
    audio = decodedAudio;
  });

*/

  // fetches the audio file
fetch("Waiata1.mp3")
  .then(data => data.arrayBuffer())
  .then(arrayBuffer => ctx.decodeAudioData(arrayBuffer))
  .then(decodedAudio => {
    audio = decodedAudio;
  });

    // plays sound back
function playback() {
  const playSound = ctx.createBufferSource();
  playSound.buffer = audio;
  playSound.connect(ctx.destination);
  playSound.start(ctx.currentTime);
  playSound.removeEventListener("keydown", playback);
  }



document.addEventListener("keydown", playback, { once:true });