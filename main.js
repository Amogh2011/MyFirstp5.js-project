function preload() {

}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(150, 150);
  video = createCapture(VIDEO);
  video.hide();

}

function draw() {
  image(video, 230, 150, 220, 200);

  fill(0, 255, 255);
  stroke(0, 255, 0);
  circle(40, 40, 80, 80);

  fill(255, 165, 0);
  stroke(250, 0, 0);
  rect(70, 20, 525, 40);

  fill(0, 255, 255);
  stroke(0, 255, 0);
  circle(590, 40, 80, 80);

  fill(255, 165, 0);
  stroke(250, 0, 0);
  rect(18, 75, 40, 250);

  fill(0, 255, 255);
  stroke(0, 255, 0);
  circle(40, 350, 80, 80);

  fill(255, 165, 0);
  stroke(250, 0, 0);
  rect(70, 330, 525, 40);

  fill(0, 255, 255);
  stroke(0, 255, 0);
  circle(590, 350, 80, 80);

  fill(255, 165, 0);
  stroke(250, 0, 0);
  rect(570, 75, 40, 250);
}
function take_snapshot(){    
  save('student_name.png');
}