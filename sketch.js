var player1score = 0;
var player2score = 0;
var player1;
var player2;
var ball;



function setup() {
  createCanvas(900, 500);
  player1 = new Player(2, (height / 2) - 50, 8, 50);
  player2 = new Player(width - 11, (height / 2) - 50, 8, 50);
  ball = new Ball();


}

function draw() {
  background(51);
  middleLines();
  player1.show();
  player2.show();
  ball.update();
  ball.collideWall();
  ball.collidePlayer();
  ball.show();
  drawScore();



  if (keyIsDown(UP_ARROW)) {
    if (player2.y > 0) {
      player2.dir(-5);
    }
  }

  if (keyIsDown(DOWN_ARROW)) {
    if (player2.y < height - 50) {
      player2.dir(5);
    }
  }

  if (keyIsDown(87)) {
    if (player1.y > 0) {
      player1.dir(-5);
    }
  }
  if (keyIsDown(83)) {
    if (player1.y < height - 50) {
      player1.dir(5);
    }
  }
}

function middleLines() {
  var middle = width / 2;
  var lineY = 0;
  while (lineY <= height) {
    line(middle, lineY, middle, lineY + 20);
    stroke(255);
    lineY += 30;
  }
}

function drawScore() {
  var yPoint = 75;
  var player1Point = width / 4;
  var player2Point = player1Point * 3;
  textSize(56);
  fill(255);
  text(player1score, player1Point, yPoint);
  text(player2score, player2Point, yPoint);
}
