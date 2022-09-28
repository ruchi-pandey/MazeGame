
var imageRepo= new function(){

  this.player =new Image();
  this.player.src='https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png';
  
  
  //this.bg.src="maze.jpg";
  let bgURL="maze.jpg";
  this.bg =new Image();
  this.bg.src=bgURL;
  //https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image
  this.bg.crossOrigin = "Anonymous";
  
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
    this.drawFrame(0,0,420,224)
    this.playerMovement();
  }
  
  xPos=420;
  yPos=224;
  
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
      xPos+=2;
    }
  
    if(x == 37){
      //left
      xPos-=2;
    }
  
    if(x == 38){
      //up
      yPos-=2;
    }
  
    if(x == 40){
      //down
      e.preventDefault();
      yPos+=2;
    }
    
    drawFrame(0,0, xPos, yPos);
    mazeCollision();
    

  };
}
  document.onkeydown = playerMovement;

  function mazeCollision(){

    var pixels = bgCtx.getImageData(0,0,xPos,yPos);
    //##fbfb05
    //rgba(238,170,51,1)
    console.log(pixels);

    var spriteSpot = {
      x:xPos,
      y:yPos,
      width:16*1.5,
      height:18*1.5,
      draw: drawFrame(0,0,420,224),
      touchingColor: function(r,g,b){
        for(var i=0;i<pixels.data.length;i+=4){
          if(
              r== 238 &&
              g == 170 &&
              b == 51 
              
          ){
            ctx.clearRect(this.x, this.y, player.width, player.height);
          }
      }
      drawFrame(0,0,420,224);

    }

    //if ()


  };

/*
var box = {
    x: 5,
    y: 19,
    width: 10,
    height: 5,
    draw: function(ctx){...draw Box on context "ctx"},
    touchingColor: function(ctx,r,g,b){
        var data = ctx.getImageData(this.x,this.y,this.width,this.height);
        for(var i=0;i<data.length;i+=4){
            if(
                data[i+0]==r&&
                data[i+1]==g&&
                data[i+2]==b
            ){
                return true;
            }
        }
        return false;
    }
};


    //TUTORIAL :- https://www.youtube.com/watch?v=5tMX53tp1Io&t=390s

    

      for(var i=0, len=pixels.data.length;i<len; i+=4){

        var red = pixels.data[i];
        var green = pixels.data[i+1];
        var blue = pixels.data[i+2];        
    }

    */
  }

  /*

  */

  //python -m http.server
  