class Ball
{
  constructor(x, y,r) 
  {
    var options = {
     density:.001,
     
    };
    
    this.body = Matter.Bodies.circle(x, y, r ,options);
    this.x=x;
    this.y=y;
    this.r = r; 

    World.add(world, this.body);
  }

  show() {
    
    push();
    ellipseMode(CENTER);
    ellipse(this.x,this.y, this.r);
    pop();
  }
}
