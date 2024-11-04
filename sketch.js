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
  let startY = 75; 

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
  let glyphSize = 25;

  strokeWeight(random(1.5, 2.5));
  stroke(0);
  fill(0, 0, 0, 100);
  
  noFill();
  beginShape();
  for (let i = 0; i < random(6, 10); i++) {
    let vx = random(-glyphSize / 1, glyphSize / 1);
    let vy = random(-glyphSize / 1, glyphSize / 1);
    curveVertex(vx, vy);
  }
  endShape();
  
  pop();
}
