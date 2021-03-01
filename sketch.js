const Engine=Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;


var engine, world,ground;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var line1,line2,line3,line4;
var bird1;
function setup(){

    createCanvas(600,600);
    engine=Engine.create();
    world=engine.world;

    ground = new Ground(300,580,600,20);

    box1 = new Box(200,550,50,50);
    box2 = new Box(350,550,50,50);
    pig1=  new Pig(275,550);
    line1= new Line(275,500,200,PI/2);

    box3 = new Box(200,450,50,50);
    box4 = new Box(350,450,50,50);
    pig2=  new Pig(275,450);
    line2= new Line(275,400,200,PI/2);

    box5 = new Box(275,350,50,50);
    line3= new Line(250,350,110,PI/4);
    line4= new Line(300,350,120,-PI/4);
   
    bird1= new Bird(100,100)

}

function draw(){

    background("black");
    Engine.update(engine);

    ground.display();
    box1.display();
    box2.display();
    pig1.display();
    line1.display();

    box3.display();
    box4.display();
    pig2.display();
    line2.display();

    line3.display();
    line4.display();
    box5.display();
   bird1.display();

}