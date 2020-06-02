var canvas;
var elms = []
var timeElapsed = 0
var lastChange = 0
var ri = 0;

var colors = [[194, 84, 62],
              [212,136,120],
              [222,163,151]]

var radii = [50, 100, 200, 150]

function setup() {
  var canvas = canvas = siteCanvas(z = 'bg', nav = false, scroll = 1);
  windowResized();
  // noLoop();
  mx = new SoftNum(mouseX)
  my = new SoftNum(mouseY)
  r = new SoftNum(radii[ri])
}

function draw() {

  timeElapsed = millis() - lastChange

  c = colors[0]
  background(255);
  stroke(c[0], c[1], c[2], 255);
  strokeWeight(4)

  translate(mx.value, my.value)
  rotate(PI/4)
  circle(0, 0, r.value)
  // circle(mouseX, mouseY, 100)
  nSpheres = 5
  for (ix=0; ix<nSpheres; ix++) {
    for (iy=0; iy<nSpheres; iy++) {
      rSphere = pow(ix, 2) + pow(iy, 2)
      opacity = map(rSphere, 0, pow(nSpheres, 2), 255, 0)
      stroke(c[0], c[1], c[2], opacity);
      circle(+ix*r.value, +iy*r.value, r.value)
      circle(-ix*r.value, -iy*r.value, r.value)
      circle(-ix*r.value, +iy*r.value, r.value)
      circle(+ix*r.value, -iy*r.value, r.value)
    }
  }
  mx.setTarget(mouseX)
  my.setTarget(mouseY)
  mx.update()
  my.update()
  r.update()

  if (timeElapsed > 1000) {
    ri++
    if (ri == radii.length) ri = 0
    r.setTarget(radii[ri])
    lastChange = millis()
  }
}

function mousePressed() {
  ri++
  if (ri == radii.length) ri = 0
  r.setTarget(radii[ri])
  lastChange = millis()
}

function windowResized() {
  siteResized();
}
