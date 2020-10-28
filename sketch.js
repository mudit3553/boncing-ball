const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world;
var s1,ground;
function setup(){
createCanvas(600,600);
engine=Engine.create();
world=engine.world;

var prop2={
  isStatic:true
}
ground=Bodies.rectangle(300,500,100,3,prop2);
World.add(world,ground);
var prop={
  restitution:1.0
  
  }
s1=Bodies.circle(200,30,40,prop);
World.add(world,s1);


}
function draw() {
background("yellow");
Engine.update(engine)
rectMode(CENTER)
rect(ground.position.x,ground.position.y,1000,3)

ellipse(s1.position.x,s1.position.y,30,20)

}