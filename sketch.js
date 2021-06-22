const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bg,bg1

var particle;
var divisions = [];
var particles = [particle];
var plinkos = [];
var line;

var divisionHeight = 240;

var gameState = "PLAY";

var count = 0;
var score = 0;

function preload(){
bg=loadImage("pinko.jpg")
bg1=loadImage("bg122.jpg")
}

function setup() {
    createCanvas(800, 800);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(width/2,height,width,20);
  
  
     for (var k = 0; k <=width; k = k + 80) {
      divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
     }
  
  
      for (var j = 60; j <=width; j=j+60) 
      {
      
         plinkos.push(new Plinko(j,75));
      }
  
      for (var j = 60; j <=width-10; j=j+60) 
      {
      
         plinkos.push(new Plinko(j,175));
      }
  
       for (var j = 60; j <=width; j=j+60) 
      {
      
         plinkos.push(new Plinko(j,275));
      }
  
       for (var j = 60; j <=width-10; j=j+60) 
      {
      
         plinkos.push(new Plinko(j,375));
      }
  
      
  
      
  }

 

function draw() {
    background(bg);
    Engine.update(engine);
    textSize(35)
  text("Score : "+score,20,40);
  fill(255);
  
  textSize(35)
  text(" 500 ", 5, 670);
  text(" 500 ", 80, 670);
  text(" 500 ", 160, 670);
  text(" 500 ", 240, 670);
  text(" 100 ", 320, 670);
  text(" 100 ", 400, 670);
  text(" 100 ", 480, 670);
  text(" 200 ", 560, 670);
  text(" 200 ", 640, 670);
  text(" 200 ", 720, 670);
  



    ground.display();
    if ( gameState =="END") {
        background(bg1);
        fill("white");
        textSize(70);
        text("PLINKO STOP!", 200, 470);

       
      } 
      for(var k = 0; k < plinkos.length; k++) {
       plinkos[k].display();
    }

    if(particle!=null)
    {
       particle.display();
        
        if (particle.body.position.y>700)
        {
              if (particle.body.position.x < 300) 
              {
                  score=score+500;      
                  particle=null;
                  if ( count>= 5) gameState ="END";                          
              }


              else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
              {
                    score = score + 100;
                    particle=null;
                    if ( count>= 5) gameState ="END";

              }
              else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
              {
                    score = score + 200;
                    particle=null;
                    if ( count>= 5)  gameState ="END";

              }      
              
        }
    }
    

   
    
  
 for (var i = 0; i < divisions.length; i++) {
     
    divisions[i].display();
  }
  
}


function mousePressed() {
    if(gameState !== "END") {
        count++;
    particle = new Particle(mouseX, 50, 10, 10);
    }
}
