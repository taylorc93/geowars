// Clear the current canvas, then redraw everything
// that should be on the canvas
function draw(ctx){
	ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	Player.render(ctx);
}

function makeGrid (canvas){

	var array = []
//	for (var i = 0; i < canvas.height; i++)
//	{

	ctx = canvas.getContext('2d');
    // Filled triangle
    ctx.beginPath();
    ctx.moveTo(0,400);
    ctx.lineTo(400,400);
    ctx.closePath();
    ctx.lineWidth = 2;
    ctx.fill();
//	}


}

// Main game loop, called continuously by window.setInterval
function gameLoop(){
	var canvas = document.getElementById("game-canvas");
	var ctx = canvas.getContext("2d");

	// ORDER OF GAME LOOP

	// Collision testing 
	// Test game over
	// Test for bonuses

	// Handle user input.  There are three things that a user can
	// do each game tick:
	// 1. Shift the laser
	// 2. Move the ship
	// 3. Rotate the ship
	StateManager.rotateShip();
	StateManager.moveShip();
	StateManager.shiftLaser();

	// Redrawing
	draw(ctx);

	// Reset state for each tick
	StateManager.laserAction = function(){
		return;
	}
	StateManager.shipAction = function(){
		return;
	}
}

$(document).ready(function(){
	// Start game at 30fps
	window.setInterval(gameLoop, 1000 / 60);


	var canvas = document.getElementById("game-canvas");
	var ctx0 = canvas.getContext("2d");
	var ctx1= canvas.getContext("2d");
	var ctx2 = canvas.getContext("2d");

	makeGrid(canvas);

	ctx0.fillStyle = "green";
	ctx0.fillRect(20, 20, 100, 100);

	ctx1.beginPath();
	ctx1.fillStyle = "blue";
	ctx1.moveTo(20,150);
    ctx1.lineTo(120,225);
    ctx1.lineTo(120,125);
    ctx1.closePath();
    ctx1.fill();



	ctx2.fillStyle = "red";
	ctx2.fillRect(20, 280, 100, 100);

	draw(ctx);
});
