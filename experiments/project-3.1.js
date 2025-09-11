function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(5);
  background(240);
  noFill();
  strokeWeight(1);

  let left_x = int(width * -0.05);
  let right_x = int(width * 1.05);
  let top_y = int(height * -0.05);
  let bottom_y = int(height * 1.05);

  resolution = int(width * 0.01);

  numColumns = int((right_x - left_x) / resolution);
  numRows = int((bottom_y - top_y) / resolution);

  grid = new Array(numColumns);
  for (let col = 0; col < numColumns; col++) {
    grid[col] = new Array(numRows).fill(0);
  }
}

function draw() {
  let palette = [
    color(215, 70, 110, 40),
    color(90, 20, 200, 40),
    color(255, 100, 50, 40),
  ];

  for (let col = 0; col < numColumns; col += 20) {
    for (let row = 0; row < numRows; row += 20) {
      let x = col * resolution;
      let y = row * resolution;

      stroke(palette[(col + row) % palette.length]);

      beginShape();
      for (let step = 0; step < 500; step++) {
        vertex(x, y);

        let angle = sin(x * 0.01) + cos(y * 0.01) + frameCount * 0.02;

        x += cos(angle) * 2;
        y += sin(angle) * 2;


        if (x < 0 || x > width || y < 0 || y > height) break;
      }
      endShape();
    }
  }
}
