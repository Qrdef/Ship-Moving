var ship;
var ship_image;
var background_images;
var background_image;
var backgroundReal
function preload(){
ship_image=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
background_image=loadImage("sea.png")

}

function setup(){
  createCanvas(400,400);
  backgroundReal=createSprite(200,200)
  backgroundReal.addImage("real background",background_image)
  backgroundReal.scale=0.5
  backgroundReal.velocityX=-5
  ship=createSprite(157,200)
  ship.addAnimation("ship moving",ship_image);
  ship.scale=0.3
 
}

function draw() {
  background("blue");
  text(mouseX+","+mouseY,mouseX,mouseY)
  if(backgroundReal.x<0)
{
backgroundReal.x=backgroundReal.width/4
}
 drawSprites();
}