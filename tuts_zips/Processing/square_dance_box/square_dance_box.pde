int t;
float t2;
float sq = 300;
int opacity = 255;
int gl = 5000;

float osc = 10;

float[] rand_A = new float[16];
int[] rand_B = new int[16];

void setup() {
  size(500, 500);
  for (int i = 0; i < rand_A.length; i++) {
  rand_A[i] = random(-osc,osc);
}
  for (int i = 0; i < rand_B.length; i++) {
  rand_B[i] = (int) random(1,3);
}
}

void draw()
{
noStroke();
background(0);
translate(width/2, height/2);
point(x1(t),y1(t));
blendMode(SCREEN);

t = millis();
t2 = 2*PI*t/gl;

fill(0,0,255,opacity);
beginShape();
vertex(x3(t)+sq/2,y3(t)+sq/2);
vertex(x4(t)-sq/2,y4(t)+sq/2);
vertex(x1(t)-sq/2,y1(t)-sq/2);
vertex(x2(t)+sq/2,y2(t)-sq/2);
endShape(CLOSE);

fill(255,0,0,opacity);
beginShape();
vertex(x1(t)+sq/2,y1(t)+sq/2);
vertex(x2(t)-sq/2,y2(t)+sq/2);
vertex(x3(t)-sq/2,y3(t)-sq/2);
vertex(x4(t)+sq/2,y4(t)-sq/2);
endShape(CLOSE);

fill(0,255,0,opacity);
beginShape();
vertex(x2(t)+sq/2,y2(t)+sq/2);
vertex(x3(t)-sq/2,y3(t)+sq/2);
vertex(x4(t)-sq/2,y4(t)-sq/2);
vertex(x1(t)+sq/2,y1(t)-sq/2);
endShape(CLOSE);

blendMode(REPLACE);
//String s = "Cock is one of my favorite tastes. Not only that, but balls smell amazing. It makes me go a little crazy on it to be honest. Like, I cannot get it far enough down my throat to be satisfied. I’m only satisfied when I feel those intense, powerful, salty, hot pumps of cum down my throat. When I sit back on my heels, look up at you with cum all over my mouth and slobber running down my neck, hair all fucked up and wipe my mouth with the back of my arm and ask you if I did a good job and you cannot even speak because I’ve drained all of your energy out the tip of your dick….. That’s when I’m satisfied.";
String s = "hello world!!!!!";
fill(50);
text(s, -sq/2+osc, -sq/2+osc, sq-2*osc, sq-2*osc);  // Text wraps within text box
}



float x1(float t) {
  return rand_A[1]*sin(t2*rand_B[1])+rand_A[2]*sin(t2*rand_B[2]);
}
float y1(float t) {
  return rand_A[3]*sin(t2*rand_B[3])+rand_A[4]*sin(t2*rand_B[4]);
}


float x2(float t) {
  return rand_A[5]*sin(t2*rand_B[5])+rand_A[6]*sin(t2*rand_B[6]);
}
float y2(float t) {
  return rand_A[7]*sin(t2*rand_B[7])+rand_A[8]*sin(t2*rand_B[8]);
}


float x3(float t) {
  return rand_A[9]*sin(t2*rand_B[9])+rand_A[10]*sin(t2*rand_B[10]);
}
float y3(float t) {
  return rand_A[11]*sin(t2*rand_B[11])+rand_A[12]*sin(t2*rand_B[12]);
}


float x4(float t) {
  return rand_A[13]*sin(t2*rand_B[13])+rand_A[14]*sin(t2*rand_B[14]);
}
float y4(float t) {
  return rand_A[15]*sin(t2*rand_B[15])+rand_A[0]*sin(t2*rand_B[0]);
}
