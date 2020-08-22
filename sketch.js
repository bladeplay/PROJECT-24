const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var planks,planks2,bottom_planks;
var ball,Ball;
var bottom;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
   
	engine = Engine.create();
	world = engine.world;
var option={
	isStatic:true
}
 bottom=Bodies.rectangle(width,height,2000,2000,option);
 var options={
	 
	restitution:0.2,
	friction:0.5,
	density:1.2
}
     World.add(world,bottom);

	
	//Create the Bodies Here.
	//ball =Bodies.circle(100,300,5,options);
	//World.add(world,ball);
	
   bottom_planks =createSprite(600,665,200,20);
   bottom_planks.shapeColor=("red");
	planks =createSprite(700,640,20,50);
	planks.shapeColor=("red");
	planks2 =createSprite(500,640,20,50);
	planks2.shapeColor=("red");
	trash=new Ball(200,200,20)
//paper=new ball(200,200);
   width
	Engine.run(engine);
	console.log(ball);
	console.log(bottom);
    console.log(keyCode);
}


function draw() {
	background("black");
  rectMode(CENTER);
  //console.log(ball.position.x);

	rect(bottom.position.x,bottom.position.y,2000,20);
	//circle (ball.position.x,ball.position.y,20,20);
   trash. display();
  drawSprites();
  ball.position.y=ball.position.y-0.8;
}
function keypressed() {
	if(keyCode===UP_ARROW){
    Bodies.applyForce(ball.Bodies,ball.Bodies.position.y,{x:100,y:-100});
	//circle (ball.position.x,ball.position.y,20,20);
	//ball.velocity.y=-2;
	}
}