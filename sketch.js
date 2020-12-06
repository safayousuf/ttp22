const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground,ball,box1,box2;
//var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    myEngine = Engine.create();
    myWorld = myEngine.world;

    var ground_options ={
        isStatic: true
    }
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(myWorld,ground);

    var box1_options ={
        isStatic: true
    }
    box1 = Bodies.rectangle(30,350,200,20,box1_options);
    World.add(myWorld,box1);

    var box2_options ={
        isStatic: true
    }
    box2 = Bodies.rectangle(80,350,200,20,box2_options);
    World.add(myWorld,box2);


    var box3_options ={
        isStatic: true
    }
    box3 = Bodies.rectangle(280,350,200,20,box3_options);
    World.add(myWorld,box3);

    var box4_options ={
        isStatic: true
    }
    box4 = Bodies.rectangle(350,350,200,20,box4_options);
    World.add(myWorld,box4);


    var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(200,100,20,ball_options);
    World.add(myWorld,ball);
    console.log(ground)
    // console.log(object.position.x);
    // console.log(object.position.y);
}

function draw(){
    background(0);
    Engine.update(myEngine);
    rectMode(CENTER);
   rect(ground.position.x,ground.position.y,400,20);
   rect(box1.position.x,box1.position.y,60,60);
   rect(box2.position.x,box2.position.y,60,60);
   rect(box3.position.x,box3.position.y,60,60);
   rect(box4.position.x,box4.position.y,60,60);
    //rect(200,200,50,50)
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
}