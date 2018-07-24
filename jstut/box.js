var t;
var tAdjust;
var sq = 300;
var opacity = 1;
var gl = 5000;

var aMax = 50;
var pad = aMax;

var col1 = 'rgba(255,80,0, 1)';
var col2 = 'rgba(228,104,242, 1)';
var col3 = 'rgba(25,214,79, 1)';

var aRand = [];
var bRand = [];

var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (i = 0; i < 16; i++) {
    aRand[i] = random(-aMax,aMax);
  }
  for (i = 0; i < 16; i++) {
    bRand[i] = random(1,gl/1500);
  }
}

function draw() {
	noStroke();
  if (mouseIsPressed) {
    fill('rgba(220,250,10, 0.25)');
  } else {
    fill('rgba(30,220,230, 0.25)');
  }
  ellipse(mouseX, mouseY, 80, 80);
}
