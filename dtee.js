let dtee;
let dtee2;

function createDtee() {
  dtee = new Clickable(1000, 490);
  dtee.resize(90, 30);
  dtee.color = "rgb(187,6,187)";
  dtee.text = "";
  dtee2 = new Clickable(1030, 490);
  dtee2.resize(30, 60);
  dtee2.color = "rgb(187,6,187)";
  dtee2.text = "";
  dtee.onPress = function () {
    dtee.isPressed = true;
    dtee2.isPressed = true;
  };
  dtee.onRelease = function () {
    dtee.isPressed = false;
    dtee2.isPressed = false;
    checkDtee();
    dtee.x = Math.floor(dtee.x / 30) * 30;
    dtee.y = Math.floor(dtee.y / 30) * 30;
    dtee2.x = dtee.x;
    dtee2.y = dtee.y + 30;
    placeDtee();
    checkForThree();
  };
}

function checkDtee(){
  if (dtee.x < 30) {
      //shape is off the grid to left
      dtee.x = 30;
    dtee2.x = 30;
    }
    if (dtee.y < 30) {
      //shape is off the top of the grid
      dtee.y = 30;
      dtee2.y=90;
    }
    if (dtee.y > 330) {
      //shape is off the bottom of the grid
      dtee.y = 240;
      dtee2.y=330
    }
    if (dtee.x > 330) {
      //shape is off the grid to right
      dtee.x = 270;
      dtee2.x = 270;
    }
}

function placeDtee() {
  let thisX = dtee.x / 30 - 1;
  let thisY = dtee.y / 30 - 1;
  g[thisX][thisY].color = dtee.color;
  g[thisX +1][thisY].color = dtee.color;
  g[thisX+2][thisY].color = dtee.color;
  g[thisX + 1][thisY + 1].color = dtee.color;
  dtee.x = 600;
  dtee2.x = 600;
}
