
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	boyImg = loadImage("./Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(1280, 720);


	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2, 700, 1280, 40);
	stone = new Stone(100, 500, 20);
	tree = new Tree(1000, 360, 600, 700);

	mango1 = new Mango(839, 266, 30);
	mango2 = new Mango(922, 174, 30);
	mango3 = new Mango(1022, 219, 30);
	mango4 = new Mango(1140, 286, 30);
	mango5 = new Mango(1157, 187, 30);

	
	
	slingShot = new Constraint(stone.body, {x: 398, y: 533});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  imageMode(CENTER);
  background(50, 255, 247);
  
  image(boyImg, 488, 600, 300, 300);
  

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);

  
  ground.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  slingShot.display();
}

function mouseDragged(){
	stone.body.position.x = mouseX;
	stone.body.position.y = mouseY;

}

function mouseReleased(){
	slingShot.release();
}

function keyPressed(){

	if (keyCode === 32){
		slingShot.attach(stone.body);
	
	}
}

function detectCollision(lstone, lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	console.log(dist(stone.body.position.x, stone.body.position.y, mango1.body.position.x, mango1.body.position.y))

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)

	if (distance < lmango.radius + lstone.radius){
		Body.setStatic(lmango.body, false)
	}
}

