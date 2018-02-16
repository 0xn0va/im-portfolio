var canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');
var from = {};
var to = {};
var guideLine = {};
var lines = [];
var drawGuideLine = false;

canvas.width =  0.8 * window.innerWidth;
canvas.height = 0.8 * window.innerHeight;
context.strokeStyle = 'red';

document.addEventListener('mousedown', function(ev) {
  var mousePos = getXY(canvas, ev);
  from.x = mousePos.x;
  from.y = mousePos.y;
  drawGuideLine = true;
});

document.addEventListener('mousemove', function(ev) {
  var mousePos = getXY(canvas, ev);
  if (drawGuideLine) {
    clearCanvas(context);
    drawStoredLines(context, lines);
    guideLine.x = mousePos.x;
    guideLine.y = mousePos.y;
    context.setLineDash([5, 15]);
    drawLine(from, guideLine);
  }
});

document.addEventListener('mouseup', function(ev) {
  var mousePos = getXY(canvas, ev);
  drawGuideLine = false;
  clearCanvas(context);
  drawStoredLines(context, lines);
  to.x = mousePos.x;
  to.y = mousePos.y;
  drawLine(from, to);
  lines.push({ from: Object.assign({}, from), to: Object.assign({}, to) });
});


function getXY(canvas, event) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: event.pageX - rect.left,
    y: event.pageY - rect.top
  };
}

function drawStoredLines(context, lines) {
  context.setLineDash([]);
  lines.forEach(function(line) {
    drawLine(line.from, line.to);
  });
}

function drawLine(from, to) {
  context.beginPath();
  context.moveTo(from.x, from.y);
  context.lineTo(to.x, to.y);
  context.stroke();
}

function clearCanvas(context) {
  context.clearRect(0, 0, canvas.width, canvas.height);
}
