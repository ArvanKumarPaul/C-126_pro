var harry_potter = "";
var gopnik = "";

function preload() {

  harry_potter = loadSound("music.mp3");
  gopnik = loadSound("music2.mp3");

}

function setup () {

  canvas = createCanvas(640,350);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();

}

function draw() {

  image(video,640,350);

}