const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground;
var log1;

function setup() {

engine = Engine.create();
world = engine.world;
createCanvas(1200,800);

ground = new Ground(600,height,1200,20);

    log1 = new log(600,200,70,70);
    log2 = new log(600,270,70,70);
    log8 =  new log(600,340,70,70);
  
    log14=  new log(530,421,70,70);
    log15= new log(530,421,70,70);
    log16= new log(530,421,70,70);
    log17= new log(530,421,70,70);

    log4 = new log(740,200,70,70);
    log5= new log(740,270,70,70);
    log6 = new log(740,340,70,70);
    log18 = new log(810,421,70,70);
    log19 = new log(810,421,70,70);
    log20 = new log(810,421,70,70);
    log21 = new log(810,421,70,70);

    log9 = new log(670,200,70,70);
    log10 = new log(670,340,70,70);
   

}

function draw() {

  background("black"); 

  Engine.update(engine);

  log1.display();
  log2.display();
 
  log4.display();
  log5.display();
  log6.display();
 
  log8.display();
  log9 .display();
  log10 .display();
 
  log14.display();
  log15.display();
  log16.display();
  log17.display();
  log18.display();
  log19.display();
  log20.display();
  log21.display();


  ground.display();


}