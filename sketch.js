let player;
let stars;
let score = 0;

function setup() {
  createCanvas(800, 600);

  // Player setup
  player = new Sprite(width / 2, height - 50, 100, 20);
  player.color = color("blue");

  // Stars setup
  stars = new Group();
}


function draw() {
	background(200);
  
	// Player movement
	if (keyIsDown(LEFT_ARROW)) player.x -= 5;
	if (keyIsDown(RIGHT_ARROW)) player.x += 5;
  
	// Constrain player within canvas
	player.x = constrain(player.x, 0, width);
	// Create falling stars
	if (frameCount % 30 === 0) {
		let star = new Sprite(random(width), 0, 20, 20);
		star.color = color("yellow");
		star.speed = 5;
		stars.add(star);
	  }
	
	  // Check if player catches stars
	  player.overlap(stars, (collector, collected) => {
		score++;
		collected.remove();
	  });

	  // Remove stars that reach the bottom
  stars.forEach(star => {
    if (star.y > height) {
      star.remove();
      score--;
    }
  });

  // Display score
  textSize(24);
  fill(0);
  text(`Score: ${score}`, 10, 30);
}
	  

	
  












