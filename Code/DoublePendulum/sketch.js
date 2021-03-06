
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let r1 = getRndInteger(105,125);
let r2 = getRndInteger(105,125);
let m1 = getRndInteger(5,15);
let m2 = getRndInteger(5,15);
let a1 = 0;
let a2 = 0;
let a1_v = 0;
let a2_v = 0;
let g = getRndInteger(1,10)/10

let px2 = -1;
let py2 = -1;
let cx, cy;

let buffer;

function setup() {
  var cnv = createCanvas(500, 500);
  a1 = PI/getRndInteger(1,4);
  a2 = PI/getRndInteger(1,4)
  cx = width / 2;
  cy = 250;
  buffer = createGraphics(width, height);
  buffer.background(255);
  buffer.translate(cx, cy);
  cnv.position(500,175);
}

function draw() {
  background(255);
  imageMode(CORNER);
  image(buffer, 0, 0, width, height);

  let num1 = -g * (2 * m1 + m2) * sin(a1);
  let num2 = -m2 * g * sin(a1 - 2 * a2);
  let num3 = -2 * sin(a1 - a2) * m2;
  let num4 = a2_v * a2_v * r2 + a1_v * a1_v * r1 * cos(a1 - a2);
  let den = r1 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));
  let a1_a = (num1 + num2 + num3 * num4) / den;

  num1 = 2 * sin(a1 - a2);
  num2 = (a1_v * a1_v * r1 * (m1 + m2));
  num3 = g * (m1 + m2) * cos(a1);
  num4 = a2_v * a2_v * r2 * m2 * cos(a1 - a2);
  den = r2 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));
  let a2_a = (num1 * (num2 + num3 + num4)) / den;

  translate(cx, cy);
  stroke(0);
  strokeWeight(2);

  let x1 = r1 * sin(a1);
  let y1 = r1 * cos(a1);

  let x2 = x1 + r2 * sin(a2);
  let y2 = y1 + r2 * cos(a2);

  line(0, 0, x1, y1);
  fill(150);
  ellipse(x1, y1, m1, m1);

  line(x1, y1, x2, y2);
  fill(150);
  ellipse(x2, y2, m2, m2);

  a1_v += a1_a;
  a2_v += a2_a;
  a1 += a1_v;
  a2 += a2_v;

  buffer.stroke(getRndInteger(0,255),getRndInteger(0,255),getRndInteger(0,255));
  if (frameCount > 1) {
    buffer.line(px2, py2, x2, y2);
  }

  px2 = x2;
  py2 = y2;
}
