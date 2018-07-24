var winSize = "temp";
var y = 100;

function setup() {
  createCanvas(700, 700);
  stroke(0);
  frameRate(30);
}

function draw() {
  background(255); // Set the background to black
  y = y - 1;
  if (y < 0) {
    y = height;
  }
  line(0, y, width, y);
}

function mousePressed() {}

function queries() {
  var x = window.matchMedia("(max-width: 1250px)")
  var y = window.matchMedia("(max-width: 550px)")

  if (x.matches && !y.matches && winSize != "med") { // If media query matches
    createCanvas(600, 600);
    console.log("bello");
    winSize = "med";
  }
  if (y.matches && winSize != "short") { // If media query matches
    createCanvas(300, 700);
    console.log("hello");
    winSize = "short";
  }
  if (!y.matches && !x.matches && winSize != "long") {
    createCanvas(1000, 600);
    console.log("knello");
    winSize = "long"
  }
}
