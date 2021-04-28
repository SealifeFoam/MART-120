class Spider {
  
  constructor(w,h)
  {
    this.r = 60; 
    this.x = w;
    this.y = h - this.r; 
  }
  
  move(){
    this.x -= 3 ; 
  }

  show(){
    image(SImg, this.x, this.y, this.r, this.r )
  }
}