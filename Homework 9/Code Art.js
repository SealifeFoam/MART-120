function setup()
{
    createCanvas(500, 600);
}

function draw()
{
    background(173, 255, 47);
    textSize(22)
    text("Sydney B", 400,580);
   
    // hair back of head 
    fill(139, 69, 19) 
    rect(175, 45, 180, 190, 20, 15, 10, 5);
    
    // head
    fill(255, 248, 220);
    rect(175,70, 150, 150, 50);

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
    line(250,275,175,225);
    
    // leg right 
    line(250, 280, 240, 370)

    // lowerbody
    fill(102, 205, 170 );
    arc(250, 300, 70, 70, 0, PI + QUARTER_PI, OPEN);

    // upperbody
    fill(0, 250, 154)
    triangle(290, 300, 251, 223, 207,300);

     // arm Left
    line(255,250,260,310);


    // leg left 
    line(260, 320, 260, 370 )

   
    


}
  