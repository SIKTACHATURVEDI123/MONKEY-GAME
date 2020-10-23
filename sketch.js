
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivaltime=0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600 , 300)
 
  
  
  monkey = createSprite(50 , 210 , 20 , 50)
  monkey.addAnimation("moving" , monkey_running)
 monkey.scale=0.12
  
  ground= createSprite(300 , 250 , 1200 , 5)
  ground.x = ground.width/2;
  
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
   console.log(monkey.y)
}


function draw() {
  background(220)
  stroke("black")
  textSize(24);
  fill("black");
  survivaltime=Math.ceil(frameCount/frameRate())
  text("SURVIVAL TIME:" +survivaltime , 300 , 50)
  
  ground.velocityX=-6;
   if (ground.x < 0){
      ground.x = 300;
    }
  
   if(keyDown("space")&& monkey.y >= 210) {
        monkey.velocityY = -12;
        
    }
    
  
    monkey.velocityY = monkey.velocityY + 0.8
  
  
   
  
  monkey.collide(ground)
  
  spawnkela();
  spawnstones();

  drawSprites();
}

function spawnkela() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
     banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
    FoodGroup.add(banana);
  }
}

function spawnstones() {
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
     obstacles = createSprite(600,240,40,10);
    obstacles.x = Math.round(random(550 , 600));
    obstacles.addImage(obstaceImage);
    obstacles.scale = 0.1;
    obstacles.velocityX = -3;
    
     //assign lifetime to the variable
    obstacles.lifetime = 200;
    
    //adjust the depth
    //adjust the depth
    monkey.depth = obstacles.depth;
    obstacles.depth = obstacles.depth - 1;
    
    //add each cloud to the group
    obstacleGroup.add(obstacles);
  }
}









