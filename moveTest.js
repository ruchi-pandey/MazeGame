
var imageRepo= new function(){

  this.player =new Image();
  let spriteSheet="spriteSheet.png"
  this.player.src=spriteSheet;
  this.player.crossOrigin = "Anonymous"; 
  
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
  xPos=418;
  yPos=224;
  
  
  function background(){
    bgCtx.drawImage(imageRepo.bg,0,0)
  }

  function drawFrame(frameX, frameY, canvasX, canvasY){
    
    //drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    ctx.drawImage(imageRepo.player,
                   frameX* width, frameY * height, width, height,
                   canvasX, canvasY, scaledWidth, scaledHeight); 
    spriteBox();                
    }

  function spriteBox(){

    
    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.rect(xPos, yPos, 25, 28);
    //ctx.stroke();
    
    
  }
  
  function init(){
    this.background();
    this.drawFrame(0,0,418,224)
    this.playerMovement();
  }
  
  
  
  document.addEventListener('keydown',playerMovement) 
  
  function playerMovement(e){
    var x = e.keyCode;
    
    if (x == 37 || 38 || 39 || 40){
      this.x=xPos;
      this.y=yPos;
      
      ctx.clearRect(0, 0, player.width, player.height);
      //mazeCollision();
      /*
      if(mazeCollision()){
        console.log("Maze Detected!"); 
      }else{
        console.log("Maze not Detected"); 
      }
*/
      //console.log(this.x,this.y)      
  
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
    
    


  };
}
  document.onkeydown = playerMovement;
  
/*
  function mazeCollision(){

    var spritePixels= bgCtx.getImageData(xPos,yPos,25,28);
  console.log(spritePixels);
  var pixels = bgCtx.getImageData(xPos,yPos,bgMaze.width,bgMaze.height); 


    this.x=xPos;
    this.y=yPos;
  
    for (var i = 0, len = pixels.data.length;i<len;i+=4){

      var r = pixels.data[i];
      var g = pixels.data[i+1];
      var b = pixels.data[i+2];

      return (console.log(r,g,b));

    }
    //rgb=bgImgData();
  }
  
    

      for (var j = 0, len2 = spritePixels.data.length;j<len2;j+=4){

        if(
          spritePixels.data[j]==r &&
          spritePixels.data[j+1]==g &&
          spritePixels.data[j+2]==b
        ){

          //ctx.clearRect(this.x, this.y, player.width, player.height);
          //drawFrame(0,0,420,224);
          console.log(len)
          return true;         
        }
        console.log(this.x,this.y);
        console.log(spritePixels.data[j]);
        return false;
       }             
    }
  }
    for (var i =0, len = pixels.data.length;i<len;i+=4){

      var r = pixels.data[i];
      var g = pixels.data[i+1];
      var b = pixels.data[i+2];

    }
    */