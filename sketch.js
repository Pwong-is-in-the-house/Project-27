

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
const Render= Matter.Render;
var bobObj,bobObj2, bobObj3, bobObj4, bobObj5;
var roofObj;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(1600, 900);


	engine = Engine.create();
	world = engine.world;
	roofObj=new Roof(width/2, height/4, width/7,20)
bobDiameter=40;
	bobObj=new Bob(200,450,40);
	bobObj2=new Bob(200,450,40);
	bobObj3=new Bob(200,450,40);
	bobObj4=new Bob(200,450,40);
	bobObj5=new Bob(200,450,40);
	rope1=new Rope(bobObj.body,roofObj.body,-bobDiameter*2,0)
	rope2=new Rope(bobObj2.body,roofObj.body,-bobDiameter*2,0)
	rope3=new Rope(bobObj3.body,roofObj.body,-bobDiameter*2,0)
	rope4=new Rope(bobObj4.body,roofObj.body,-bobDiameter*2,0)
	rope5=new Rope(bobObj5.body,roofObj.body,-bobDiameter*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(22);
  bobObj.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();
  roofObj.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}
function keyPressed(){
if(keyCode=== UP_ARROW){
	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45})
}	
}
