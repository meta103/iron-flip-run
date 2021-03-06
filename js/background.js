function Background(ctx,canvas){
  this.canvasWidth = canvas.width;
  this.ctx = ctx;
  this.bgImage = new Image();
  this.backgroundChoices = ["./images/low/background-blue.png","./images/low/background-green.png","./images/low/background-yellow.png","./images/low/background-orange.png","./images/low/background-fux.png","./images/low/background-red.png"];
  this.bgImage.src = this.getRandomImage();
  this.speed = 2;
  this.y = 0;
  this.x = 0;
  this.strobeInterval = undefined;
}

Background.prototype._draw = function () {
  this.x -= this.speed;
  this.ctx.drawImage(this.bgImage, this.x, this.y);
  this.ctx.drawImage(this.bgImage, this.x+this.canvasWidth-3, this.y);

  if (this.x <= -this.canvasWidth){
    this.x = 0;
  }
}

Background.prototype.getRandomImage = function () {
  var randomNum = Math.floor(Math.random() * this.backgroundChoices.length);
  return this.backgroundChoices[randomNum];
}

Background.prototype._change = function () {
  this.bgImage.src = this.getRandomImage();
  this._draw();
}

Background.prototype._strobe = function () {
  if (!this.strobeInterval) {
    this.strobeInterval = setInterval(this._change.bind(this),100);
  }
}

Background.prototype._clearStrobe = function () {
  if (this.strobeInterval) {
    clearInterval(this.strobeInterval)
    this.strobeInterval = undefined;
  }
}