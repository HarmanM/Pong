function Player(x, y) {
  this.x = x;
  this.y = y;

  this.dir = function(y) {
    this.y += y;
  }


  this.show = function() {
    rect(this.x, this.y, 8, 50);
  }



}
