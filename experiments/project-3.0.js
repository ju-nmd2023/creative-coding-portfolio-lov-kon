function setup() {
  createCanvas(innerWidth, innerHeight);
  background(240);
  noFill();
  strokeWeight(1);
}

function draw() {
  let stepSize = 20;
  let lineLength = 200;

  let palette = [
    color(215, 70, 110, 50),
    color(90, 20, 200, 50),
    color(255, 100, 50, 50),
  ];

  for (let x = 0; x < width; x += stepSize) {
    for (let y = 0; y < height; y += stepSize) {
      stroke(palette[(x + y) % palette.length]);

      let px = x;
      let py = y;

      beginShape();
      for (let i = 0; i < lineLength; i++) {
        vertex(px, py);

        // Simple wavy flow
        let angle = sin(px * 0.005) + cos(py * 0.005);

        px += cos(angle) * 1;
        py += sin(angle) * 1;

        if (px < 0 || px > width || py < 0 || py > height) break;
      }
      endShape();
    }
  }

  noLoop();
}
