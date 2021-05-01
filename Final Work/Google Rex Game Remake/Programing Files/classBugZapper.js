class {

    constructor(w,h)
  {
    this.r = 55; 
    this.x = w;
    this.y = h - this.r; 
    this.w = w; 
    this.h = h; 
  }
  
  move(){
    this.x -= 3 ; 
  }

  show(){
    image(tImg, this.x, this.y, this.r, this.r )
    fill(255, 50);
    rect(this.x, this.y, this.r, this.r); 
  }







}