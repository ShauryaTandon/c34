class Ball {
  constructor(x,y,){
    this.body=Bodies.circle(x,y,20,{frictionAir:0.0005,density:1})
    World.add(world,this.body)
    this.radius=20
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
;

var angle = this.body.angle;
push();
translate(this.body.position.x, this.body.position.y);
rotate(angle);
ellipseMode(RADIUS);
fill("black")
ellipse (0, 0, this.radius, this.radius);
pop();
  
}
}
