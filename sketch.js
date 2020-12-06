var bob;
var roof;
var rope;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new Bob(200,450,40);
	bob2 = new Bob(250,450,40);
	bob3 = new Bob(300,450,40);
	bob4 = new Bob(350,450,40);
	bob5 = new Bob(400,450,40);
	roof = new Roof(320,300,450,20);
	rope1 = new Rope (bob1.body,roof.body, );
	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  roof.display()
 
  
  drawSprites();
 
}



