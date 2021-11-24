var bg,bgImg1,bgImg2,bgImg3;
var queen,queenImg;
var seahorse,seahse1,seahse2,seahse3,octo,octoImg,sword,swordImg;
var diamond,ddImg,gem,gemImg,jwel,jwelImg;


function preload(){
  
 bgImg1 = loadImage("/assets/bg Img.jpg") ;
 bgImg2 = loadImage("/assets/sea.png");
 bgImg3 = loadImage("/assets/sea1.jpg");

 queenImg = loadImage("/assets/seaquen-removebg-preview.png");

 seahse1 = loadImage("/assets/seahorse.png");
 seahse2 = loadImage("/assets/seahorse1.png");
 seahse3 = loadImage("/assets/seahorse2.png");

 octoImg = loadImage("/assets/evilOcto.png");
 swordImg = loadImage("/assets/sword.png");

 ddImg = loadImage("/assets/diamonds.png");
 gemImg = loadImage("/assets/gem.png");
 jwelImg = loadImage("/assets/jwell.png");

}

function setup() {

  createCanvas(windowWidth,windowHeight);
  
  bg = createSprite(width/2,height/2,width,height);
  bg.addImage('sea',bgImg3);
  bg.scale = 2.5;
  bg.velocityX = -3;

  queen = createSprite(width-1454,height/2);
  queen.addImage('princess',queenImg);
  queen.scale = 0.4;

  



}

function draw() {
  background(0); 

 if(bg.x < 720){
    bg.x = width/2
 };

 console.log(bg.x)
drawSprites();

}
