var canvas;
var elms = []

var colors = [[186, 86, 36],
              [140, 188, 185],
              [221, 164, 72],
              [141, 106, 159]]

function setup() {
  var canvas = canvas = siteCanvas(z = 'bg', nav = false, scroll = 1);
  windowResized();
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
  siteResized();
}
