const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball
 function setup(){
  createCanvas(displayWidth,displayHeight);
  engine = Engine.create()
  world = engine.world
 ball =  new Ball(200,200,40)
 ground = new Ground(width/2,height- 300,width,20) 
 box1 = new Box(width/2,height- 400);
 box2 = new Box(width/2- 50,height- 400);
 box3 = new Box(width/2- 100,height- 400);
 box4 = new Box(width/2,height- 460);
 box5 = new Box(width/2-50,height- 460);
 box6 = new Box(width/2-100,height- 460);
 box7 = new Box(width/2,height- 520);
 box8 = new Box(width/2-50,height- 520);
 box9 = new Box(width/2-100,height- 520);
 slingshot = new SlingShot(ball.body,{x:400,y:300})
 }
 function draw(){
   background("skyBlue")
Engine.update(engine)
ground.display();
ball.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
slingshot.display();
 }
 function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}
 