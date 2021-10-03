let tx = ["[","O", "C", "T", "O", "P", "U", "S", "]"];
let font;
let bubble = [];
let z = 0;
let placed = 0;
let colors = ['cyan' ,'magenta','yellow','black'];

class Bubbles {
  constructor(x, y, ch,colors) {
    this.x = x;
    this.y = y;
    this.ch = ch;
    this.colors = ['cyan','magenta'];
  }

  preview() {
    push();
    translate(mouseX, mouseY);
    text(tx[z], 0, 0);
    pop();
  }

  show() {
    textSize(200);
    textAlign(CENTER, CENTER);
    text(this.ch, this.x, this.y);
  }
}

function mouseClicked() {
  let b = new Bubbles(mouseX, mouseY, tx[z]);
  bubble.push(b);
 // placed = z;
}

function keyPressed() {
  if (key == "c") {
    z++; }
        if (z == tx.length) {
      z = tx.length-1;
    }
      if (key == "x") {
    z--; }
      if (z == -1) {
      z = 0;
    }

  }




