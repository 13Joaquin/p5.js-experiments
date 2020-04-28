// gets element and highlights it with an animated square if the mouse is in the space
function highlightElement(elm, c, pd) {
  var element = elm;
  var color = c; // color for highlight
  var padding = pd; // padding inside quad

  var x = element.offsetLeft;
  var y = element.offsetTop;
  var w = element.offsetWidth;
  var h = element.offsetHeight;

  var active = false; // boolean if mouse hovers over


  // initialize array of quads -> array of corners -> x and y value
  let n_quads = 3;
  var quads = [];
  for (let i=0; i<n_quads; i++) {
    let corners = [];
    for (let j=0; j<4; j++) {
      corners.push([new SoftNum(0), new SoftNum(0)])
    }
    quads.push(corners)
  }

  // bounds to set rectangle targets when active
  var bounds = [[ (w/2+padding),  (h/2+padding)],
                [-(w/2+padding),  (h/2+padding)],
                [-(w/2+padding), -(h/2+padding)],
                [ (w/2+padding), -(h/2+padding)]]

  this.update = function() {
    // update element coordinates for window resizing
    x = element.offsetLeft;
    y = element.offsetTop;
    w = element.offsetWidth;
    h = element.offsetHeight;
    bounds = [[ (w/2+padding),  (h/2+padding)],
              [-(w/2+padding),  (h/2+padding)],
              [-(w/2+padding), -(h/2+padding)],
              [ (w/2+padding), -(h/2+padding)]]

    // set boolean active
    active = this.mouseInRegion()

    // update quad vertices
    for (q in quads) {
      let corners = quads[q]
      for (c in corners) {
        if (active) {
          // imperfect targets add noise for natural motion
          corners[c][0].setImperfectTarget(bounds[c][0], 30);
          corners[c][1].setImperfectTarget(bounds[c][1], 30);
        } else {
          // collapse if not active
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
    // move to center of quad
    translate(x + w/2, y + h/2);

    // set drawing settings
    // noFill();
    // stroke(3);

    noStroke();
    fill(color[0], color[1], color[2], 30);

    // draw quads
      for (q in quads) {
        this.drawQuad(quads[q]);
      }
    pop();
  }

  this.mouseInRegion = function() {
    // check if mouse is in boundaries
    if ((mouseX > x) && (mouseX < x + w) && (mouseY > y) && (mouseY < y + h)) {return true;
    } else {return false;
    }
  }

  this.drawQuad = function(corners) {
    // draw quadrilateral as a p5 polygon
    beginShape();
    for (c in corners) {
      vertex(corners[c][0].value, corners[c][1].value);
    }
    endShape(CLOSE);
  }

}
