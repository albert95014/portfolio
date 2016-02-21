/*
 * Albert Yang
 * 15-104 Section E
 * albertya@andrew.cmu.edu
 * Project04 (Abstract Clock)
 */

var spacing;
 
function setup() {
    createCanvas(600, 600);
    spacing = 40; //Spacing between ellipses indicating month
}

function draw() {

	if (hour() >= 12) { //Determining whether it is AM or PM
		background(100, 125, 150);
		AMorPM ("PM");
	} else {
		background(200, 225, 250);
		AMorPM ("AM");
	}

	for (var i = 1; i <= 12; i += 1) { //Month calendar
		if (i == month()) {
			fill(255);
		} else {
			noFill();
		}
		stroke(240);
		strokeWeight(2);
			ellipse(60, 60 + i*spacing, 10, 10);
	}

	//Month text
	strokeWeight(1);
	textAlign(CENTER, CENTER);
	textSize(20);
		text("MONTH", 60, 60);

	//Hour ellipse
	clock(255, 200, 200, 200, width/3, height/3, hour(), 144, "H");

	//Minute ellipse
	clock(200, 255, 200, 200, width*(2/3), height/3, minute(), 360, "M");

	//Second ellipse
	clock(200, 200, 255, 200, width/2, height*(2/3), second(), 360, "S");
}

function clock (colorR, colorG, colorB, opacity, 
				ellipseX, ellipseY, timeMode, maxSize, letter) {
	noFill();
	stroke(colorR, colorG, colorB, opacity);
	strokeWeight(3);
		ellipse(ellipseX, ellipseY, timeMode*6, timeMode*6)
	strokeWeight(2);
		ellipse(ellipseX, ellipseY, maxSize, maxSize);

	textAlign(CENTER, CENTER);
	textSize(timeMode*5); //Size of the letter signifying measureof time
		text(letter, ellipseX, ellipseY);
}

function AMorPM (word) {
	stroke(255, 255, 255, 50);
	fill(255, 255, 255, 50);
	textAlign(CENTER, CENTER);
	textSize(20);
		text(word, width - 30, height - 30)
}