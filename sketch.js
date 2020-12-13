
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObj,bobObj2, bobObj3, bobObj4, bobObj5;
var roofObj;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObj=new Bob(200,450,40);
	bobObj2=new Bob(200,450,40);
	bobObj3=new Bob(200,450,40);
	bobObj4=new Bob(200,450,40);
	bobObj5=new Bob(200,450,40);
	roofObj=new Roof(width/2,200,width,20);
	rope1=new Rope(bobObj.body,roofObj.body,-bobDiameter*2,0)
	rope2=new Rope(bobObj2.body,roofObj.body,-bobDiameter*2,0)
	rope3=new Rope(bobObj3.body,roofObj.body,-bobDiameter*2,0)
	rope4=new Rope(bobObj4.body,roofObj.body,-bobDiameter*2,0)
	rope5=new Rope(bobObj5.body,roofObj.body,-bobDiameter*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
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



