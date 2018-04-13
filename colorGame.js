
var numSquares = 6
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message")
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

init();

function init(){
	
	//mode buttons listeners
	setupModeButtons();

	//set up squares
	setupSquares();

	//reset colors and squares
	reset();

}



function setupModeButtons(){
	for(var i =0; i < modeBtns.length; i++) {
		modeBtns[i].addEventListener("click", function(){
			modeBtns[0].classList.remove("selected")
			modeBtns[1].classList.remove("selected")
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		})
 	}
}

function setupSquares(){
	 for(var i = 0; i < squares.length;i++){

		squares[i].addEventListener("click", function(){
				var clickedColor = this.style.backgroundColor;
					if (clickedColor === pickedColor){
						changeColors(clickedColor);
						messageDisplay.textContent = "You're right!";
						resetButton.textContent = "Play again?";
						h1.style.backgroundColor = clickedColor;
					} else {
						this.style.backgroundColor = "#232323"
						messageDisplay.textContent = "try again"
					}
				});
	}
}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors"
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}

	}
	h1.style.backgroundColor = "rgb(11,158,252)"
}




resetButton.addEventListener("click", function(){
	reset();
})

colorDisplay.textContent = pickedColor;


function changeColors(color){
	for (var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
};

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
};

function generateRandomColors(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(randomColor());

	}
	return arr;
}

function randomColor(){

	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return("rgb("+ r + ", " + g + ", " + b + ")");

}





