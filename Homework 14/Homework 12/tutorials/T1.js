var ball = {
    x: 300, 
    y: 200,
    xspeed: 4, 
    yspeed: -3 
}

function setup () { 
    createCanvas (600, 400);
}

function draw() { 
    background(0); 
    move(); //alllows ability organize and change indivial parts
    bounce(); 
    display();
  
}

function move( ) {
  //Code that moves ball (Move)
    ball.x = ball.x + ball.xspeed; 
    ball.y = ball.y + ball.yspeed; 
}
function bounce(){
// Code that handles if it hits any edges (bounce)
    if (ball.x > width || ball.x < 0){
        ball.xspeed = ball.xspeed * -1; 
    }
    if (ball.y > height || ball.y < 0){
        ball.yspeed = ball.yspeed * -1; 
    }
}
function display(){
//The shape of object (The Ball)
    stroke (255); 
    strokeWeight(4); 
    fill(250, 250, 250); //turned white 
    ellipse(ball.x,ball.y, 24, 24);
}