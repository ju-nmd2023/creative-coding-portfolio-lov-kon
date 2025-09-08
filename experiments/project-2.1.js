function setup() {
    createCanvas(innerWidth, innerHeight);
    frameRate(10);
  }
  
  const size = 20;
  const divider = 1;
  const numRows = 500;
  const numCols = 500;
  
  let counter = 0;
  
  function draw() {
    background(255, 255, 255);
    fill(250, random(200), 100);
    noStroke();
  
    for (let y = 0; y < numRows; y++) {
        for (let x = 0; x < numCols; x++) {
          // noise controls both size and position
          const value = noise(x / divider, y / divider, counter) * size;
    
          let offsetX = noise(x / divider, y / divider, counter) * 10;
          let offsetY = noise(y / divider, x / divider, counter) * 10;
    
          rect(
            size / 2 + x * size + offsetX,
            size / 2 + y * size + offsetY,
            value
          );
        }
      }
    
    
  
    counter += 0.5;
  }
  