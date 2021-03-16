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
var rightlegDirection = -1;

var leftlegX = 260; 
var leftlegY = 370;
var leftlegDirection = 1; 


function setup()
{
    createCanvas(500, 600);
}


function draw()
{
    background(255, 255, 255);
    textSize(22)
    text("Sydney B", 400,580);
   
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
        leftarmDirection *= -1
    }

    // leg left 
    line(260, 320, leftlegX,370)
    leftlegX += leftlegDirection;
    if (leftlegX <= 230 || leftlegX >= 260 )
    {
        leftlegDirection *= 1;
    }
   
    //leg Continuing 1 
    line(0, 0, 30, 0); 
    


}

