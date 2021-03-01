class Line{
    constructor(x,y,height,angle){
    
        var line_options={

            restitution:0.8,
            friction:2,
            density:1
        }
        this.body=Bodies.rectangle(x,y,30,height,line_options)
        this.width=30;
        this.height=height;
        Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body);
     
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push ()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER);
        
        fill("green");
        strokeWeight(4);
        stroke("white")
        rect(0,0,this.width,this.height);
        pop ()

    }




}






