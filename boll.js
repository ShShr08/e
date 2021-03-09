class boll{
    constructor(x,y,width,height){
        var options={
            density:1.2,
            restitution:0.6,
            friction:0.5
        }
        this.body=Matter.Bodies.circle(x,y,100,options);
        this.width=width;
        this.height=height;
        Matter.World.add(world,this.body);
    }
    display(){
        ellipseMode(RADIUS);
        fill("beige")
        ellipse(this.body.position.x,this.body.position.y,this.width,this.height);

    }
}