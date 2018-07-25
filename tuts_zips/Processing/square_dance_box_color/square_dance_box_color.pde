int t;
float t2;
float sq = 300;
int opacity = 255;
int gl = 5000;

float A_max = 50;

float pad = A_max;

int[] col1 = {255, 80, 0};
int[] col2 = {228, 104, 242};
int[] col3 = {25, 214, 79};

float[] A_rand = new float[16];
int[] B_rand = new int[16];

void setup() {
  size(500, 500);
  for (int i = 0; i < A_rand.length; i++) {
  A_rand[i] = random(-A_max,A_max);
}
  for (int i = 0; i < B_rand.length; i++) {
  B_rand[i] = (int) random(1,gl/1500);
}
}

void draw() 
{
noStroke();
background(0);
translate(width/2, height/2);
point(x1(t),y1(t));
blendMode(ADD);

t = millis();
t2 = 2*PI*t/gl;


fill(col1[0],col1[1],col1[2],opacity);
beginShape();
vertex(x3(t)+sq/2,y3(t)+sq/2);
vertex(x4(t)-sq/2,y4(t)+sq/2);
vertex(x1(t)-sq/2,y1(t)-sq/2);
vertex(x2(t)+sq/2,y2(t)-sq/2);
endShape(CLOSE);

fill(col2[0],col2[1],col2[2],opacity);
beginShape();
vertex(x1(t)+sq/2,y1(t)+sq/2);
vertex(x2(t)-sq/2,y2(t)+sq/2);
vertex(x3(t)-sq/2,y3(t)-sq/2);
vertex(x4(t)+sq/2,y4(t)-sq/2);
endShape(CLOSE);

fill(col3[0],col3[1],col3[2],opacity);
beginShape();
vertex(x2(t)+sq/2,y2(t)+sq/2);
vertex(x3(t)-sq/2,y3(t)+sq/2);
vertex(x4(t)-sq/2,y4(t)-sq/2);
vertex(x1(t)+sq/2,y1(t)-sq/2);
endShape(CLOSE);

blendMode(REPLACE);
String s = "Cock is one of my favorite tastes. Not only that, but balls smell amazing. It makes me go a little crazy on it to be honest. Like, I cannot get it far enough down my throat to be satisfied. I’m only satisfied when I feel those intense, powerful, salty, hot pumps of cum down my throat. When I sit back on my heels, look up at you with cum all over my mouth and slobber running down my neck, hair all fucked up and wipe my mouth with the back of my arm and ask you if I did a good job and you cannot even speak because I’ve drained all of your energy out the tip of your dick….. That’s when I’m satisfied.";
fill(50);
text(s, -sq/2+pad, -sq/2+pad, sq-2*pad, sq-2*pad);  // Text wraps within text box
}



float x1(float t) {
  return A_rand[1]*sin(t2*B_rand[1])+A_rand[2]*sin(t2*B_rand[2]);
}
float y1(float t) {
  return A_rand[3]*sin(t2*B_rand[3])+A_rand[4]*sin(t2*B_rand[4]);
}


float x2(float t) {
  return A_rand[5]*sin(t2*B_rand[5])+A_rand[6]*sin(t2*B_rand[6]);
}
float y2(float t) {
  return A_rand[7]*sin(t2*B_rand[7])+A_rand[8]*sin(t2*B_rand[8]);
}


float x3(float t) {
  return A_rand[9]*sin(t2*B_rand[9])+A_rand[10]*sin(t2*B_rand[10]);
}
float y3(float t) {
  return A_rand[11]*sin(t2*B_rand[11])+A_rand[12]*sin(t2*B_rand[12]);
}


float x4(float t) {
  return A_rand[13]*sin(t2*B_rand[13])+A_rand[14]*sin(t2*B_rand[14]);
}
float y4(float t) {
  return A_rand[15]*sin(t2*B_rand[15])+A_rand[0]*sin(t2*B_rand[0]);
}