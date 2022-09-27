
var imageRepo= new function(){

this.player =new Image();
this.player.src='https://opengameart.org/sites/default/files/Green-Cap-Character-16x18.png';

this.bg =new Image();
this.bg.src="maze.jpg";

}

let player = document.getElementById('player');
let ctx=player.getContext('2d');

const scale = 1.5;
const width = 16;
const height = 18;
const scaledHeight = scale*height;
const scaledWidth = scale*width;

function drawFrame(frameX, frameY, canvasX, canvasY){
  ctx.drawImage(imageRepo.player,
               frameX* width, frameY * height, width, height,
               canvasX, canvasY, scaledWidth, scaledHeight);
}

function background(){
  ctx.drawImage(imageRepo.bg,0,0)
}

/*
img - imgrepo.img
sx - fX*w - o
sy - fY*h - o
swidth - w - o
sheight - h - o
x - cX - 160
y - cY - 35
width - sW - o
height - sH - o
*/

function init(){
  this.background();
  this.drawFrame(0,0, 165, 35);
  this.playerMovement();
  
}

xPos=165;
yPos=50;

document.addEventListener('keydown',playerMovement) 

function playerMovement(e){
  var x = e.keyCode;
  drawFrame(0,0, xPos, yPos);
 

  if(x == 39){
  
    xPos+=10;
  }

  if(x == 37){
    
    xPos-=10;
  }

  if(x == 38){
    yPos-=10;
  }

  if(x == 40){
    yPos+=10;
  }
  console.log(x);
}

document.onkeydown = playerMovement;
