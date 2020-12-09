class Ball{
    constructor(x,y,radius){
 var options = {
    density:1
    }
    this.x =x;
    this.y=y;
    this.body = Bodies.circle(x,y,radius,options)
    World.add(world,this.body)
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0,40,40);
        pop();
    }
}