var CANVAS_WIDTH = 700;
var CANVAS_HEIGHT = 700;

// Global Player Object
var Player = {
	lives: 3,
	score: 0,

	// Center X and Y coords
	x: 350,
	y: 350,
	height: 30,
	width: 30,
	// Focal point for the laser 
	// X: Starts at middle of width, can be adjusted
	// Y: 1 less than the height
	laserFocalX: 15,
	laserFocalY: 29,

	// Renders the player onto the given canvas context
	render: function(ctx){
		ctx.lineWidth = 2;
		ctx.strokeStyle = "black";
		ctx.beginPath();

		// Start in top left corner
		var sx = this.x + this.width / 2;
		var sy = this.y + this.height / 2;
		var radius = this.height / 2;
		
		// Draw Main Arc
		ctx.arc(sx, sy, radius, Math.PI * 1.25, Math.PI * 1.75, true);
		ctx.stroke();
		ctx.closePath();

		// Draw Laser Endpoints
		ctx.beginPath();
		ctx.moveTo(this.x + 2, this.y + 2);
		ctx.arc(this.x + 6, this.y + 5, 3, 0, Math.PI * 2, true);
		ctx.fillStyle = "red";
		ctx.fill();
		ctx.closePath();

		ctx.beginPath();
		ctx.moveTo(this.x + 20, this.y + 2);
		ctx.arc(this.x + 24, this.y + 5, 3, 0, Math.PI * 2, true);
		ctx.fillStyle = "red";
		ctx.fill();
		ctx.closePath();

		// Draw Internal Laser Beams
		ctx.beginPath();
		ctx.moveTo(this.x + 6, this.y + 5);
		ctx.lineTo(this.x + this.laserFocalX, this.y + this.laserFocalY);
		ctx.lineTo(this.x + 24, this.y + 5);
		ctx.strokeStyle = "red";
		ctx.stroke();
	}
}

// Key Events
$(document).keydown(function(e){
	// Left Arrow
	if (e.which === 37){
		Player.laserFocalX--;
	} 
	// Right Arrow
	else if (e.which === 39){
		Player.laserFocalX++;
	}
	// w
	else if (e.which === 87){
		console.log("w");
	}
	// a
	else if (e.which === 65){
		console.log("a");
	}
	// s
	else if (e.which === 83){
		console.log("s");
	}
	// d
	else if (e.which === 68){
		console.log("d");
	}

	var canvas = document.getElementById("game-canvas");
	var ctx = canvas.getContext("2d");

	draw(ctx);	
});

function draw(ctx){
	ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	Player.render(ctx);
}

$(document).ready(function(){
	var canvas = document.getElementById("game-canvas");
	var ctx = canvas.getContext("2d");

	draw(ctx);
});
