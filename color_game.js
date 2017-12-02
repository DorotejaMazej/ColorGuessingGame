var numSquares = 6;
var colors = [];
var pickedColor;
var square = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("messageDisplay");
var h1 = document.getElementsByTagName("h1")[0];
var resetButton = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");

init();

function init(){
	//mode buttons event listeners
	setupModeButtons();
	setupSquares();
	reset();
}

function setupSquares(){
	for(var i=0; i < square.length; i++){
		//add click listeners to squares
		square[i].addEventListener("click", function(){
			var clickedColor = this.style.background;
			//compare color to picked color
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			}else{
				this.style.background= "#232323";
				messageDisplay.textContent = "Try again";
			}
		});
	}
}

function setupModeButtons(){
	for(var i = 0; i < modeBtn.length; i++){
	modeBtn[i].addEventListener("click", function(){
		modeBtn[0].classList.remove("selected");
		modeBtn[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();	
		});
	}
}

function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colorDisplay to match guessing color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i < square.length; i++){
		if(colors[i]){
			square[i].style.display = "block";
			square[i].style.background = colors[i];
		}else{
			square[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
});

function changeColors(color){
	//loop through all squares
	for(var i=0; i < square.length; i++){
		square[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//create an aray
	var arr = [];
	//add num random colors and push into array
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	//return array
	return arr;
}

function randomColor(){
	 //pick a red, green, and blue from 0-255
	 var r = Math.floor(Math.random() * 256);
	 var g = Math.floor(Math.random() * 256);
	 var b = Math.floor(Math.random() * 256);
	 return "rgb(" + r + ", " + g + ", " + b + ")";
 }

