class Box {
    constructor(x,y,w,h){
        var options={
            restitution:0.5,
            friction:0.5
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.width=w;
        this.height=h;

        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER);
        strokeWeight(4);
        stroke("yellow");
        fill(0);
        rect(0,0,this.width,this.height);
        pop();
    }
}