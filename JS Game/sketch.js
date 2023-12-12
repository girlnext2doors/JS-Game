var gameChar_x;
var gameChar_y;

var floorPos_y;

var trees_x;
var treePos_y;

var clouds;
var mountains;

var canyons;
var collectables;

var cameraPosX = 0;

//interaction variables
var isLeft = false;
var isRight = false;
var isFalling = false;
var isPlummeting = false;

//end the game variables
var gameOver = false;
var levelComplete = false;

//gameScore
var gameScore;

function setup()
{
	createCanvas(1024, 576);

	coordinates = 0;
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	trees_x = [-50,600,1000,1600];
	treePos_y = -40;

	clouds = [
		{x_pos: 40, y_pos:20},
		{x_pos: 1000, y_pos:25}
	]

	clouds.size = 0;

	mountains = [
		{x_pos:-50, y_pos:50, size:0},
		{x_pos:900, y_pos:50, size:0}
	]

	canyons = [{x_pos: 200, width: 90}, {x_pos: 350, width: 90}, {x_pos: 800, width: 90}];

	collectables = [{x_pos: 150, y_pos: floorPos_y-20, size:50, isFound:false}, {x_pos: 900, y_pos: floorPos_y-50, size:50, isFound:false}];

	flagpole= {
		x_pos:950,
		y_pos:132,
		isReached:false
	}

}

function draw()
{

    cameraPosX = gameChar_x-width/2;

///////////////////////////////////////DRAWING CODE//////////////////////////////////////

  // Define gradient colors
  let color1 = color(0);  // Red
  let color2 = color(3, 81, 158);  // Blue

  // Set gradient background
  setGradient(0, 0, width, height, color1, color2);


background(100, 155, 255); //fill the sky blue
noStroke();
fill(0,155,0);
rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

push();
translate(-cameraPosX, 0);

//////////////////////////MOUNTAIN////////////////////////////////////////////
for( var i = 0; i < mountains.length; i++){

	fill(0,255,0);
	triangle(mountains[i].x_pos+423, mountains[i].y_pos+383, mountains[i].x_pos+580,mountains[i].y_pos+90,mountains[i].x_pos+731,mountains[i].y_pos+383);
	// ellipse(mountain[i].x_pos+580,mountain[i].y_pos+432, mountain[i].size+200,mountain[i].size+564);
	fill(255, 255, 255);
	triangle(mountains[i].x_pos+637,mountains[i].y_pos+200, mountains[i].x_pos+580,mountains[i].y_pos+90,mountains[i].x_pos+521,mountains[i].y_pos+200);
	
}


//draw the canyons
noStroke();
fill(92, 40, 0);
for(var i = 0; i < canyons.length; i++){
    rect(canyons[i].x_pos, floorPos_y, canyons[i].width, height -floorPos_y);
}


//////////////////////////////////CLOUDS///////////////////////////////////

    
    for(var i = 0; i < clouds.length; i++){
        fill(255, 255, 255, 100);
        ellipse(clouds[i].x_pos+20, clouds[i].y_pos, clouds.size + 80, clouds.size + 30);
        ellipse(clouds[i].x_pos-30, clouds[i].y_pos+10, clouds.size + 70, clouds.size + 20);
        ellipse(clouds[i].x_pos + 300, clouds[i].y_pos, clouds.size + 100, clouds.size + 20 );
        ellipse(clouds[i].x_pos + 200, clouds[i].y_pos, clouds.size + 135, clouds.size + 40);
        ellipse(clouds[i].x_pos+120, clouds[i].y_pos+50, clouds.size+400, clouds.size+ 50);
        fill(255);
        ellipse(clouds[i].x_pos, clouds[i].y_pos,50);
        ellipse(clouds[i].x_pos + 100, clouds[i].y_pos,40);
        ellipse(clouds[i].x_pos + 200, clouds[i].y_pos,35);
    }


/////////////////////////////////////TREE///////////////////////////////////

    
    for( var i = 0; i< trees_x.length; i++){
	fill(130, 90, 9);
	rect(trees_x[i]+150,treePos_y+373, 25, 100);
	fill(139, 199, 139);
    triangle(trees_x[i]+114, treePos_y +400, trees_x[i]+165, treePos_y +90, trees_x[i]+214, treePos_y+400);
}

    //trees_x = [-50,600,1000,1600];
    //treePos_y = -40;
    //64,335, 
    
///////////////////////////////////////////COLLECTABLES///////////////////////////////
for (var i = 0; i < collectables.length; i++){
    if(collectables[i].isFound == false){
        fill(255, 255, 0);
        noStroke();
        rect(collectables[i].x_pos, collectables[i].y_pos, 10, 10);
        triangle(collectables[i].x_pos+5, collectables[i].y_pos-10, collectables[i].x_pos, collectables[i].y_pos, collectables[i].x_pos+10, collectables[i].y_pos);
        triangle(collectables[i].x_pos+10,collectables[i].y_pos, collectables[i].x_pos+20, collectables[i].y_pos+5, collectables[i].x_pos+10,collectables[i].y_pos+10);
        triangle(collectables[i].x_pos+5, collectables[i].y_pos+20, collectables[i].x_pos, collectables[i].y_pos+10, collectables[i].x_pos+10, collectables[i].y_pos+10);
        triangle(collectables[i].x_pos-10, collectables[i].y_pos+5, collectables[i].x_pos, collectables[i].y_pos, collectables[i].x_pos, collectables[i].y_pos+10);
        gameScore += 1;
            textSize(50);
            fill(255);
            stroke(0);
            strokeWeight(4);
            text('GAME SCORE:', 150, 150);
            describe('GAME SCORE');
            if (gameScore ++) {
                collectables[i].isFound == true;
            }
    }

}

if(flagpole.isReached == false){
	fill(50, 50, 50);
	rect(flagpole.x_pos, flagpole.y_pos, 8, 300);
	////flag
	fill(255, 0, 0);
	triangle(flagpole.x_pos,flagpole.y_pos,flagpole.x_pos-161, flagpole.y_pos, flagpole.x_pos,flagpole.y_pos+120);
}
  
else if (flagpole.isReached == true){
	fill(50, 50, 50);
	rect(flagpole.x_pos, flagpole.y_pos, 8, 300);
	fill(0,255,0);
	triangle(flagpole.x_pos,flagpole.y_pos,flagpole.x_pos-161, flagpole.y_pos, flagpole.x_pos,flagpole.y_pos+120);
    //levelcomplete is true
    levelComplete = true;
}
  
  /////////////////GAME CHARACTER//////////////////////////
if(isLeft && isFalling){

	// add your jumping-left code
	//head
	fill(130,103,124);
	rect(gameChar_x-7,gameChar_y-69,14,12);
	//torso
	fill(0,0,0);
	rect(gameChar_x-12,gameChar_y-57,25,25);
	//right arm
	fill(0,0,0)
	beginShape();
	vertex(gameChar_x+13,gameChar_y-57);
	vertex(gameChar_x+19,gameChar_y-73);
	vertex(gameChar_x+22,gameChar_y-71);
	vertex(gameChar_x+13,gameChar_y-41);
	endShape(CLOSE);
	//left arm
	beginShape();

	vertex(gameChar_x-12,gameChar_y-57);
	vertex(gameChar_x-18,gameChar_y-73);
	vertex(gameChar_x-22,gameChar_y-71);
	vertex(gameChar_x-12,gameChar_y-41);

	endShape(CLOSE);

	//left leg
	fill(130,103,124);

	rect(gameChar_x-20,gameChar_y-32,17,6)
	rect(gameChar_x-20,gameChar_y-26,7,15)

	//right leg
	rect(gameChar_x+5,gameChar_y-32,17,6);
	rect(gameChar_x+17,gameChar_y-47,5,17)

	}
else if(isRight && isFalling){
	// add your jumping-right code
	//head
	fill(130,103,124);
	rect(gameChar_x -7 ,gameChar_y-69,14,12);
	//torso
	fill(0,0,0);
	rect(gameChar_x-12,gameChar_y-57,25,25);
	fill(255,0,0);
	//right arm
	fill(0,0,0);
	beginShape();
	vertex(gameChar_x+13,gameChar_y-57);
	vertex(gameChar_x+19,gameChar_y-73);
	vertex(gameChar_x+22,gameChar_y-71);
	vertex(gameChar_x+13,gameChar_y-41);
	endShape(CLOSE);
	//left arm
	beginShape();
	vertex(gameChar_x-12,gameChar_y-57);
	vertex(gameChar_x-18,gameChar_y-73);
	vertex(gameChar_x-22,gameChar_y-71);
	vertex(gameChar_x-12,gameChar_y-41);
	endShape(CLOSE);


	//left leg
	fill(130,103,124);
	rect(gameChar_x-19,gameChar_y-32,20,6);
	rect(gameChar_x-23,gameChar_y-42,6,16);

	//right leg
	rect(gameChar_x+3, gameChar_y-32,16,6);
	rect(gameChar_x+17, gameChar_y-32,6,16);

}
	else if(isLeft && isPlummeting == false){
	// add your walking left code
	//head
	fill(130,103,124);
	rect(gameChar_x-4, gameChar_y-69,8,12)
	//torso
	rect(gameChar_x-6, gameChar_y-57,12,25);
	//left arm
	fill(130,103,124);
	rect(gameChar_x-14, gameChar_y-52,17,4)
	rect(gameChar_x-18, gameChar_y-60,4,12)
	//right arm
	rect(gameChar_x+12, gameChar_y-52,4,12)
	rect(gameChar_x+6, gameChar_y-52,10,4)
	//left leg
	beginShape()
	vertex(gameChar_x-6,gameChar_y-32);///top
	vertex(gameChar_x-13, gameChar_y-22);
	vertex(gameChar_x-7, gameChar_y-14);
	vertex(gameChar_x-2, gameChar_y-14);
	vertex(gameChar_x-7, gameChar_y-22);
	vertex(gameChar_x-1, gameChar_y-32);//top
	endShape(CLOSE)
	//right leg
	beginShape()
	vertex(gameChar_x+2,gameChar_y-32);
	vertex(gameChar_x-5, gameChar_y-22);
	vertex(gameChar_x, gameChar_y-14);
	vertex(gameChar_x+6, gameChar_y-14);
	vertex(gameChar_x+1, gameChar_y-22);
	vertex(gameChar_x+6, gameChar_y-32);
	endShape(CLOSE)

}

else if(isRight && isPlummeting == false){
	// add your walking right code
	//head
	fill(130,103,124);
	rect(gameChar_x-4, gameChar_y-69,8,12)
	//torso
	rect(gameChar_x-6, gameChar_y-57,12,25);
	//right arm
	fill(130,103,124);
	rect(gameChar_x+2, gameChar_y-52,17,4)
	rect(gameChar_x+16, gameChar_y-60,4,12)
	//left arm
	rect(gameChar_x-18,gameChar_y-52,12,4)
	rect(gameChar_x-18,gameChar_y-52,4,12)
	//right leg
	beginShape()
	vertex(gameChar_x+6,gameChar_y-32);
	vertex(gameChar_x+11, gameChar_y-22);
	vertex(gameChar_x+9, gameChar_y-14);
	vertex(gameChar_x+3, gameChar_y-14);
	vertex(gameChar_x+6, gameChar_y-22);
	vertex(gameChar_x+1, gameChar_y-32);
	endShape(CLOSE)
	//left leg
	beginShape()
	vertex(gameChar_x-6,gameChar_y-32);
	vertex(gameChar_x-4, gameChar_y-22);
	vertex(gameChar_x-10,gameChar_y-14);
	vertex(gameChar_x-4, gameChar_y-14);
	vertex(gameChar_x+1, gameChar_y-22);
	vertex(gameChar_x-1, gameChar_y-32);
	endShape(CLOSE)
}
else if(isFalling || isPlummeting){
	// add your jumping facing forwards code
	// Head
	fill(130, 103, 124);
	rect(gameChar_x - 7, gameChar_y - 69, 14, 12);
	// Torso
	fill(0, 0, 0);
	rect(gameChar_x - 13, gameChar_y - 57, 25, 25);
	fill(255, 0, 0);
	

	//left arm/
	fill(0,0,0)
	beginShape();

	vertex(gameChar_x -12,gameChar_y-57);
	vertex(gameChar_x -18,gameChar_y-73);
	vertex(gameChar_x -22,gameChar_y-71);
	vertex(gameChar_x -12,gameChar_y-44);

	endShape(CLOSE);


	//right arm
	fill(0,0,0);
	beginShape();
	vertex(gameChar_x+12,gameChar_y-57);
	vertex(gameChar_x+19,gameChar_y-73);
	vertex(gameChar_x+22,gameChar_y-71);
	vertex(gameChar_x+12,gameChar_y-41);
	endShape(CLOSE);

	//right leg
	fill(130, 103, 124);
	rect(gameChar_x+2,gameChar_y-32,7,21);


	beginShape()

	vertex(gameChar_x+9,gameChar_y-21)
	vertex(gameChar_x+17,gameChar_y-27)
	vertex(gameChar_x+20,gameChar_y-24)
	vertex(gameChar_x+9,gameChar_y-11)


	endShape()

	//left leg
	rect(gameChar_x-8,gameChar_y-32,7,21);

	beginShape()

	vertex(gameChar_x-8,gameChar_y-11)
	vertex(gameChar_x-1,gameChar_y-21)
	vertex(gameChar_x-17,gameChar_y-27)
	vertex(gameChar_x-20,gameChar_y-24)

	endShape()
}
	else
	{
	// add your standing front facing code
	//head
	fill(130, 103, 124);
	rect(gameChar_x - 7,gameChar_y-69,14,12);

	//eye
	fill(255,255,255);
	ellipse(gameChar_x-1,gameChar_y-64,7,7);
	fill(0,0,0);
	ellipse(gameChar_x-1,gameChar_y-64,2,2);

	// torso
	fill(0, 0, 0);
	rect(gameChar_x - 12, gameChar_y - 57, 25, 25);
	fill(255, 0, 0);
	

	//arms
	fill(0,0,0);
	//right arm
	beginShape();
	vertex(gameChar_x + 13, gameChar_y - 57);
	vertex(gameChar_x + 22, gameChar_y - 37);
	vertex(gameChar_x + 17, gameChar_y - 35);
	vertex(gameChar_x + 13, gameChar_y - 44);
	endShape(CLOSE);


	//left arm
	beginShape();
	vertex(gameChar_x - 12, gameChar_y - 57);
	vertex(gameChar_x - 21, gameChar_y - 37);
	vertex(gameChar_x - 17, gameChar_y - 35);
	vertex(gameChar_x - 12, gameChar_y - 44);
	endShape(CLOSE);

	// legs
	// right leg
	fill(130, 103, 124);
	rect(gameChar_x - 8, gameChar_y - 32, 7, 30);
	// left leg
	rect(gameChar_x + 2, gameChar_y - 32, 7, 30);

	}

pop();

fill(0, 0, 0);
text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);

	/////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
	
	if(isLeft==true && isPlummeting==false){
		gameChar_x-=2;
	}
	else if(isRight==true && isPlummeting == false){
		gameChar_x+=2;
	}

	if(gameChar_y < floorPos_y && isFalling == true){
		gameChar_y+=1;
		isFalling==true;
	}
    else{ 
	isFalling=false;
	}
    
    for (var i = 0; i < collectables.length; i++){
        if(dist(gameChar_x, gameChar_y, collectables[i].x_pos, collectables[i].y_pos) < 21 ){
            collectables[i].isFound = true;
        }
    }

	if(dist(gameChar_x, gameChar_y, flagpole.x_pos, flagpole.y_pos) < 21 ){
		flagpole.isReached = true;

	}
    
    for (var i = 0; i < canyons.length; i++){
        if(gameChar_x > canyons[i].x_pos && gameChar_x < canyons[i].x_pos+canyons[i].width && gameChar_y >= floorPos_y){
            isPlummeting = true;
            console.log("in canyon");
            if (gameChar_y >= 576){
                gameOver = true;
            }
        }


        else {
            isPlummeting = false;
        }
    }

	if (isPlummeting == true){
		console.log("TRUTH");
		gameChar_y+=1;

	}

}

/////////////////GAME OVER//////////////////////////

if(gameOver.isReached == true){
    //game over graphic (eg. centered text saying "Game over")
    textSize(50);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text('GAME OVER', 150, 150);
    describe('GAME OVER');
    console.log("game over is true");
}
    
else if(gameOver.isReached == false){
    //no game over graphic (eg. centered text saying "Game over")
    gameOver=true;
}

if(levelComplete.isReached == true){
    //level complete graphic (eg. centered text saying "level complete")
    textSize(50);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text('LEVEL COMPLETE', 150, 150);
    describe('LEVEL COMPLETE');
    console.log("level complete is true");
}
else if(levelComplete.isReached == false){
    //no level complete graphic (eg. centered text saying "level complete")
    levelComplete = nil;
}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.

	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);

	if(key == "a"){
		isLeft = true;
	}
	else if(key =="d"){
		isRight = true;
	}
	else if(key == "w" && isPlummeting==false){
	 	gameChar_y-=100;
		isFalling=true;
	 }
}

    //end game
    
    //if(gameOver || levelComplete){
        //return; //Do nothing if the game is over or level is complete
//}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.

	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);


	if(key == "a"){
		isLeft = false;
	}

	else if(key =="d"){
		isRight = false;
	}
    
}

function setGradient(x, y, w, h, c1, c2) {
	noFill();
  
	// Loop through each pixel row
	for (let i = y; i <= y + h; i++) {
	  // Calculate the color at this point
	  let inter = map(i, y, y + h, 0, 1);
	  let c = lerpColor(c1, c2, inter);
  
	  // Draw a horizontal line of 1 pixel height
	  stroke(c);
	  line(x, i, x + w, i);
	}
  }