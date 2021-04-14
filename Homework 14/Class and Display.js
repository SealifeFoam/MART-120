//Class- Need three different objects 
class Trees{

    //constructor
    constructor(x,y,w,h,r,g,b)//(x,y,w,h)= shape, (r,b,g)=color
    {
        this.x = x; 
        this.y = y;
        this.w = w;
        this.h = h;
        this.r = r;
        this.b = b;
        this.g = g;
    }
    //display- have "Trees" appear like seasonal changes: Autumn, Summer, Spring
    display()
    {
       fill(tis.r, this.g, this.b) 
       ellipse(this.x, this.y, this.w, this.h); 
    } 
}