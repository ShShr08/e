const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
 }

function setup(){
    var canvas = createCanvas(screen.width,800);
    engine = Engine.create();
    world = engine.world;
    
    g = new GrOuNd(760,750,1600,20)
    e = new Box(900,100,70,70);
    e2 = new Box(900,30,70,70);
    e3 = new Box(900,170,70,70);
    e4 = new Box(e.body.position.x+70,e.body.position.y,70,70);
    e5 = new Box(e.body.position.x+70,e2.body.position.y,70,70);
    e6 = new Box(e.body.position.x+70,e3.body.position.y,70,70);
    e7 = new Box(e.body.position.x+140,e.body.position.y,70,70);
    e8 = new Box(e.body.position.x+140,e2.body.position.y,70,70);
    e9 = new Box(e.body.position.x+140,e3.body.position.y,70,70);
    console.log(e.body.position.y);

    variablball = new boll(500,400,100,100);
    lin = new slingshot({x:500,y:50},variablball.body);
}

function draw(){
  background("darkblue");
  Engine.update(engine);
  g.display();
  e.display();
  e2.display();
  e3.display();
  e4.display();
  e5.display();
  e6.display();
  e7.display();
  e8.display();
  e9.display();
  variablball.display();
  lin.display();
}

function mouseDragged(){
  Matter.Body.setPosition(variablball.body,{x:mouseX,y:mouseY})
}