// Global Player Object
Player = {
	lives: 3,
	score: 0,

	// Center X and Y coords
	x: 350,
	y: 350,
	height: 30,
	width: 30,

	// Tracks the current rotation of the ship for drawing
	rotationAngle: 0,

	// Focal point for the laser 
	// X: Starts at middle of width, can be adjusted
	// Y: 1 less than the height
	laserFocalX: 15,
	laserFocalY: 29,

	move: function(forward){
		if (forward){
			this.y--;
		} else {
			this.y++;
		}
	},

	rotate: function(right){
		if (right){
			this.x++;
		} else {
			this.x--;
		}

		// If < 0, set it to 359, since 0 and 360 are equivalent
		// if > 360, set it to 1 for the same reason
		if (this.rotationAngle < 0){
			this.rotationAngle = 359;
		} else if (this.rotationAngle > 360){
			this.rotationAngle = 1;
		}	

	},

	shiftLaser: function(right){
		if (right){
			this.laserFocalX++;
		} else {
			this.laserFocalX--;
		}
	},	


	// Renders the player onto the given canvas context
	render: function(ctx){
		ctx.lineWidth = 2;
		ctx.strokeStyle = "black";
		ctx.beginPath();

		// Start in top left corner
		var sx = this.x + this.width / 2;
		var sy = this.y + this.height / 2;
		var radius = this.height / 2;
		
		ctx.save();


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

		ctx.translate(100, 100);
		ctx.rotate((Math.PI / 180) * this.rotationAngle);

		ctx.restore();
	}
}