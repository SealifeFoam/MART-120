// my character
var characterX = 25;
var characterY = 25;
// key codes 
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

// x and y for a shape
var shapeX = 25;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

// Obtacle when the mouse is clicked
var mouseShapeX;
var mouseShapeY;

// moving Spheres 
var CircleY = 340; 
var YDirection = 1; 

function setup()
{
    createCanvas(500, 600);
    // get a random speed when the it first starts
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 1);
}

function draw()
{
    background(420,100,78);
    
    Character(); 
    
    CharacterMovement();
    
    Maze(); 
    
    borders();

    Enemy();

    Obstacles();

    ExitSign();

    YouWin(); 

    ApearingObtaclie(); 

 }


 function ExitSign(){
   // exit message
    textSize(16);
    text("EXIT", width-50,height-50)
 }

 function YouWin() {
    // When character has left the exit
    if(characterX > width && characterY > width-50)
    {
        fill(255, 204, 229);
        stroke(5);
        textSize(26);
        text("Congrats You Win!", width/2-50, height/2-50);
    }

 }
 
function Character () {
 //character
    fill(255, 204, 204);
    circle(characterX,characterY,15);
}

function CharacterMovement(){
  // wsad = the keys
  if(keyIsDown(w))
  {
      characterY -= 9;   
  }
  if(keyIsDown(s))
  {
      characterY += 10;   
  }
  if(keyIsDown(a))
  {
      characterX -= 10;   
  }
  if(keyIsDown(d))
  {
      characterX += 10;   
  }

}

function borders(){
 stroke(0);
    fill(0); 
  // top border
  rect(0,0,width,10);
  // left border
  rect(0,0,10,height);
  // bottom border
  rect(0, height-10,width, 10);
  // right upper border
  rect(width-10,0,10,height-50);
}

function Maze () {
  stroke(0);
  fill(0);
// maze 
    //   (x coordinate, y coordinate, w, h)
    rect(50, 40, 250, 20) //upper hallf 
    rect (270, 40, 30, 150)
    rect (250, 180, 170, 20)
    rect (460, 170, 65, 20)
    rect (400, 50, 20, 150)
    rect (330, 10, 20, 140)
    rect (400, 40, 60, 20)
    rect (50, 50, 25, 150)
    rect (10, 225, 200, 25)
    rect (100, 155, 25, 90)
    fill (231, 55, 243) //Pink Squares 
    rect (220, 230, 20, 20)
    rect (250, 230, 20, 20)
    rect (280, 230, 20, 20)
    rect (320, 230, 20, 20)
    rect (350, 230, 20, 20)
    rect (380, 230, 20, 20)
    fill (0, 0, 0) // Lower half 
    rect (410, 230, 40, 20)
    rect (50, 280, 450, 20)
    rect (0, 340, 450, 20) 
    rect (50, 420, 450, 20)
    rect (50, 420, 450, 80)
    
    
}
function ApearingObtaclie(){
  // create the shape based on the mouse click
  fill(204, 255, 229);
  circle(mouseShapeX, mouseShapeY, 25);
}

function Enemy() { 
  // enemy 1
  fill(13,145,4);
  // Enemy 1 shape
  rect(shapeX, shapeY, 15, 15);

   // random speed 
   shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
   shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

  // move the shape
  shapeX += shapeXSpeed;
  shapeY += shapeYSpeed;
  // check to see if the shape has gone out of bounds
  if(shapeX > width)
  {
      shapeX = 0;
  }
  if(shapeX < 0)
  {
      shapeX = width;
  }
  if(shapeY > height)
  {
      shapeY = 0;
  }
  if(shapeY < 0)
  {
      shapeY = height;
  }

}

function Obstacles() {
  // Moving Circles 
    random(fill)
    circle(310, CircleY, 15 )
    circle(150, CircleY, 15)
    circle(230, CircleY, 15)
    CircleY += YDirection
    if (CircleY <= 330 || CircleY >= 380)
    {
      YDirection *= -1
    }
}

 function mouseClicked()
 {
     mouseShapeX = mouseX;
     mouseShapeY = mouseY;
 }
  
 
 
   