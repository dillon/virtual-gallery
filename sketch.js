function setup() {
  createCanvas(710, 400, WEBGL);

}

function draw() {
  background(250);
  var radius = width * 1.5;
  //camera
  perspective(60 / 180 * PI, width / height, .1, 100)
  rotateX(accelerationY);
  //rotateY(accelerationX * 0.05);
  //rotateZ(accelerationZ * 0.05);

  normalMaterial();
  translate(0, 0, 0);
  for (var i = 0; i <= 12; i++) {
    for (var j = 0; j <= 12; j++) {
      push();
      var a = j / 12 * PI;
      var b = i / 12 * PI;
      translate(sin(2 * a) * radius * sin(b), cos(b) * radius / 2, cos(2 * a) * radius * sin(b));
      if (j % 2 === 0) {
        cone(30, 30);
      } else {
        box(30, 30, 30);
      }
      pop();
    }
  }
}