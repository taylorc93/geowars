// Global Player Object
var Player = {
	lives: 3,
	score: 0,

	// Center X and Y coords
	x: 350,
	y: 350,
	height: 30,
	width: 30,
	// Renders the player onto the given canvas context
	render: function(ctx){
		ctx.beginPath();

		// Start in top left corner
		var sx = this.x + this.width / 2;
		var sy = this.y + this.height / 2;

		console.log(sx);
		console.log(sy);
		var radius = this.height / 2;
		
		ctx.arc(sx, sy, radius, Math.PI * 1.25, Math.PI * 1.75, true);
		ctx.stroke();
	}
}

$(document).ready(function(){
	var canvas = document.getElementById("game-canvas");
	var ctx = canvas.getContext("2d");

	ctx.fillStyle = "green";
	ctx.fillRect(10, 10, 100, 100);

	Player.render(ctx);
});
