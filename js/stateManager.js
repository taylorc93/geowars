// Global State Manager object.  For now, just gathers
// information about user input that should be processed
// at each game tick, but will be expanded to hold additional
// game state as development progresses
StateManager = {

	// Tracks if the laser should be shifted during each game tick.
	// Reset on keyUp
	didShiftLaser: false,
	laserAction: function(){
		return;
	},

	// Tracks if the player's ship should be moved during each game tick.
	// Also reset on keyUp
	didMoveShip: false,
	shipAction: function(){
		return;
	}
}