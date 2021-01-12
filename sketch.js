var tom, tomMoving, tomSitting, tomStopped;
var jerry, jerryMoving, jerryStanding, jerryTeasing;
var bg, bgImage;

function preload() {

   tomStopped = loadAnimation("images/tomFour.png");        
   tomMoving = loadAnimation("images/tomTwo.png", "images/tomThree.png");
   tomSitting = loadAnimation("images/tomOne.png");

   jerryMoving = loadAnimation("images/jerryTwo.png", "images/jerryThree.png");
   jerryStanding = loadAnimation("images/jerryFour.png");
   jerryTeasing = loadAnimation("images/jerryOne.png")

   bgImage = loadImage("images/garden.png");
}

function setup() {
    createCanvas(1000,800);
    
    tom = createSprite(920,450,20,20);
    tom.addAnimation("catMoving",tomStopped);
    tom.scale = 0.2;
    //tom.setCollider("rectangle", -10, 0, 650, 900);

    bg = createSprite(500, 400, 100, 100);
    bg.addImage(bgImage);
    bg.scale = 2;
    bg.depth = tom.depth - 1; 

    jerry = createSprite(80,450,20,20);
    jerry.addAnimation("mouseMoving", jerryTeasing);
    jerry.scale = 0.2;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(tom.x - jerry.x <= (tom.width - jerry.width)/2 + 120) {
      tom.velocityX = 0;
      tom.addAnimation("stopped", tomSitting);
      tom.changeAnimation("stopped");

      jerry.addAnimation("mouseStanding", jerryStanding);
      jerry.changeAnimation("mouseStanding");
    }


    keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  
  if(keyCode === LEFT_ARROW) {
      tom.velocityX = -5;
      tom.addAnimation("goingToMove", tomMoving);
      tom.changeAnimation("goingToMove"); 

      jerry.addAnimation("mouseToMove", jerryMoving)
      jerry.changeAnimation("mouseToMove");
    
  }
}
