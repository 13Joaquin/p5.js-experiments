int t;
float t2;
float squa = 100;
int opacity = 255;
int gl = 1800;

float[] rand_A = new float[16];
int[] rand_B = new int[16];

void setup() {
  size(300, 300);
  for (int i = 0; i < rand_A.length; i++) {
  rand_A[i] = random(-30,30);
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
vertex(x3(t)+squa/2,y3(t)+squa/2);
vertex(x4(t)-squa/2,y4(t)+squa/2);
vertex(x1(t)-squa/2,y1(t)-squa/2);
vertex(x2(t)+squa/2,y2(t)-squa/2);
endShape(CLOSE);

fill(255,0,0,opacity);
beginShape();
vertex(x1(t)+squa/2,y1(t)+squa/2);
vertex(x2(t)-squa/2,y2(t)+squa/2);
vertex(x3(t)-squa/2,y3(t)-squa/2);
vertex(x4(t)+squa/2,y4(t)-squa/2);
endShape(CLOSE);

fill(0,255,0,opacity);
beginShape();
vertex(x2(t)+squa/2,y2(t)+squa/2);
vertex(x3(t)-squa/2,y3(t)+squa/2);
vertex(x4(t)-squa/2,y4(t)-squa/2);
vertex(x1(t)+squa/2,y1(t)-squa/2);
endShape(CLOSE);
text(t,100,100);
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