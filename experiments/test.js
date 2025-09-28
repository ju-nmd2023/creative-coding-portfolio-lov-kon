function setup() {
  createCanvas(innerWidth, innerHeight);
  position = createVector(100, 100);
  velocity = createVector(0, 80);
  background(250, 200, 220);
}

let lowpass;
let highpass;
let oscillator;

window.addEventListener("load", () => {
  lowpass = new Tone.Filter(500, "lowpass").toDestination();
  highpass = new Tone.Filter(500, "highpass").connect(lowpass);
  oscillator = new Tone.Oscillator(440, "sine").connect(highpass);
});

window.addEventListener("click", () => {
  Tone.start().then(() => {
    oscillator.frequency.value = Math.random() * 880 + 110;
    oscillator.start();
    oscillator.stop("+0.2");
  });
});

