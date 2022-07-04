

var goku;
var gokuLeft, gokuUp;

function preload(){

  //Goku animations
  gokuLeft = loadAnimation("./assets/Goku1Left.png","./assets/Goku2Left.png");
  gokuUp = loadAnimation("./assets/Goku1UP.png","./assets/Goku2UP.png","./assets/Goku3UP.png");
  
}

function setup() {

  createCanvas(windowWidth,windowHeight);
  
  // create Goku sprite and added up animation
  goku = createSprite(width/2, height - 100, 30, 30);
  goku.addAnimation("gup",gokuUp)

  //add background image
  backgroundImg = loadImage("./assets/bg.png");
}

function draw() {
  
  background(backgroundImg);  
  
  //moving Goku with Up arrow key
  if(keyDown(UP_ARROW)){
    goku.y += -13;
    goku.addAnimation("gup", gokuUp);
  }

 
  //moving Goku with left arrow Key
  // if(keyDown(LEFT)){

  // }

  camera.position.x = goku.x;
  camera.position.y = goku.y - (goku.y/3);



  drawSprites();
  
}
