let centerX;
let centerY;
let orbitRadius = 120;
let angle = 0;
let angularSpeed = 1;
let isPaused = false;

function setup() {
  createCanvas(600, 450);
  angleMode(DEGREES);
  centerX = width / 2;
  centerY = height / 2;
}

function draw() {
  background(20, 25, 35);

  if (!isPaused) {
    angle = (angle + angularSpeed) % 360;
  }

  let objectX = centerX + orbitRadius * cos(angle);
  let objectY = centerY + orbitRadius * sin(angle);

  noFill();
  stroke(80, 100, 130);
  ellipse(centerX, centerY, orbitRadius * 2, orbitRadius * 2);
  stroke(120, 200, 255);
  line(centerX, centerY, objectX, objectY);

  noStroke();
  fill(255, 200, 50);
  ellipse(centerX, centerY, 24, 24);
  fill(80, 220, 255);
  ellipse(objectX, objectY, 20, 20);

  fill(255);
  textSize(13);
  textAlign(LEFT, TOP);
  text("Controls: [CLICK / SPACE] Pause | [UP/DOWN or W/S] Speed | [RIGHT] +1° paused", 15, 15);

  fill(180, 230, 255);
  text("Angle: " + angle.toFixed(1) + "° | Radius: " + orbitRadius + "px | Speed: " + angularSpeed + "°/frame", 15, 38);
  text("Position -> X: " + objectX.toFixed(1) + " , Y: " + objectY.toFixed(1), 15, 58);
}

function keyPressed() {
  if (key === ' ') {
    isPaused = !isPaused;
  } else if (keyCode === UP_ARROW || key === 'w' || key === 'W') {
    angularSpeed += 1;
  } else if (keyCode === DOWN_ARROW || key === 's' || key === 'S') {
    angularSpeed = max(1, angularSpeed - 1);
  } else if (keyCode === RIGHT_ARROW && isPaused) {
    angle = (angle + 1) % 360;
  }
}

function mousePressed() {
  if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    isPaused = !isPaused;
  }
}
