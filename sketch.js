function setup() {
  createCanvas(710, 400, WEBGL);

}

function draw() {
  background(250);
  var radius = width * 1.5;
  //camera
  perspective(60 / 180 * PI, width / height, .1, 100)

  normalMaterial();
  translate(0, 0, 0);
  box(30, 30, 30);
  rotateX(accelerationY * 0.05);
  rotateY(accelerationX * 0.05);
  rotateZ(accelerationZ * 0.05);
}