// Keyup and Keydown events.  Each actions updates the state manager's
// keysPressed property, which is used later to compose the player action
// functions. 
$(document).keydown(function(e){
	// Left Arrow
	if (e.which === 37){
		StateManager.keysPressed.left = true;
	} 
	// Right Arrow
	else if (e.which === 39){
		StateManager.keysPressed.right = true;
	}
	// w
	else if (e.which === 87){
		StateManager.keysPressed.w = true;
	}
	// a
	else if (e.which === 65){
		StateManager.keysPressed.a = true;
	}
	// s
	else if (e.which === 83){
		StateManager.keysPressed.s = true;
	}
	// d
	else if (e.which === 68){
		StateManager.keysPressed.d = true;
	} 
});

$(document).keyup(function(e){
	// Left Arrow
	if (e.which === 37){
		StateManager.keysPressed.left = false;
	} 
	// Right Arrow
	else if (e.which === 39){
		StateManager.keysPressed.right = false;
	}
	// w
	else if (e.which === 87){
		StateManager.keysPressed.w = false;
	}
	// a
	else if (e.which === 65){
		StateManager.keysPressed.a = false;
	}
	// s
	else if (e.which === 83){
		StateManager.keysPressed.s = false;
	}
	// d
	else if (e.which === 68){
		StateManager.keysPressed.d = false;
	} 
});