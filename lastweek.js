var things = []; //array of things

function setup() {
  createCanvas(800, 800, WEBGL);
  for (var i = 0; i < 100; i++) {
    things.push(new Cube(i * 10));
  }
}

function draw() {
  background(255);
  for (var i=0; i<things.length; i++) {
    things[i].move();
    things[i].check();
    things[i].display();
  }

  camera(width, height, height, //eyeX, eyeY, eyeZ,
    width / 2, height / 2, height / 2, //centerX, centerY, centerZ,
    0, 1, 0); //upX, upY, upZ

}

function Cube() {
  this.xpos = random(width);
  this.ypos = random(width);
  this.zpos = random(width);
  this.bsize = random(100);
  this.xdir = random(-10, 10);
  this.ydir = random(-10, 10);
  this.zdir = random(-10, 10);
  this.fillColor = random(255);
  this.fillColor2 = random(255);
  this.fillColor3 = random(255);
  //var transp = random(255);


  this.move = function() {
    xpos = xpos + xdir;
    ypos = ypos + ydir;
    zpos = zpos + zdir;
    prvarln(xpos, xdir, ypos, ydir, zpos, zdir);
  }

  this.check = function() {
    if (xpos > height - (bsize / 2) || xpos < 0) {
      xdir = -xdir;
    }
    if (ypos > width - (bsize / 2) || ypos < 0) {
      ydir = -ydir;
    }
    if (zpos > height - (bsize / 2) || zpos < 0) {
      zdir = -zdir;
    }
  }

  this.display = function() {

    pushMatrix();
    translate(xpos, ypos, zpos);
    rotate(3, xpos, ypos, zpos);
    box(bsize, bsize, bsize);
    fill(fillColor, fillColor2, fillColor3, 40);
    //    stroke(#DDDDDD);
    noStroke();
    popMatrix();
  }

}

this.mouseIsPressed = function() {
  for (var i = 0; i < 100; i++) {
    circles[i] = new Circle(i * 10);
    circles[i].display();
    circles[i].move();

  }
}