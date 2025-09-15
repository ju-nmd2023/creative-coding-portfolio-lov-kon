//The following lines of code is inspired from Garrit's example code and then i have made a few changes
function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(10);
}

const size = 10;
const divider = 20;
const numRows = 600;
const numCols = 600;

let counter = 0;

function draw() {
  background(255, 200, 250);
  noStroke();
  fill(255, 255, 255);

  for (let y = 0; y < numRows; y++) {
    for (let x = 0; x < numCols; x++) {
      const value = noise(x / divider, y / divider, counter) * size;
      ellipse(size / 2 + x * size, size / 2 + y * size, value);
    }
  }

  counter += 0.5;
}
