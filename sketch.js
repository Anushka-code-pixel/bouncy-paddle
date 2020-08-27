var ball, ball_image, paddle, paddle_image;
function preload() {
  ball_image = loadImage("ball.png");
  paddle_image = loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 300);
  
  ball = createSprite(200,200);
  ball.addImage("ball",ball_image);
  ball.scale = 0.8;
  
  paddle = createSprite(370,160);
  paddle.addImage("paddle", paddle_image);
  paddle.scale = 0.8;

  ball.velocityX = 9;
  
}

function draw() {
  background(205,153,0);
  
  edges = createEdgeSprites();
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[1]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);

 if(ball.bounceOff(paddle)){
   randomVelocity();
   }
  
  if(keyDown(UP_ARROW)) {
    paddle.velocityY = -10;
  }
  
  if(keyDown(DOWN_ARROW)){
   paddle.velocityY = 10;
  }
  
  drawSprites();
  
}

function randomVelocity(){
  ball.velocityY = random(-8,8);
}

