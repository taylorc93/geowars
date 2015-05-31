// Global State Manager object.  For now, just gathers
// information about user input that should be processed
// at each game tick, but will be expanded to hold additional
// game state as development progresses
StateManager = {
	userInput: false,
	// This gets reset based on what the user has input
	userAction: function(){
		return;
	}
}