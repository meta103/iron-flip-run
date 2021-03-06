function Player(canvas,ctx){
  this.canvas = canvas;
  this.ctx = ctx;
  this.color = "#fff";
  this.playerPositionY = "over";
  this.playerPositionX = 200;
  this.alpha = 1;
  this.intervalFade = undefined;
  this.playerSound = new Sound("./audio/blip.wav");
  this.score = new Score();
}

Player.prototype.flip = function () {
  this.playerSound._play();
  if(this.playerPositionY === "over"){
    this.playerPositionY = "under";
  }
  else{
    this.playerPositionY = "over";
  }
}

Player.prototype._drawPlayer = function () {
  this.ctx.fillStyle = this.color;
  if(this.playerPositionY === "over"){
    this.ctx.fillRect(this.playerPositionX,this.canvas.height/2-45,30,30);
    this.ctx.fillStyle = '#fff';

    //this.ctx.fillRect(200,100,30,30);
    
    this.ctx.fillStyle = '#000';
    this.ctx.fillRect(this.playerPositionX,this.canvas.height/2-35,2,1);
    this.ctx.fillRect(this.playerPositionX+28,this.canvas.height/2-35,2,1)
    this.ctx.rect(this.playerPositionX+16,this.canvas.height/2-39,2,2);
    
    this.ctx.fillRect(this.playerPositionX+1,this.canvas.height/2-39,13,13);
    this.ctx.fillRect(this.playerPositionX+16,this.canvas.height/2-39,13,13);
    
    ctx.beginPath();
    this.ctx.strokeStyle = "#000";
    this.ctx.rect(this.playerPositionX+1,this.canvas.height/2-39,13,13);
    this.ctx.rect(this.playerPositionX+16,this.canvas.height/2-39,13,13)
    ctx.stroke();
  
    this.ctx.fillStyle = '#fff';
    this.ctx.fillRect(this.playerPositionX+2,this.canvas.height/2-38,11,11);
    this.ctx.fillRect(this.playerPositionX+17,this.canvas.height/2-38,11,11)
    this.ctx.fillStyle = "#000";
    this.ctx.fillRect(this.playerPositionX+6,this.canvas.height/2-34,3,3);
    this.ctx.fillRect(this.playerPositionX+21,this.canvas.height/2-34,3,3);
  }
  else{
    this.ctx.fillRect(this.playerPositionX,this.canvas.height/2+15,30,30);
    this.ctx.fillStyle = '#000';
    this.ctx.fillRect(this.playerPositionX,this.canvas.height/2+35,2,1);
    this.ctx.fillRect(this.playerPositionX+28,this.canvas.height/2+35,2,1)
    this.ctx.rect(this.playerPositionX+16,this.canvas.height/2+39,2,2);
    
    this.ctx.fillRect(this.playerPositionX+1,this.canvas.height/2+29,13,13);
    this.ctx.fillRect(this.playerPositionX+16,this.canvas.height/2+29,13,13);
    
    this.ctx.fillStyle = '#fff';
    this.ctx.fillRect(this.playerPositionX+2,this.canvas.height/2+30,11,11);
    this.ctx.fillRect(this.playerPositionX+17,this.canvas.height/2+30,11,11);

    ctx.beginPath();
    this.ctx.strokeStyle = "#000";
    this.ctx.rect(this.playerPositionX+1,this.canvas.height/2+29,13,13);
    this.ctx.rect(this.playerPositionX+16,this.canvas.height/2+29,13,13)
    ctx.stroke();

      
    this.ctx.fillStyle = "#000";
    this.ctx.fillRect(this.playerPositionX+6,this.canvas.height/2+34,3,3);
    this.ctx.fillRect(this.playerPositionX+21,this.canvas.height/2+34,3,3);
  }
}
