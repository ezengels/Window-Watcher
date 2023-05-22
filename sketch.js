let capture;

function setup() {
  noCursor();
  createCanvas(488, 320);
  capture = createCapture(VIDEO);
  capture.size();
  capture.hide();
}

function draw() {
  background(255);
  image(capture, 0, 0, 488, 320);
  filter(THRESHOLD);

  ellipseMode(RADIUS);
  noStroke();
  fill(mouseX, mouseY, 60);
  ellipse(mouseX, mouseY, 100, 100, 100);

  ellipseMode(CENTER);
  noStroke();
  fill(mouseX, 60, mouseY);
  ellipse(mouseX, mouseY, 100, 50);

  ellipseMode(CENTER);
  noStroke();
  fill(60, mouseX, mouseY);
  ellipse(mouseX, mouseY, mouseX - pmouseX + 40);

  fill(256, 256, 256);
  text(pmouseX - mouseX, mouseX - 36, mouseY + 2);
  fill(256, 256, 256);
  text(pmouseY - mouseY, mouseX + 30, mouseY + 2);
}