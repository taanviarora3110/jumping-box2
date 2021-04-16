var canvas;
var music;
var box,surface1,surface2,surface3,surface4;
var edge1,edge2,edge3,edge4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    //create 4 different surfaces
    
    surface1 = createSprite(700, 570,200,50);
    surface1.shapeColor = "orange";
    surface1.debug = true;
  surface2 = createSprite(500, 570,200,50);
    surface2.shapeColor = "blue";
    surface2.debug = true;
    surface3 = createSprite(300, 570,200,50);
    surface3.shapeColor = "green";
    surface3.debug = true;
  surface4 = createSprite(100, 570,200,50);
    surface4.shapeColor = "pink";
    surface4.debug = false;
  

    edge1 = createSprite(790, 600,20,1300);
    edge1.shapeColor = "black";
    edge1.debug = true;
    edge2 = createSprite(10, 600,20,1300);
    edge2.shapeColor = "black";
    edge2.debug = true;
    edge3 = createSprite(50, 600,1500,20);
    edge3.shapeColor = "black";
    edge3.debug = true;
    edge4=createSprite(750,10,1500,20);
  edge4.shapeColor = "black";
    edge4.debug = true;


    //create box sprite and give velocity
    box = createSprite(400,200,50,50);
    box.shapeColor = "white"
    box.debug = true;
    box.velocityX=0;
    box.velocityY=0;
   

}

function draw() {
    background(rgb(169,169,169));

   
    
    

    
    
if(surface1.isTouching(box)&&box.bounceOff(surface1)){
  box.shapeColor="orange";
  
  
  music.stop();
}
if(surface2.isTouching(box)&&box.bounceOff(surface2)){
  box.shapeColor="blue";
  
  
  music.stop();
}
if(surface3.isTouching(box)&&box.bounceOff(surface3)){
  box.shapeColor="green";
  
  
  music.stop();
}
if(surface4.isTouching(box)&&box.bounceOff(surface4)){
  box.shapeColor="pink";
  
  
  music.stop();
}

if(edge1.isTouching(box)){
  box.bounceOff(edge1);
}

if(edge2.isTouching(box)){
  box.bounceOff(edge2);
}

if(edge3.isTouching(box)){
  box.bounceOff(edge3);
}
if(edge4.isTouching(box)){
  box.bounceOff(edge4);
}
music.play();
keyPressed();

drawSprites();
}
function keyPressed(){
  if (keyDown("Right_arrow")) {
    box.velocityX=2;
    box.velocityY=0;
    
    
    }
    if (keyDown("Left_arrow")) {
      box.velocityX=-2;
    box.velocityY=0;
      }
      if (keyDown("Down_arrow")) {
        box.velocityX=0;
      box.velocityY=2;
        }
        if (keyDown("Up_arrow")) {
          box.velocityX=0;
        box.velocityY=-2;
          }
		
	}

    
    
   

    
  
    
    
  
  