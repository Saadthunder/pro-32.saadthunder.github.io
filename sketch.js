
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;


let engine;
let world;
var blower;
var ball;
var blowerMouth;
var button;

function setup() {
  createCanvas(1200,1200);
  engine = Engine.create();
  
  world = engine.world;

  
 blower=new Blower(750,400,150,120);
 blowerMouth=new Blower(575,450,200,20);
 ball= new Ball(750,320,25);


 button = createButton('CLICK TO BLOW');
 button.position(600,900);
 button.class("blowButton")
 button.mouseClicked(blow);

}


function draw() {
  
  background(255,255,255);
  Engine.update(engine);
  blower.show();
  blowerMouth.show();
  ball.show();
  drawSprites();
    
}
function blow(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}