// Keydown events, updates the state manager with the action to
// perform based on what key was pressed.
$(document).keydown(function(e){
	// Left Arrow
	if (e.which === 37){
		StateManager.didShiftLaser = true;
		StateManager.laserAction = function(){
			Player.laserFocalX--;
		}
	} 
	// Right Arrow
	else if (e.which === 39){
		StateManager.didShiftLaser = true;
		StateManager.laserAction = function(){
			Player.laserFocalX++;
		}
	}
	// w
	else if (e.which === 87){
		StateManager.didMoveShip = true;
		StateManager.shipAction = function(){
			Player.y--;
		}
	}
	// a
	else if (e.which === 65){
		StateManager.didMoveShip = true;
		StateManager.shipAction = function(){
			Player.x--;
		}
	}
	// s
	else if (e.which === 83){
		StateManager.didMoveShip = true;
		StateManager.shipAction = function(){
			Player.y++;
		}
	}
	// d
	else if (e.which === 68){
		StateManager.didMoveShip = true;
		StateManager.shipAction = function(){
			Player.x++;
		}
	} 
});

// Updates the state manager to cancel user actions based on
// which key was released
$(document).keyup(function(e){
	// Left or Right Arrow
	if (e.which === 37 || e.which === 39){
		StateManager.didShiftLaser = false;
	} 

	// w, a, s, or d
	else if (e.which === 87 || e.which === 65 || e.which === 83 || e.which === 68){
		StateManager.didMoveShip = false;
	}
});