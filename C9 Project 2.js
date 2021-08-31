var box;


function setup() {
  createCanvas(400,400);
  box = createSprite (200,200,200,200);
 
  
}

function draw() 
{
  background("yellow");
  drawSprites ();

  if (keyIsDown(RIGHT_ARROW)) {
     box.position.x = box.position.x +5; 


     box . shapeColor = "orange";
  }

  if (keyIsDown(LEFT_ARROW)) {
    box.position.x = box.position.x -5;


    box . shapeColor = "red";
  }

  if (keyIsDown(UP_ARROW)) {
    box.position.y = box.position.y -5;


    box . shapeColor = "green"
  }

  if (keyIsDown(DOWN_ARROW)) {
    box.position.y = box.position.y +5;


    box . shapeColor = "purple"
  }

    
  
    



}