var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');
var score = 0;
var timeLeft = 11;
var gameisStarted = false;
var rectData = {};
var rectSize = 100;

canvas.width = 0.8 * window.innerWidth;
canvas.height = 0.8 * window.innerHeight;
context.fillStyle = 'red';

function startGame() {
  score = 0;
  timeLeft = 10;
  gameisStarted = true;
  ramdomRect(rectSize);
  var intervalID = setInterval(function () {
    timeLeft -= 1;
    results();
    if (timeLeft === 0) {
      gameisStarted = false;
      gameOver();
      clearCanvas(context);
      clearInterval(intervalID);
    }
  }, 1000);
}

function ramdomRect(rectSize) {
  clearCanvas(context);
  var rectDimension = {width: rectSize, height: rectSize};
  var initialPos = randomXY(rectDimension.width, rectDimension.height);
  rectData = {
    x: initialPos.x,
    y: initialPos.y,
    width: rectDimension.width,
    height: rectDimension.height
  };
  context.fillRect(initialPos.x, initialPos.y, rectDimension.width, rectDimension.height);
}

function mouseXY(canvas, event) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: event.pageX - rect.left,
    y: event.pageY - rect.top
  };
}

function randomXY(rectWidth, rectHeight) {
  return {
    x: Math.floor(Math.random() * (canvas.width - rectWidth)),
    y: Math.floor(Math.random() * (canvas.height - rectHeight))
  };
}

function isInside(mousePos, rectData) {
  if (
    mousePos.x >= rectData.x &&
    mousePos.x <= rectData.x + rectData.width &&
    mousePos.y >= rectData.y &&
    mousePos.y <= rectData.y + rectData.height
  ) {
    return true;
  }
  return false;
}

canvas.addEventListener('click', function(evt) {
  if (!gameisStarted) {
    startGame();
  } else if (gameisStarted) {
    var mousePos = mouseXY(canvas, evt);
    if (isInside(mousePos, rectData)) {
      score += 1;
      results();
      ramdomRect(rectSize);
    }
  }
});

function results() {
  var resultEl = document.querySelector('#result');
  resultEl.innerHTML = "Score: " + score + " | " + "Time Left: " + timeLeft + " Seconds";
}

function gameOver() {
  var resultEl = document.querySelector('#result');
  resultEl.innerHTML = "You're DONE, You clicked only: " + score + " Boxes, refresh and try again!";
}

function clearCanvas(context) {
  context.clearRect(0, 0, canvas.width, canvas.height);
}
