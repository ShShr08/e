class slingshot{
    constructor(a,b){
        var options = {
           bodyA:b,pointB:a,
           stiffness:0.04,
           length:500
        }
        this.pointB =  a;
        this.slingshot = Matter.Constraint.create(options);
        Matter.World.add(world,this.slingshot)
    }
    display(){
        if(this.slingshot.bodyA){
            push();
            stroke("black");
            strokeWeight(3);
            line(this.pointB.x,this.pointB.y,this.slingshot.bodyA.position.x,this.slingshot.bodyA.position.y);
            pop();
        }
    }
}