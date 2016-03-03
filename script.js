// Function to get random color
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var clickedTime; var createdTime; var reactionTime; var target = document.getElementById("target");

function makeBox() {
	// Time variable for how long it'll take the target to be created
	var time = Math.random();
	
	time = time*4000;
	
	// Create either a box target or a circle target
	var circle = [Math.floor(Math.random() * 5)];
	
	// Random positioning of target
	var top = Math.random();
	
	top = top*350;
	
	var left = Math.random();
	
	left = left*550;
	
	target.style.top = top + "px";
	
	target.style.left = left + "px";

	// Random color for target
	target.style.backgroundColor = getRandomColor();
	
	setTimeout(function () {
		
		if (circle > 2) {
			
			document.getElementById("target").style.borderRadius = "100px";
			
		} else {
			
			document.getElementById("target").style.borderRadius = "0";
			
		}
		
		target.style.display="block";
		
		createdTime = Date.now();
		
	}, time);
		
}

document.getElementById("target").onclick=function () {
	
	clickedTime = Date.now();
	
	// Convert reactionTime into seconds
	reactionTime = (clickedTime - createdTime)/1000;
	
		// Make the user feel good (or bad) themselves :)
		if (reactionTime < 0.5) {

			alert("Crap you're fast!");
	
		}

		else if (reactionTime > 1.5 && reactionTime < 5) {

			alert("Damn you're slow!!!");

		}	

		else if (reactionTime > 5) {

			alert("Are you even still playing?");
		
		}

	this.style.display="none";
	
	makeBox();
	
	// Show reactionTime to user
	document.getElementById("time").innerHTML = reactionTime;
	
	document.getElementById("color").style.color = getRandomColor();
	
	document.getElementById("color2").style.color = getRandomColor();

		
		
	};
	
makeBox();
