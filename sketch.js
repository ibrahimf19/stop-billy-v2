const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


var billy;
var P1;
var P2;
var P1img, P2img, billyimg;
var bg;
var totalToys=[];

function preload(){
  P1img=loadImage("P1.png");
  P2img=loadImage("P2.png");
  billyimg=loadImage("BILLY.png");
  bg=loadImage("billybackground.jpeg");

}
function setup() {
  createCanvas(1200,800);

  engine = Engine.create();
  world = engine.world;

  billy=createSprite(160,475);
  billy.addImage(billyimg);
  billy.scale=0.55;

  

}

function draw() {
  background(0);  
  image(bg,0,0,width,height);
  Engine.update(engine);

  drawSprites();
}

function throwtoys(){
  
}


function keyPressed() {
  if (keyCode === 32) {
    
      var posX = billy.x;
      var posY = billy.y;
     // var angle = playerArcher.body.angle;
      var angle= 45;
      var toy = new toys(posX, posY, 100, 10, angle);

      toy.trajectory = [];
      Matter.Body.setAngle(toy.body, angle);
      totalToys.push(toy);
    }
  }


function keyReleased() {
  if (keyCode === 32) {
    if (totalToys.length) {
      var angle = 45;
      totalToys[totalToys.length - 1].shoot(angle);
    }
  }
}