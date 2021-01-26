var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine;
var world;
var red1;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(400, 400);
	engine = Engine.create();
    world  = engine.world;
    var options ={ isStatic: true };
	rectMode(CENTER);
	
	
	packageSprite=createSprite(width/2, 100, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.15

	helicopterSprite=createSprite(width/2, 90, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.4
	

	groundSprite=createSprite(width/2, height-5, width,20);
	groundSprite.shapeColor=color("black");

	packageSprite_options = {
        restitution: 10
      }


	engine = Engine.create();
	world = engine.world;
	World.add(world,packageSprite );

	packageBody = Bodies.circle(width/2 , 110 , 5 , {restitution:3, isStatic:true});
	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
	red1 = new Red(130,350,15,70);
	red2 = new Red(250,350,15,70);
	red3 = new Red(190,375,105,15);
}




function draw() {
  rectMode(CENTER);
  background("blue");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 keyPressed();
 Engine.update(engine);
	red1.display();
	red2.display();
	red3.display();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);

    
  }
}



