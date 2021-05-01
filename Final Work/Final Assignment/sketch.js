
//Should I make a Class? 
var ballX;
var ballY;
var ball2X;
var ball2Y;
var ball3X;
var ball3Y;
var ball4X;
var ball4Y;
var ball5X;
var ball5Y;
var ball6X;
var ball6Y;
var ball7X;
var ball7Y;
var ball8X;
var ball8Y;
var ballDirectionX;//ball
var ballDirectionY;
var ballDirectionX2;//ball2
var ballDirectionY2;
var ballDirectionX3;//ball3
var ballDirectionY3;
var ballDirectionX4;//ball4
var ballDirectionY4;
var ballDirectionX5;//ball5
var ballDirectionY5;
var ballDirectionX6;//ball6
var ballDirectionY6;
var ballDirectionX7;//ball7
var ballDirectionY7;
var ballDirectionX8;//ball3
var ballDirectionY8;
var R, G, B;
var R2, G2, B2; 
var R3, G3, B3;
var R4, G4, B4;
var R5, G5, B5;
var R6, G6, B6; 
var R7, G7, B7;
var R8, G8, B8;




function setup() {
  createCanvas(400, 400);
  
  ballX = random(0,width); 
  ballY = random(0,height);
  ball2X = random(0,width);
  ball2Y = random(0,height);
  ball3X = random(0,width);
  ball3Y = random(0,height);
  ball4X = random(0,width); 
  ball4Y = random(0,height);
  ball5X = random(0,width);
  ball5Y = random(0,height);
  ball6X = random(0,width);
  ball6Y = random(0,height);
  ball7X = random(0,width); 
  ball7Y = random(0,height);
  ball8X = random(0,width);
  ball8Y = random(0,height);
  
  //ajusts speed and Direction
  ballDirectionX = 5;
  ballDirectionY = 10;//1
  ballDirectionX2 = 15;
  ballDirectionY2 = 3;//2
  ballDirectionX3 = 2;
  ballDirectionY3 = 7;//3
  ballDirectionX4 = 5;
  ballDirectionY4 = 15;//4
  ballDirectionX5 = 15;
  ballDirectionY5 = 13;//5
  ballDirectionX6 = 2;
  ballDirectionY6 = 9;//6
  ballDirectionX7 = 5;
  ballDirectionY7 = 5;//7
  ballDirectionX8 = 3;
  ballDirectionY8 = 3;//8
 
  
  //picks a random rgb every reload 
  R = random(0,255);
  G = random(0,255);
  B = random(0,255);
  R2 = random(0,255);
  G2 = random(0,255);
  B2 = random(0,255);
  R3 = random(0,255);
  G3 = random(0,255);
  B3 = random(0,255);
  R4 = random(0,255);
  G4 = random(0,255);
  B4 = random(0,255);
  R5 = random(0,255);
  G5 = random(0,255);
  B5 = random(0,255);
  R6 = random(0,255);
  G6 = random(0,255);
  B6 = random(0,255);
  R7 = random(0,255);
  G7 = random(0,255);
  B7 = random(0,255);
  R8 = random(0,255);
  G8 = random(0,255);
  B8 = random(0,255);
  
}

function draw() {
  background(0);
  
  
  fill(R, G, B);//ball1
  ellipse(ballX,ballY,50,50);
  
  fill(R2, G2, B2);//ball2
  ellipse(ball2X, ball2Y, 50,50); 
  
  fill(R3, G3, B3);//ball3
  ellipse(ball3X, ball3Y, 50,50);
  
  fill(R4, G4, B4);//ball4
  ellipse(ball4X, ball4Y, 50,50);
  
  fill(R5, G5, B5);//ball5
  ellipse(ball5X,ball5Y,50,50);
  
  fill(R6, G6, B6);//ball6
  ellipse(ball6X, ball6Y, 50,50); 
  
  fill(R7, G7, B7);//ball7
  ellipse(ball7X, ball7Y, 50,50);
  
  fill(R8, G8, B8);//ball8
  ellipse(ball8X, ball8Y, 50,50);
  
  
  
  ballX=ballX+ballDirectionX;//ball1 D
  ballY=ballY+ballDirectionY;
  
  ball2X=ball2X+ballDirectionX2;//ball2 D
  ball2Y=ball2Y+ballDirectionY2;
  
  ball3X=ball3X+ballDirectionX3;//ball3 D
  ball3Y=ball3Y+ballDirectionY3;
  
  
  ball4X=ball4X+ballDirectionX4;//ball4 D
  ball4Y=ball4Y+ballDirectionY4;
  
  ball5X=ball5X+ballDirectionX5;//ball5 D
  ball5Y=ball5Y+ballDirectionY5;
  
  ball6X=ball6X+ballDirectionX6;//ball6 D
  ball6Y=ball6Y+ballDirectionY6;
  
  
  ball7X=ball7X+ballDirectionX7;//ball7 D
  ball7Y=ball7Y+ballDirectionY7;
  
  ball8X=ball8X+ballDirectionX8;//ball8 D
  ball8Y=ball8Y+ballDirectionY8;
  
 
  
  
  
  if ((ballX > width) || (ballX < 0)){//ball1 
   ballDirectionX = -1*ballDirectionX;
  }
  if ((ballY > height) || (ballY < 0)){
    //this reverse the ball's Y direction
   ballDirectionY = -1*ballDirectionY; 
  }
  
  if ((ball2X > width) || (ball2X < 0)){//ball2
   ballDirectionX2 = -1*ballDirectionX2;
  }
  if ((ball2Y > height) || (ball2Y < 0)){
   ballDirectionY2 = -1*ballDirectionY2; 
  }
  
  if ((ball3X > width) || (ball3X < 0)){//ball3
   ballDirectionX3 = -1*ballDirectionX3;
  }
  if ((ball3Y > height) || (ball3Y < 0)){
   ballDirectionY3 = -1*ballDirectionY3; 
  }
  
  if ((ball4X > width) || (ball4X < 0)){//ball3
   ballDirectionX4 = -1*ballDirectionX3;
  }
  if ((ball4Y > height) || (ball4Y < 0)){
   ballDirectionY4 = -1*ballDirectionY4; 
  }
  
  
  
  
   if ((ball5X > width) || (ball5X < 0)){//ball1 
   ballDirectionX5 = -1*ballDirectionX5;
  }
  if ((ball5Y > height) || (ball5Y < 0)){
    //this reverse the ball's Y direction
   ballDirectionY5 = -1*ballDirectionY5; 
  }
  
  if ((ball6X > width) || (ball6X < 0)){//ball6
   ballDirectionX6 = -1*ballDirectionX6;
  }
  if ((ball6Y > height) || (ball6Y < 0)){
   ballDirectionY6 = -1*ballDirectionY6; 
  }
  
  if ((ball7X > width) || (ball7X < 0)){
   ballDirectionX7 = -1*ballDirectionX7;
  }
  if ((ball7Y > height) || (ball7Y < 0)){
   ballDirectionY7 = -1*ballDirectionY7; 
  }
  
  if ((ball8X > width) || (ball8X < 0)){
   ballDirectionX8 = -1*ballDirectionX8;
  }
  if ((ball8Y > height) || (ball8Y < 0)){
   ballDirectionY8 = -1*ballDirectionY8; 
  }
  
  
  
}//End