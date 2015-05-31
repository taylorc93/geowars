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