let bgImage; 

function preload() {
  bgImage = loadImage("pergamena.jpeg");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  background(255); 
}

function draw() {
  image(bgImage, 0, 0, width, height);
  let cols = 100; 
  let rows = 8; 
  let padding = 70; 
  let startX = 30; 
  let startY = 70; 

  for (let i = 1; i < cols; i++) {
    for (let j = 1; j < rows; j++) {
      let x = startX + i * padding;
      let y = startY + j * padding;
      drawGlyph(x, y);
    }
  }
}

function drawGlyph(x, y) {
  push();
  translate(x, y);
  let glyphSize = random(50, 50);

  strokeWeight(random(2, 4));
  stroke(0);
  fill(0, 0, 0, 100);
  
  noFill();
  beginShape();
  for (let i = 0; i < random(6, 9); i++) {
    let vx = random(-glyphSize / 2, glyphSize / 2);
    let vy = random(-glyphSize / 2, glyphSize / 2);
    curveVertex(vx, vy);
  }
  endShape();
  
  pop();
}
