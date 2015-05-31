var CANVAS_WIDTH = 500;
var CANVAS_HEIGHT = 500;

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
/*
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
});*/

function draw(ctx){
//	ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	Player.render(ctx);
}

function Grid(ctx){
	

	var y = 10;
	var x = 10;
	for (var i = 0; y < CANVAS_HEIGHT; i++)
	{
		ctx.fillRect(0, y, CANVAS_WIDTH, 1);		
		ctx.fillRect(x, 0, 1, CANVAS_HEIGHT);
		ctx.fillStyle = "black";
		if ((x % 100) == 0)
		{
			console.log(x %100);
			ctx.fillStyle = "yellow";
		}

		ctx.fill();

		y += 10;
		x += 10;
	}


}

function strokeWing( ctx, x, y, color)
{
	var xP; var yP;
	ctx.beginPath();
	ctx.strokeStyle =  color;
	ctx.moveTo( x, y ); // starting point (40, 0)
	ctx.lineTo( x-15, y+10 ); // first line is (-15, +10) i.e connects (40,0) to (25,10)
	
	ctx.moveTo( x, y ); // 40, 410 // brings it back to top point 
	ctx.lineTo( x+15, y+10 ); // second line is (+15, +10) i.e connects (40,0) to (55, 10)
	
	y += 20;		
	ctx.moveTo( x, y); // 40, 430 moves the starting point to (40, 20)
	ctx.lineTo( x-5, y-10 ); // the third line is (-5, -10) i.e connects (40, 20) to (35, 10)
	xP = x-5; yP = y-10; // x and y prime to hole intermediary coordinates (35,10)
	ctx.lineTo( xP-10, yP); // the fourth line is (-10, 0) i.e connects (35,10) to (25,10)

	ctx.moveTo( x, y ); // 40, 430 moves the starting point to (40, 20)
	ctx.lineTo( x+5, y-10); //the fifth line is (+5, -10) connects (40, 20) to (45, 10)
	xP = x+5; yP = y-10; // x and y prime to hole intermediary coordinates (45,10)
	ctx.lineTo( xP+10, yP); // sixth line (+10,0) connects (45,10) to (55,10)
	
	ctx.moveTo(xP, yP); // moves the starting point to the current location of the drawing point to close the shape
	ctx.closePath();
	ctx.stroke();


}


$(document).ready(function(){

	var canvas = document.getElementById("game-canvas");
	var ctx = canvas.getContext("2d");

	//Grid(ctx);

	ctx.fillStyle = "green";
	ctx.fillRect(20, 20, 100, 100);

	ctx.beginPath();
	ctx.fillStyle = "blue";
	ctx.moveTo(20,150);
    ctx.lineTo(120,225);
    ctx.lineTo(120,125);
    ctx.closePath();
    ctx.fill();
    
    strokeWing( ctx, 40, 410, "red");
    strokeWing( ctx, 80, 410, "blue");
    strokeWing( ctx, 120, 410, "green");
    strokeWing( ctx, 160, 410, "black");



	draw(ctx);
});
