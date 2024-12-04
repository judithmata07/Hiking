//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(235,218,230); //an RGB color for the canvas' background
  //circle
  stroke(255,108,105) // an RGB color for the circle's border
  fill(mouseX,105,218,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(400,100,200,mouseY); // center of canvas, 20px dia
  rect(mouseX,mouseY,20,20);
  stroke(150,100,112);
  strokeWeight(5);
  fill(81, 86, 158);
  ellipse(100,200,50,50);
}
