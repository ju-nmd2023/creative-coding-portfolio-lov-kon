function setup() {
  createCanvas(1000, innerHeight);
}

const size = 200;
const layers = 15;

function getRandomValue(pos, variance) {
  return pos + map(Math.random(), 1, 3, -variance, variance);
}

function drawLayers(x, y, size, layers) {
  // const half = size / 2;
  const variance = size / 20;
  noFill();
  // rectMode(CENTER);
  for (let i = 0; i < layers; i++) {
    if (Math.random() > 0.8) {
      continue;
    }
    const s = (size / layers) * i;
    const half = s / 2;
    beginShape();
    vertex(
      getRandomValue(x - half, variance),
      getRandomValue(y - half, variance)
    );
    vertex(
      getRandomValue(x + half, variance),
      getRandomValue(y - half, variance)
    );
    vertex(
      getRandomValue(x + half, variance),
      getRandomValue(y + half, variance)
    );
    vertex(
      getRandomValue(x - half, variance),
      getRandomValue(y + half, variance)
    );
    endShape(CLOSE);
    // rect(x - half, y - half, s, s);
  }
}

function draw() {
  background(255, 255, 255);

  // drawLayers(100, 100, size, layers);
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      drawLayers(size / 2 + x * size, size / 2 + y * size, size, layers);
    }
  }

  noLoop();
}
