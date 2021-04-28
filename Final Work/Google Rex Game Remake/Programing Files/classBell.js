class Bell {
  constructor(h) {
    this.r = 100;
    this.x = 10;
    this.y = h - 90;
    this.vy =0; 
    this.gravity = 2  ; 
    this.h = h;
    this.collideRectRect;
    
  }
  
  jump() { 
    
      this.vy = -30;
    
  }
  hits(){
    return collideRectRect(this.x, this.y, this.r, this.r, spiders.x, spiders.y, spiders.r, spiders.r);
  } //or is it this one? 
  
  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, this.h - this.r); 
  }
  
  show() {
    image(uImg,this.x, this.y, this.r, this.r);
  }
} //https://www.youtube.com/watch?v=l0HoJHc-63Q 