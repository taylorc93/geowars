// Keydown events, updates the state manager with the action to
// perform based on what key was pressed.
$(document).keydown(function(e){
	// Set to true at top to prevent setting it in each
	// else if. Reset to false if the key pressed is not bound
	StateManager.userInput = true;

	// Left Arrow
	if (e.which === 37){
		StateManager.userAction = function(){
			Player.laserFocalX--;
		}
	} 
	// Right Arrow
	else if (e.which === 39){
		StateManager.userAction = function(){
			Player.laserFocalX++;
		}
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
	// Key not bound, reset userInput field.
	else {
		StateManager.userInput = false;
	}
});

// Key Events
$(document).keyup(function(e){
	// We can set this to false immediately since any keyup
	// indicates the end of userInput
	StateManager.userInput = false;
});