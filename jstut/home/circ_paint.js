var c, c2;
var i = 0;
var opac;
var winSize = "temp";

function setup() {
  createCanvas(1000,600);
  c = [
    `rgba(214,8,178,`,
    `rgba(4,139,198,`,
    `rgba(22,219,147,`,
    `rgba(237,174,73,`,
    `rgba(215,38,61,`
  ];
  noStroke();
}

function draw() {

  queries() // Call listener function at run time

  ellipse(mouseX, mouseY, 80, 80);
  if (i>4) {
    i=0;
  }
  opac = 1;
  document.getElementById("colorJS").style.color = c[i] + `${opac})`;
  opac = 0.2;
  fill(c[i] + `${opac})`);
}

function mousePressed() {
  i++;
}

function queries() {
  var x = window.matchMedia("(max-width: 1250px)")
  var y = window.matchMedia("(max-width: 550px)")

  if (x.matches && !y.matches && winSize != "med") { // If media query matches
    createCanvas(600,600);
    console.log("bello");
    winSize = "med";
  }
  if (y.matches && winSize != "short") { // If media query matches
    createCanvas(300,700);
    console.log("hello");
    winSize = "short";
  }
  if (!y.matches && !x.matches && winSize != "long") {
    createCanvas(1100,600);
    console.log("knello");
    winSize = "long"
  }
}
