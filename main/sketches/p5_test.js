function setup(){
  createCanvas(700, 700, WEBGL);
  stroke(250);
  fill(0);
}

function draw(){
  background(0);
  rotateY(frameCount * 0.001);

  for(var j = 0; j < 5; j++){
    push();
    for(var i = 0; i < 80; i++){
      translate(sin(frameCount * 0.0001 + j) * 100, sin(frameCount * 0.0001 + j) * 100, i * 0.1);
      rotateZ(frameCount * 0.002);
      push();
      box(8,8,8);
      pop();
    }
    pop();
  }
}
