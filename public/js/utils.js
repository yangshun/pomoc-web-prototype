var utils = {
  getRandomInt: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

var ding = new Audio("/audio/ding.mp3");

function playDing() {
  ding.pause();
  ding = new Audio("/audio/ding.mp3");
  ding.play();
}