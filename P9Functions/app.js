/*You are only allowed to print:■
console.log("Move Forward.");
■console.log("Turn Right.");
Using those two prints, make a character:■
walk three steps forward.■
then turn around and walk three steps forward■
then turn left and walk three steps forward.■
then turn left and walk one step forward.
■then turn around and walk one step forward*/

function moveForward(steps) {
  for (let i = 0; i < steps; i++) {
    console.log("Move Forward.");
  }
}

function turnRight() {
  console.log("Turn Right.");
}

function turnLeft() {
  for (let i = 0; i < 3; i++) {
    turnRight();
  }
}

function turnAround() {

  for (let i = 0; i < 2; i++) {
    turnRight();
  }
}

// Walk three steps forward
moveForward(3);

// Turn around and walk three steps forward
turnAround();
moveForward(3);

// Turn left and walk three steps forward
turnLeft();
moveForward(3);

// Turn left and walk one step forward
turnLeft();
moveForward(1);

// Turn around and walk one step forward
turnAround();
moveForward(1);