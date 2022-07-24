img = "";
noseX = 0;
noseY = 0;
pongX = 325;
pongY = 325;

function preload()
{
  img = loadImage("ping pong.png");
}

function setup() {
  createCanvas(650, 400);
}

function draw() {
  background("#D3D3D3");
  image(img,pongX, pongY, 40,70);
}


