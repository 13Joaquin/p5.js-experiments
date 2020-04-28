var canvas;
var elms = []

var colors = [[186, 86, 36],
              [140, 188, 185],
              [221, 164, 72],
              [141, 106, 159]]

function setup() {
  canvas = createCanvas(0, 0);
  windowResized();
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  // noLoop();

  var projects = document.getElementById("project_container").getElementsByClassName("col-md-4");
  for (let i=0; i<projects.length; i++) {
    if (i == 'item') {continue;}
    console.log('index: ' + i);
    console.log(projects[i].getElementsByTagName("h3")[0].innerHTML);

    elms.push(new highlightElement(projects[i], colors[i], 5));
  }

  elms.push(new highlightElement(document.getElementById("resume"), colors[projects.length], 20));
}

function draw() {
  background(255);

  elms.forEach(function(entry){
    entry.update();
    entry.display();
  })
}

function windowResized() {
  let h;
  if (windowHeight > document.body.scrollHeight) {h = windowHeight}
  else {h = document.body.scrollHeight};
  let w;
  if (windowHeight > document.body.scrollWidth) {w = windowWidth}
  else {w = document.body.scrollWidth};
  resizeCanvas(w, h);
}
