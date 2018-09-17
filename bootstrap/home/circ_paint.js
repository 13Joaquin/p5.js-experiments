var colors;
var i = 0;
var opac;
var winSize = "temp";

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0,0);
  cnv.style('z-index','-1');
  background(33);
  colors = [
    `rgba(22,219,147,`,
    `rgba(237,174,73,`,
    `rgba(214,8,178,`,
    `rgba(4,139,198,`,
    `rgba(215,38,61,`
  ];
  noStroke();
}

function draw() {
  ellipse(mouseX, mouseY, 80, 80);
  if (i > 4) {
    i = 0;
  }
  opac = 1;
  document.getElementById("colorJS").style.color = colors[i] + `${opac})`;
  opac = 0.2;
  fill(colors[i] + `${opac})`);
}

function mousePressed() {
  i++;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(33);
}
