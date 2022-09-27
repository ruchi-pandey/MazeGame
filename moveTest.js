
var imageRepo= new function(){

  this.player =new Image();
  this.player.src='https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png';
  
  this.bg =new Image();
  this.bg.src="maze.jpg";
  
  }

  

  let player = document.getElementById('player');
  let ctx=player.getContext('2d');

  let bgMaze = document.getElementById('background');
  let bgCtx = bgMaze.getContext('2d');
  
  
  const scale = 1.5;
  const width = 16;
  const height = 18;
  const scaledHeight = scale*height;
  const scaledWidth = scale*width;
  
  function background(){
    bgCtx.drawImage(imageRepo.bg,0,0)
  }

  function drawFrame(frameX, frameY, canvasX, canvasY){
      ctx.drawImage(imageRepo.player,
                   frameX* width, frameY * height, width, height,
                   canvasX, canvasY, scaledWidth, scaledHeight);
    }
  
  function init(){
    this.background();
    this.drawFrame(0,0,165,39)
    this.playerMovement();
  }
  
  xPos=165;
  yPos=50;
  
  document.addEventListener('keydown',playerMovement) 
  
  function playerMovement(e){
    var x = e.keyCode;
    
    if (x == 37 || 38 || 39 || 40){
      this.x=xPos;
      this.y=yPos;
      ctx.clearRect(this.x, this.y, player.width, player.height);
      console.log(this.x,this.y)      
  
    if(x == 39){
      //right
      xPos+=16;
    }
  
    if(x == 37){
      //left
      xPos-=16;
    }
  
    if(x == 38){
      //up
      yPos-=9;
    }
  
    if(x == 40){
      //down
      e.preventDefault();
      yPos+=9;
    }
    console.log(x);
    drawFrame(0,0, xPos, yPos);
  };
}
//ctx.clearRect(player.x, player.y, player.width, player.height);
  document.onkeydown = playerMovement;
  //document.onkeyup = playerMovement
  