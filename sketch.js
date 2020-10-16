const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var e,world,ground;
var ball;

function setup() {
  createCanvas(400,400);
  var ob_options = {
    isStatic : true
  }
   e= Engine.create();
   world= e.world;
   ground= Bodies.rectangle(200,390,400,5,ob_options);
   World.add(world,ground);

   var ball_options = {
    restitution : 1.0
  }
   ball= Bodies.circle(200,200,50,ball_options);
   World.add(world,ball);
}



function draw() {
  background(255,255,255);
  rectMode(CENTER);

  
  Engine.update(e);
  rect(ground.position.x,ground.position.y,400,5);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50,50);

  drawSprites();

  }

  