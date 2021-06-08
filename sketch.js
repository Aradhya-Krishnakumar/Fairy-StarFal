var starImg,bgImg,fairyImg;
var star, starBody;
var voice;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	voices = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	voices.play();
      
	fairy = createSprite(150,520);
    fairy.addAnimation("fly",fairyImg);
	fairy.scale = 0.2;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y

  if(star.y > 479 && starBody.position.y > 479)
  {
	  Matter.Body.setStatic(starBody,true);
  }
  
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if(keyCode === LEFT_ARROW)
	{
      fairy.x = fairy.x-6;
	}
	
	if(keyCode === RIGHT_ARROW)
	{
      fairy.x = fairy.x+6;
	}

}
