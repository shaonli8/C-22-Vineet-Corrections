var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 550);

	engine = Engine.create();
	world = engine.world;
	// fairyVoice.play();

	fairy = createSprite(130, 340);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.1;
	
	hand = Bodies.rectangle(650,335,100,30,{isStatic:true})
	World.add(world, hand);

	starBody = Bodies.circle(650 , 50 , 5 , {restitution:0, isStatic:true});
	World.add(world, starBody);

	star = createSprite(650 , 50);
	star.addImage(starImg);
	star.scale = 0.1;
	star.debug=true;
	star.y= starBody.position.y
}


function draw() {
	background(bgImg);

	Engine.update(engine);

	
	star.y= starBody.position.y
	rectMode(CENTER)
	//rect(hand.position.x,hand.position.y,100,30)
	//rect(starBody.position.x,starBody.position.y,10,10)
	drawSprites();
}

function keyPressed() {
	if(keyCode === RIGHT_ARROW) {
		fairy.x += 5;
		hand.position.x = fairy.x + 50
		fairyVoice.play();
	}

	if(keyCode === LEFT_ARROW) {
		fairy.x -= 5;
		hand.position.x = fairy.x + 50
	}
	if(keyCode === 32) {
		Matter.Body.setStatic(starBody, false);
	}
}
