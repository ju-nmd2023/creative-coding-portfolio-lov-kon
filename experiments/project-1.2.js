function setup() {
  createCanvas(1000, 1000);
  frameRate(2);
}

const size = 200;
const layers = 15;

function getRandomValue(pos, variance) {
  return pos + map(Math.random(), 1, 3, -variance, variance);
}

function drawLayers(x, y, size, layers) {
  const variance = size / 20;
  noFill();
  stroke(255, random(200), random(215), 40);
  strokeWeight(5);
  for (let i = 0; i < layers; i++) {
    if (Math.random() > 0.8) {
      continue;
    }
    const s = (size / layers) * i;
    const half = s / 2;
    push();

    translate(x, y);
    rotate(radians(i * 100));
    beginShape();
    vertex(getRandomValue(-half, variance), getRandomValue(half, variance));
    endShape(CLOSE);
    pop();

    ellipse(x, y, s, s);
  }
}

function draw() {
  background(255, 255, 255);

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      drawLayers(size / 2 + x * size, size / 2 + y * size, size, layers);
    }
  }
}
