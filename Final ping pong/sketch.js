let playerPaddle;
let aiPaddle;
let ball;
let score1=0;
let score2=0;

function setup() {
  createCanvas(1520, 710);
  
  playerPaddle = new Paddle(26);
  aiPaddle = new Paddle(width - 48);
  ball = new Ball();
}

function draw() {
  background(63,100,400,100);
  playerPaddle.display();
  aiPaddle.display();

  playerPaddle.update(); 
  aiPaddle.update(); 
  
  textSize(40);
  text(score1,356,50);
  text(score2,1155,50);
 
  processAI(); 
 
  ball.update();
  ball.display();
  
  ball.hasHitPlayer(playerPaddle); 
  ball.hasHitAi(aiPaddle); 
	
  stroke(255); // gives a white stroke
  line(width/2, 0, width/2, height); // 
	if(ball.x>=width)
	{ score1++;
	ball.reset();
	}
	 if(ball.x<=10)
	{ score2++;
   ball.reset();
	}

}

function processAI() {
  let middleOfPaddle = aiPaddle.y + aiPaddle.height / 2;

  if (middleOfPaddle > ball.y) {
    aiPaddle.isUp = true;
    aiPaddle.isDown = false;
  } else {
    aiPaddle.isDown = true;
    aiPaddle.isUp = false;

  }
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    playerPaddle.isUp = true;
  } else if (keyCode == DOWN_ARROW) {
    playerPaddle.isDown = true;
  }
}

function keyReleased() {
  if (keyCode == UP_ARROW) {
    playerPaddle.isUp = false;
  } else if (keyCode == DOWN_ARROW) {
    playerPaddle.isDown = false;
  }
}

  


