var bubblesArray = []; //I'm gonna have bubbles. I need to say how many
var img;

function preload() {
  img = loadImage('silhouette.png');
}

function setup() {
  createCanvas(1200, 500);

  imageMode(CORNER);


}

function draw() {

  background(100);
  image(img, 0, 0, 300, 500);

  // fill(0);
  // rect(0, 150, 100, 200);
  // fill(255, 0, 0);
  // ellipse(100, 250, 10, 10);

  // stroke(255);
  // noFill();
  // text("Mouse X: " + mouseX, 10, 20);
  // text("Mouse Y: " + mouseY, 10, 30);

  for (var i = 0; i < bubblesArray.length; i++) {
    bubblesArray[i].display();
    bubblesArray[i].move();
    bubblesArray[i].grow();
    bubblesArray[i].checkBoundary();
    
    if (bubblesArray[i].dia > 50) {
      bubblesArray.splice(i, 1); //splice(index you're removing, how many);
    }
  }

  if (mouseIsPressed) {
    bubblesArray.push(new Bubbles());

  }

}


function Bubbles() {
  this.x = 240;
  this.y = 180;
  this.dia = random(5, 15);
  this.diaSize = random(-1.5, 1);
  this.size = random(0.05, 0.3);
  this.xSpeed = random(2, 3);
  this.ySpeed = random(-1, 2); //postitive and negative;

  this.display = function() {
    fill(random(150,255), random(150,255), random(150,255), 100);
    stroke(204, 255, 255);
    ellipse(this.x, this.y, this.dia, this.dia);
    //this.dia = this.x - 150;
    var size = map(this.x, 0, width, 0, 200);
  };
  this.move = function() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    
    //this.xSpeed *= 0.90;
    this.ySpeed *= 0.9999999;
    
    //this.xSpeed += 0.1;
  };
  this.grow = function() {
    this.dia = this.dia + this.size;
   
  }

  this.checkBoundary = function() {

    if (this.x <= 15) {
      this.xSpeed = this.xSpeed * -1;
    }
    if (this.y >= height - 15) {
      this.ySpeed = this.ySpeed * -1;
    }
    if (this.y <= 15) {
      this.ySpeed = this.ySpeed * -1;
    }
  }
}