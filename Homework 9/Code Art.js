var headX = 175;
var headY = 70;
var headDirection = 1;

var bodyX = 290;
var bodyY = 300;
var bodyDirection = 3;

var rightarmX = 375; 
var rightarmY = 225;
var rightarmDirection = 1;

var leftarmX = 260;
var leftarmY = 310; 
var leftarmDirection = 1; 

var rightlegX = 240;
var rightlegY = 370; 
var rightlegDirection = -2;

var leftlegX = 260; 
var leftlegY = 370;
var leftlegDirection = 2; 

var size = 22;
var count = 0;
var sizeDirection = 2;

var lineptX = 50;
var lineptY = 30;
var linedirection = 2; 

var linept1X = 400; 
var linept1Y = 250; 
var linept2X = 200; 
var linept2Y = 250;
var lineDirection = -1; 



function setup()
{
    createCanvas(500, 600);
}


function draw()
{
    background(255, 255, 255);

    textSize(size)
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("My Crappy Animation", 200,580);
   
    //diagonal line 
    fill (0, 250, 154)
    line (linept1X, linept1Y, linept2X, linept2Y)
    linept1X += lineDirection;
    linept1Y += lineDirection; 
    linept2X += lineDirection; 
    linept2Y += lineDirection; 
    if (linept1X > 800 || linept1X < 0 || linept1Y > 250 || linept1Y < 0 || linept2X > 600 || linept2X < 0 || linept2Y > 250 || linept2Y < 0 ) 
    {
    lineDirection *= -1; 
    }

    // hair back of head 
    fill(139, 69, 19) 
    rect(175, 45, 180, 190, 20, 15, 10, 5);
    
    // head
    fill(255, 248, 220);
    rect(headX,headY,150, 150, 50);

     // hair back of front 
    fill(139, 69, 19) 
    rect(175, 45, 150, 55, 20, 15, 10, 5);


    // eyes
    strokeWeight(5);
    fill(0);
    ellipse(215,125, 13, 35);
    ellipse(265,125,13, 35);

    // mouth
   arc(235, 175, 30, 30, -1, PI + QUARTER_PI, CHORD);

    // whites points
    fill(255, 255, 255);
    point(224, 115)
    point(274, 115)
    

    // arm right
    line(250, 275, 185, rightarmY)
    rightarmY += rightarmDirection;
    if (rightarmY <= 150 || rightarmY >= 230 )
    {
        rightarmDirection *= -1;
    }

    // leg right 
    line(250, 280, rightlegX, 370)
    rightlegX += rightlegDirection;
    if (rightlegX <= 220 || rightlegX >= 260 )
    {
        rightlegDirection *= -1;
    }
    
    // lowerbody
    fill(102, 205, 170 );
    arc(250, 300, 70, 70, 0, PI + QUARTER_PI, OPEN);

    // upperbody
    fill(0, 250, 154)
    triangle(290,300,251, 223, 207, 300);


     // arm Left
    line(255,250,leftarmX,310);
    leftarmX += leftarmDirection; 
    if (leftarmX <= 230 || leftarmX >= 280)
    {
        leftarmDirection *= -1;
    }

    // leg left 
    line(260, 320, leftlegX,370)
    leftlegX += leftlegDirection;
    if (leftlegX <= 230 || leftlegX >= 290 )
    {
        leftlegDirection *= -1;
    }
   
   // line1  
   line (50, lineptY, 50, lineptY)
    lineptY += linedirection ; 
    if (lineptY <= 30 || lineptY >= 200 )
    {
        linedirection *= -1; 
    }

    //line2
    line (100, lineptY, 100, lineptY)
    lineptY += linedirection ; 
    if (lineptY <= 30 || lineptY >= 400 )
    {
        linedirection *= -1; 
    }

    //line3
    line (400, lineptY, 400, lineptY)
    lineptY += linedirection ; 
    if (lineptY <= 30 || lineptY >= 200 )
    {
        linedirection *= -1; 
    }

    //line4 
    line (450, lineptY, 450, lineptY)
    lineptY += linedirection ; 
    if (lineptY <= 30 || lineptY >= 200 )
    {
        linedirection *= -1; 
    }


} 

