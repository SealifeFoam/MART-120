// my character
var characterX = 25;
var characterY = 25;
// key codes 
var w = 87; 
var s = 83;
var a = 65;
var d = 68;
var x = 50;
var y = 50;

// x and y for a shape
var shapeX = 25;
var shapeY = 50;
var PinkSX = 220;
var PinkSY = 230;
var shapeXSpeed;
var shapeYSpeed;

// Obtacle when the mouse is clicked
var mouseShapeX;
var mouseShapeY;

// moving Spheres 
var CircleY = 340; 
var YDirection = 1;

//Arrays 
var myXs = [];
var myYs = [];
var myDiameters =[];
var randomColor = '#' +Math.floor(Math.random()*16777215).toString(15);
var randomMovementX; 
var randomMovementY; 

function setup()
{
    createCanvas(500, 600);
    // get a random speed when the it first starts
    randomMovement = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 1);
    randomMovement = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 1);

    //Arrays 
  
    var x = 100;
    var y = 460;
    var diameter = 10;
    for(var i = 0; i < 7; i++) //Controls Amount of Variables
    {
        myXs[i] = x;
        myYs[i] = y;
        myDiameters[i] = diameter;
        x += 100;
        y += 0;
        diameter += 7; //Contols Max Size of Shape
    }
    

  
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

    Arrays();
   
    

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
  //keeps on canvas 
    if(characterX > width)
    {
        characterX = 0;
    }
    if(characterX < 0)
    {
        characterX = width;
    }
    if(characterY > height)
    {
        characterY = 0;
    }
    if(characterY < 0)
    {
        characterY = height;
    }  
}

function CharacterMovement(){
  // wsad = the keys
  if (x >= 490)
  {x = 50;
  }
  if (y >= 590)
  {
    y = 50; 
  }
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
  circle(shapeX, shapeY, 15, 15);
  circle(shapeX, shapeX, 15, 15);
  rect(shapeX, shapeX, 15, 20);
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
    fill(250)
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

function Arrays ()
{
//fill 
fill(randomColor)

for(var i = 0; i < myXs.length; i++) {
  circle(myXs[i],myYs[i], myDiameters[i]);
}
//Array Speed
randomMovementX = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
randomMovementY = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  
 }
 
   