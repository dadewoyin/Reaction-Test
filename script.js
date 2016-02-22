function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var clickedTime; var createdTime; var reactionTime; var kanye = document.getElementById("kanye");

function makeBox() {
		
	var time = Math.random();
	
	time = time*4000;
	
	var circle = [Math.floor(Math.random() * 5)];
	
	var top = Math.random();
	
	top = top*350;
	
	var left = Math.random();
	
	left = left*550;
	
	kanye.style.top = top + "px";
	
	kanye.style.left = left + "px";
	
	setTimeout(function () {
		
		if (circle > 2) {
			
			document.getElementById("kanye").style.borderRadius = "100px";
			
		} else {
			
			document.getElementById("kanye").style.borderRadius = "0";
			
		}
		
		kanye.style.display="block";
		
		createdTime = Date.now();
		
	}, time);
		
}

document.getElementById("kanye").onclick=function () {
	
	clickedTime = Date.now();
	
	reactionTime = (clickedTime - createdTime)/1000;
	
	this.style.display="none";
	
	makeBox();
	
	document.getElementById("time").innerHTML = reactionTime;
	
	document.getElementById("color").style.color = getRandomColor();
	
	document.getElementById("color2").style.color = getRandomColor();
		
	};
	
makeBox();