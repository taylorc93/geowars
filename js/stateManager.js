// Global State Manager object.  For now, just gathers
// information about user input that should be processed
// at each game tick, but will be expanded to hold additional
// game state as development progresses
StateManager = {

	// Tracks ALL keys that are pressed at each game tick
	keysPressed: {
		w: false,
		a: false,
		s: false,
		d: false,
		left: false,
		right: false
	},

	// Determines how to move the player's ship.  True for forwards,
	// false for backwards
	moveShip: function(){
		if (this.keysPressed.w && !this.keysPressed.s){
			Player.move(true);
		} else if (this.keysPressed.s && !this.keysPressed.w){
			Player.move(false);
		}
	},

	// Determines how to rotate the player's ship.  True for clockwise,
	// false for counterclockwise
	rotateShip: function(){
		if (this.keysPressed.d && !this.keysPressed.a){
			Player.rotate(true);
		} else if (this.keysPressed.a && !this.keysPressed.d){
			Player.rotate(false);
		}
	}, 

	// Determines how to shift the player's laser.  True for right, false
	// for left
	shiftLaser: function(){
		if (this.keysPressed.right && !this.keysPressed.left){
			Player.shiftLaser(true);
		} else if (this.keysPressed.left && !this.keysPressed.right){
			Player.shiftLaser(false);
		}
	},
}