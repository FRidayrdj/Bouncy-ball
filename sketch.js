const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine, world;
var ground;
var ball;
function setup()
{
  createCanvas(800,400);
  engine= Engine.create();
  world=engine.world;

  var option = 
  {
    isStatic: true
  }
  ground= Bodies.rectangle(400,390,800,20, option);
  World.add(world, ground);

  var ball_option= 
  {
    restitution: 1
  }

  ball= Bodies.circle(400,200,20,ball_option);
  World.add(world,ball);
  console.log(ground);
}

function draw() 
{
  background(0); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y,800,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20,20);
  
}