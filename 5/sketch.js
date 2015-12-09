// Jiashan Wu
// https://github.com/OhJia/p5MobileWebExamples


function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw(){
  background(255, 255, 255, 255);

  translate(-width/2, 0, -600);
  normalMaterial();
  rotateX(accelerationX * 0.05);
  rotateY(accelerationY * 0.05);
  rotateZ(accelerationZ * 0.05)
  torus(80, 20);
  

}