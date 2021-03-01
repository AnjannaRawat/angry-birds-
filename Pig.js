class Pig{
    constructor(x,y){
    
        var pig_options={

            restitution:0.8,
            friction:0.3,
            density:1
        }
        this.body=Bodies.rectangle(x,y,30,30,pig_options)
        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push ()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER);
        
        fill("pink");
        strokeWeight(4);
        stroke("white")
        rect(0,0,30,30);
        pop ()

    }




}


