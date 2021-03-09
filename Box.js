class Box{
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
            restitution:0.6,
            friction:0.5,
            density:1.2
        }    
    this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.body.position.x = x;
      this.body.position.y = y;
      World.add(world, this.body);
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);    
        rectMode(CENTER);
        fill("white");
        rect(0,0,this.width,this.height);
        pop()
    }
}