let position;
let velocity;
let acceleration;

function setup() {
  createCanvas(innerWidth, innerHeight);
  position = createVector(100, 100);
  velocity = createVector(0, 80);
  background(250, 200, 220);
}

function draw() {
  noStroke();
  fill(200, random(250), 200, 80);
  ellipse(position.x, position.y, 10);

  if (position.x > width || position.x < 0) {
    velocity.x *= -1;
  }
  if (position.y > height || position.y < 0) {
    velocity.y *= -1;
  }

  const mouse = createVector(mouseX, mouseY);
  acceleration = p5.Vector.sub(mouse, position);
  acceleration.normalize();
  acceleration.mult(0.9);

  velocity.add(acceleration);
  velocity.limit(10);
  position.add(velocity);
}
