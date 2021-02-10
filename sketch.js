
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var rubber;
var hammer;
var stone;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	rubber = new Rubber(700,320,70,70);
    ground = new Ground(600,height,1200,20)
    hammer = new Hammer(810,260,300,400);
    stone= new Stone(600,600,20,20);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  rubber.display();
    ground.display();
    hammer.display();
stone.display();
  
  
 
}



