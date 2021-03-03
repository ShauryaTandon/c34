const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var backgroundImg,platform;
var ball, slingshot;

var gameState = "onSling";

var bgimage

var score=0

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(500,320,50,50);
    box2 = new Box(500,320,50,50);

    box3 = new Box(500,320,50,50);
    box4 = new Box(500,320,50,50);


    box5 = new Box(500,320,50,50);

    box6 = new Box(610,320,50,50);
    box7 = new Box(610,320,50,50);
    box8 = new Box(610,320,50,50);
    box9 = new Box(610,320,50,50);
    box10 = new Box(610,320,50,50);

    

    ball= new Ball(400,200);

    //log6 = new Log(230,180,80, PI/2);
    rope = new Rope(ball.body,{x:400, y:50});
}

function draw(){
    background("grey")

    Engine.update(engine);
    //strokeWeight(4);
    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();

    ball.display();
    
    //log6.display();
    rope.display();    

}

function mouseDragged(){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    
}

