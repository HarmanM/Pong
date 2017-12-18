
function Ball() {
  this.x = round(random(400, 500));
  this.y = round(random(50, 500));
  this.xspeed = 3;
  this.yspeed = 3;

  var rand = round(random(2));
  if (rand == 0) {
    this.xspeed *= -1;
  } else if (rand == 1) {
    this.yspeed *= -1;
  } else {
    this.xspeed *= -1;
    this.yspeed *= -1;
  }

  this.show = function() {
    ellipse(this.x, this.y, 15, 15);
  }

  this.update = function() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }

  this.collidePlayer = function() {
    if(this.x <= (player1.x + 8) && (this.y >= player1.y) && (this.y <= (player1.y + 50))) {
      this.xspeed *= -1;
      this.xspeed += 1;
    } else if (this.x >= (player2.x - 8) && (this.y >= player2.y) && this.y <= (player2.y + 50)) {
        this.xspeed *= -1;
        this.xspeed -= 1;

  }
}

  this.collideWall = function() {
    if (this.x <= 0) {
      player2score++;
      this.newball();


    } else if (this.x >= width) {
      player1score++;
      this.newball();
    }

    if (this.y <= 0) {
      this.yspeed *= -1;
      this.yspeed += 0.5;
    } else if (this.y >= height) {
      this.yspeed *= -1;
      this.yspeed -= 0.5;
    }

  }



  this.newball = function() {
    if (player1score < 5 && player2score < 5) {
      if (this.x > 890) {
        this.x = round(random(450, 500));
        this.y = round(random(50, 500));
        this.xspeed = -3;
        this.yspeed = -3;

      }
      else if(this.x < 10) {
        this.x = round(random(400, 450));
        this.y = round(random(50, 500));
        this.xspeed = 3;
        this.yspeed = 3;

      }

    } else {
      textSize(60);
      var endGame = "";
      if (player1score == 5) {
        endGame = "Player 1 wins!"
        noLoop();
      } else {
        endGame = "Player 2 wins!"
        noLoop();
      }
      fill(255);
      text(endGame, 250, 250);
    }
  }
}
