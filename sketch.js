

var backgroundImg;
var bg1, bg2;
var gameState = 0;
var astronaut;
var alien1, alien2, alien3;
var aliensGroup, meteoriteGroup;
var meteorite1,meteorite2;
var traitor;
var laser,laserGroup;
var a1,a2,a3;


function preload(){
  //load the images
  backgroundImg = loadImage("Pictures/Galaxy bg.jpg");
  bg1 = loadImage("Pictures/Galaxy 1.jpg");
  bg2 = loadImage("Pictures/Galaxy 2.jpg");
  astronautI = loadImage("Pictures/Astronaut.png");
  alien3 = loadImage("Pictures/Alien 1.png");
  alien4 = loadImage("Pictures/Alien 2.png");
  alien1 = loadImage("Pictures/Alien 3.png");
  meteorite = loadImage("Pictures/Meteorite.png");
  meteorite1 = loadImage("Pictures/Meteorite2.png");
  Deceiver = loadImage("Pictures/The_Deceiver.png");
  laserlight = loadImage("Pictures/laser.jpg");
  
}

function setup() {
  createCanvas(1900,900);

  introduction = new form();
  story = new story();
  astronaut = createSprite(1800,500,1,1)
  deceiver = createSprite(400,500,1,1)
  deceiver.velocityY = -6;
 //aliensGroup = createGroup();
  a1 = createGroup();
  a2 = createGroup();
  a3 =createGroup();
  meteoriteGroup = createGroup();
  laserGroup = createGroup();
}

function draw() {
    

  // introductory page
if(gameState === 0){
  background(bg1)
introduction.display()


introduction.button1.mousePressed(()=>{
  gameState = 1;
})

introduction.button2.mousePressed(()=>{
  gameState = 2;
})
}
// The Game
if(gameState === 1){
  background(backgroundImg);
  introduction.button1.hide();
  introduction.button2.hide();
  introduction.title.hide();
  introduction.greeting.hide();
  story.back.hide();

  
    
    

  astronaut.addImage("astronaut",astronautI);
  astronaut.scale = 0.5;

  deceiver.addImage("traitor",Deceiver);
  deceiver.scale = 0.8;

  //movement of the astronaut
  astronaut.y = World.mouseY
 
  //edges
   edges = createEdgeSprites();
   astronaut.bounceOff(edges[0]);
   astronaut.bounceOff(edges[1]);
   astronaut.bounceOff(edges[2]);
   astronaut.bounceOff(edges[3]);

   deceiver.bounceOff(edges[0]);
   deceiver.bounceOff(edges[1]);
   deceiver.bounceOff(edges[2]);
   deceiver.bounceOff(edges[3]);

   //incresing the size of the aliens, when comes in contact with the deceiver
   
   spawnAliens();

   /*if(al1.collide(deceiver)){
    al1.scale = al1.scale + 5
  }
  if(al2.collide(deceiver)){
   al2.scale = al2.scale + 5
 }
 if(al3.collide(deceiver)){
   al3.scale = al3.scale + 5
 }*/


  //spawnMeteorites();

  //creating laser
  if (keyDown("space")) {
    createlaser();
    
  }
}

//How to play?
if(gameState === 2){
  background(bg2)
  introduction.button1.hide();
  introduction.button2.hide();
  introduction.title.hide();
  introduction.greeting.hide();
  story.display();
 
  story.back.mousePressed(()=>{
    gameState = 0;
    story.back.hide();
    story.help.hide();
    story.story.hide();
    story.storyLine.hide();
    introduction.button1.show();
    introduction.button2.show();
    introduction.title.show();
    
  })
}


drawSprites();
  

}
function spawnAliens(){
  var select_alien = Math.round(random(1,3));
  
  if (World.frameCount % 50 == 0) {
    if (select_alien == 1) {
      al1();
    } else if (select_alien == 2) {
      al2();
    } else if (select_alien == 3) {
      al3();
    } 
  }
}

function al1(){
  var alien1 = createSprite(0,Math.round(random(100, 1800)),0, 10, 10);
  alien1.addImage(alien3);
  alien1.velocityX = 12;
  alien1.lifetime = 500;
  alien1.scale = 0.4;
  a1.add(alien1);
 
}
function al2(){
  var alien2 = createSprite(0,Math.round(random(100, 1800)),0, 10, 10);
  alien2.addImage(alien4);
  alien2.velocityX = 12;
  alien2.lifetime = 500;
  alien2.scale = 0.8;
  a2.add(alien2);
  
}
function al3(){
  var alien3 = createSprite(0,Math.round(random(100, 1800)), 10, 10);
  alien3.addImage(alien1);
  alien3.velocityX = 12;
  alien3.lifetime = 500;
  alien3.scale = 0.4;
  a3.add(alien3);
  
}
/*function spawnAliens(){
  if(World.frameCount%80===0){
    alien = createSprite(400,200,20,20);
    alien.scale = 0.5;
    
    var rand = Math.round(random(1,3));
    
    if(rand === 1){
      alien.x = 1200;
      alien.velocityX = 6
    }
    if(rand === 2){
      alien.x = 1000;
      alien.velocityX =-6
    }
    if(rand === 3){
      alien.x = 1600;
      alien.velocityX =-6
    }
    
    
    a = Math.round(random(1,3));
    if(a == 1){
      alien.addImage(alien3);
    } else if(a == 2){
      alien.addImage(alien4);
    } else if(a == 3){
      alien.addImage(alien1);
    }
    
    alien.y = Math.round(random(400,1900));
    
    alien.setLifetime = 500;
    
    
    aliensGroup.add(alien);
  }
}*/



/*function spawnMeteorites(){
  if(World.frameCount%80===0){
    meteor = createSprite(400,200,20,20);
    meteor.scale = 0.2;
    
    var rand = Math.round(random(1,2));
    
    if(rand === 1){
      meteor.x = 1800;
      meteor.velocityY = 5
    }
    if(rand === 2){
      meteor.x = 1850;
      meteor.velocityY = 5
    }
    m = Math.round(random(1,2))
    if(m == 1){
    meteor.addImage(meteorite)
    }else if(m == 2){
      meteor.addImage(meteorite1)
    }
    meteor.x = Math.round(random(1900,400));
    meteor.setLifetime = 500;
    meteoriteGroup.add(meteor);
  }
}*/
function createlaser(){
  var laser = createSprite(100, 100, 60, 10);
  laser.addImage(laserlight);
  laser.x = (astronaut.x-60);
  laser.y = (astronaut.y-70);
  laser.velocityX = -9;
  laser.lifetime = 500;
  laser.scale = 0.2;
  laserGroup.add(laser);
  return laser
}