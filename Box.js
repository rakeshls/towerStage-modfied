class Box{
  constructor(x, y){
    var options={
      restitution:0.1,
      density:1.2,
      friction:1.5,
    }
    this.body=Bodies.rectangle(x,y,50,60,options);
    this.x=x;
    this.y=y;
    this.width=50;
    this.height=60;
    World.add(world,this.body)
  }
  display(){  
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      fill("red");
      rectMode(CENTER);
      rect(0,0,50,60);
      pop();
    } 

}