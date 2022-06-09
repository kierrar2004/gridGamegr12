let tee;
let tee2;

function createTee() {
  tee = new Clickable(1000, 360);
  tee.resize(30, 90);
  tee.color = "rgb(187,6,187)";
  tee.text = "";
  tee2 = new Clickable(1000, 390);
  tee2.resize(60, 30);
  tee2.color = "rgb(187,6,187)";
  tee2.text = "";
  tee.onPress = function () {
    tee.isPressed = true;
    tee2.isPressed = true;
  };
  tee.onRelease = function () {
    tee.isPressed = false;
    tee2.isPressed = false;
    tee.x = Math.floor(tee.x / 30) * 30;
    tee.y = Math.floor(tee.y / 30) * 30;
    tee2.x = tee.x;
    tee2.y = tee.y + 30;
    placeTee();
    checkForThree();
  };
}

function placeTee() {
  let thisX = tee.x / 30 - 1;
  let thisY = tee.y / 30 - 1;
  g[thisX][thisY].color = tee.color;
  g[thisX][thisY + 1].color = tee.color;
  g[thisX][thisY + 2].color = tee2.color;
  g[thisX + 1][thisY + 1].color = tee2.color;
  tee.x = 600;
  tee2.x = 600;
}
