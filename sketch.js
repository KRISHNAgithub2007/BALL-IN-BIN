
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

var ground;

var b1;
var b2;
var b3;

var engine, world;

function preload()
{
	
}

function setup() {
	createCanvas(1365, 652);


	var balloptions=
	{
		isStatic : false,
		restitution : 1,
		friction : 0.05,
		density : 1.2

	}

	var groptions=
	{
		isStatic: true,
		density : 1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground=Bodies.rectangle(682,614,1365,20,groptions);
	World.add(world,ground);

	ball= Bodies.rectangle(100,600,10,10,balloptions);
	World.add(world,ball);
	
	b1=Bodies.rectangle(780,563,20,100,groptions);
	World.add(world,b1);

	b2=Bodies.rectangle(1000,563,20,100,groptions);
	World.add(world,b2);

	b3=Bodies.rectangle(890,610,200,20,groptions);
	World.add(world,b3);

	//Engine.run(engine);
  
}


function draw() {
  
  background("yellow");
  
Engine.update(engine);

	ballf();

	bin();

  rectMode(CENTER);

  fill("brown");
  rect(ground.position.x,ground.position.y+10,1365,20);

//console.log(ball.position.x);
  drawSprites();
 
}

 function ballf() {

  ellipseMode(CENTER);

  fill("red");
  circle(ball.position.x,ball.position.y,30);

  if(keyWentDown("space"))
  {
	  Body.applyForce( ball, {x: ball.position.x, y: ball.position.y}, {x: 7, y: -5});
  }

  
}

function bin(){

	rectMode(CENTER);

	fill("blue");
	
	rect(b1.position.x,b1.position.y,20,100);
	rect(b2.position.x,b2.position.y,20,100);
	rect(b3.position.x,b3.position.y,200,20);

	rectMode(CENTER);
}


