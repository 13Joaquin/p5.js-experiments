// gets element and highlights it with an animated square if the mouse is in the space
function highlightElement(elm) {
  var element = elm;
  var x = element.offsetLeft;
  var y = element.offsetTop;
  var w = element.offsetWidth;
  var h = element.offsetHeight;
  var active = false;

  let n_squares = 3;
  var quads = [];
  for (let i=0; i<n_squares; i++) {
    let corners = [];
    for (let j=0; j<4; j++) {
      corners.push([new SoftNum(0), new SoftNum(0)])
    }
    quads.push(corners)
  }

  var bounds = [[ w/2,  h/2],
                [-w/2,  h/2],
                [-w/2, -h/2],
                [ w/2, -h/2]]

  this.update = function() {
    active = this.mouseInRegion()
    for (q in quads) {
      let corners = quads[q]
      for (c in corners) {
        if (active) {
          corners[c][0].setImperfectTarget(bounds[c][0], 30);
          corners[c][1].setImperfectTarget(bounds[c][1], 30);
        } else {
          corners[c][0].setTarget(0);
          corners[c][1].setTarget(0);
        }
        corners[c][0].update();
        corners[c][1].update();
      }
    }
  }

  this.display = function() {
    push();
    translate(x + w/2, y + h/2)
    noFill();
    stroke(3);
      for (q in quads) {
        this.drawQuad(quads[q]);
      }
    pop();
  }

  this.mouseInRegion = function() {
    if ((mouseX > x) && (mouseX < x + w) && (mouseY > y) && (mouseY < y + h)) {
      return true
    }
    else {return false;}
  }

  this.drawQuad = function(corners) {
    beginShape();
    for (c in corners) {
      vertex(corners[c][0].value, corners[c][1].value)
    }
    endShape(CLOSE);
  }

}
