/*
 * Albert Yang
 * 15-104 Section E
 * albertya@andrew.cmu.edu
 * Project-10
 */

var faceSize;
var eyeSize;
var bodySize;
var shoulderSize;
var armLength;
var legWidth;
var leftLegLength;
var rightLegLength;
var blobPlacementX;
var blobPlacementY;
var bodyPlateColor;
var locX;
var locY;
var velX;
var velY;
var dx;
var dy;
var distanceToBlob;
var step;

var offset;

function setup() {
	createCanvas (600, 600);
	
	frameRate (10); //runs 10 frames per second
	blobPlacementX = random(0, width); 
	blobPlacementY = random(0, height);
	locX = width/2; //Start in center
	locY = height/2;
	step = 10;
}

function draw() {
	background(200);
	oil(); //Create the oil blob
	robot(); //Create and animate the robot

}

function robot() {
	faceSize = 25;
	eyeSize = 5;
	bodySize = 40;
	shoulderSize = 15;
	armLength = 30;
	legWidth = 10;
	dx = blobPlacementX - locX; //x distance between robot and oil
    dy = blobPlacementY - locY; //y distance between robot and oil
    distanceToBlob = sqrt(dx*dx + dy*dy); //distance formula
	
	//When the robot is close to the oil, its body plate will turn green
	//Otherwise, it's gray
	if (distanceToBlob < 10) {
		bodyPlateColor = color(0, 255, 0);
	} else {
		bodyPlateColor = 150;
	}
	
	//Have the legs seem like they're moving up and down so it can walk
	if (frameCount % 2 == 0) {
		leftLegLength = 30;
		rightLegLength = 40;
	} else if (frameCount % 2 == 1) {
		leftLegLength = 40;
		rightLegLength = 30;
	}

	offset = 5;

	noStroke();
	fill(100);
	rectMode(CENTER);

	//Face
	rect (locX, locY - bodySize/2 - offset, faceSize, faceSize);

	//Eyes
	fill(50);
		rect (locX - offset, locY - bodySize/2 - offset*2, 
			  eyeSize, eyeSize);
		rect (locX + offset, locY - bodySize/2 - offset*2, 
			  eyeSize, eyeSize);

	//Arms
	fill (150);
		rect (locX + bodySize/2, locY - offset, shoulderSize, armLength);
		rect (locX - bodySize/2, locY - offset, shoulderSize, armLength);

	//Legs
	fill(150);
		rect (locX - offset*2, locY + bodySize/2, 
			  legWidth, leftLegLength);
		rect (locX + offset*2, locY + bodySize/2, 
			  legWidth, rightLegLength);

	//Body
	fill(120);
		rect (locX, locY, bodySize, bodySize);
	fill(bodyPlateColor);
		rect (locX, locY, bodySize - offset*3, bodySize - offset*3);


	//Makes the robot walk towards the oil 
    if (distanceToBlob > step) {
        var stepX = step * (dx / distanceToBlob); 
        var stepY = step * (dy / distanceToBlob);
        locX += stepX;
        locY += stepY;
    } 
    //If mouse is pressed, then the oil blob will relocate
    //only works after the robot has sucked up the oil
    else if (mouseIsPressed == true) {
    	blobPlacementX = random(0, width);
		blobPlacementY = random(0, height);
	}
}

function oil() {
	blobWidth = random(20, 30); //Creates a more animate blob of oil
	blobHeight = random(20, 30);

	//Oil blob
	fill(0);
	stroke(0);
		ellipse(blobPlacementX, blobPlacementY, blobWidth, blobHeight);
}