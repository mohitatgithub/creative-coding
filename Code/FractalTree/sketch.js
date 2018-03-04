var angle = 0;


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function setup() {
  var cnv = createCanvas(800,400);
  cnv.position(350,350);
}

function draw() {
  background(255);
  translate(400, height);
  //strokeWeight(1.2);
  var color = getRndInteger(0, 255);
  branch(130);
}

function branch(len) {
  angle = PI/getRndInteger(3,9);
  if(len>2){
    strokeWeight(1.2); stroke(0,128,0);
  }
  else{strokeWeight(.2); stroke(128,0,128);}
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 1) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }
  frameRate(.5);
}
