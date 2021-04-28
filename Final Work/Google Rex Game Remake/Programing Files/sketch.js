let moth;
let uImg;
let tImg;
let SImg;
let bImg;
let spiders = [];


function preload(){
  uImg = loadImage('MothImage.png')
  tImg = loadImage('Zap.png')
  bImg = loadImage('Background.png')
  SImg = loadImage('Spider.png');
}



function setup() {
  createCanvas(600, 400);
  Bell = new Bell(height);
  
  
}
function keyPressed(){
  if (key == ' ') {
    Bell.jump();
  }
}

function draw() {
  if (random(1)< 0.005){
    
  spiders.push(new Spider(width, height));
  }
  
  background(bImg);
  Bell.show();
  Bell.move();
  
  if (Bell.hits(spiders)){
    console.log('game over'); //Is this the issue? 
    noLoop() 
  }
  
  for(let s of spiders)  
  {
    s.move();
    s.show();
  }
}// Let Spiders be infront and place bug zappers behide Moth