var radio = new Audio('http://stream.basso.ﬁ:8000/stream');
radio.volume = 5;

function play() {
  radio.play();
}

function pause() {
  radio.pause();
}

function volume(event) {
  radio.volume = event.target.value;
}
