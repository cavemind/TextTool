
let myButton;

function preload() {
  font = loadFont("VT323-Regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
}
function draw() {
  background(200);
  push();
  translate(mouseX, mouseY);
  text(tx[z], 0, 0);
  pop();
  textSize(200);
  textAlign(CENTER, CENTER);
  text(this.ch, this.x, this.y);
  for (let i = 0; i < bubble.length; i++) {
    bubble[i].preview();
    bubble[i].show();
  }
}
