class Bird{
    constructor(x,y){
    
        var bird_options={

            restitution:0.8,
            friction:0.3,
            density:1
        }
        this.body=Bodies.rectangle(x,y,50,50,bird_options)
        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
        pos.x=mouseX 
        pos.y=mouseY
        var angle=this.body.angle;
        push ()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER);
        
        fill("red");
        strokeWeight(4);
        stroke("white")
        rect(0,0,50,50);
        pop ()

    }




}
