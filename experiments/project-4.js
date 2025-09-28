let position;
let velocity;
let acceleration;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  position = createVector(100, 100);
  velocity = createVector(0, 80);
  background(250, 200, 220);
}

function draw() {
  noStroke();
  fill(200, random(250), 200, 80);
  ellipse(position.x, position.y, 10);

  if (position.x > width || position.x < 0) velocity.x *= -1;
  if (position.y > height || position.y < 0) velocity.y *= -1;

  const mouseVec = createVector(mouseX, mouseY);
  acceleration = p5.Vector.sub(mouseVec, position);
  acceleration.normalize().mult(0.9);

  velocity.add(acceleration).limit(10);
  position.add(velocity);
}

function mousePressed() {
  console.log("Mouse pressed!");

  Tone.start().then(() => {
    console.log("AudioContext started!");

    // Create filters **after AudioContext is started**
    const lowpass = new Tone.Filter(500, "lowpass").toDestination();
    const highpass = new Tone.Filter(500, "highpass").connect(lowpass);

    // Create oscillator and connect it to filters
    const osc = new Tone.Oscillator(Math.random() * 880 + 110, "sine").connect(
      highpass
    );

    osc.start();
    osc.stop("+0.5"); // stop after 0.2 seconds
  });
}
