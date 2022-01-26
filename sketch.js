function setup() {
    createCanvas(windowWidth, windowHeight);
  }

  console.log("this is my message")

  /*
  x = 2
  y = 3
  z = x + y
  console.log(z);
  */



  function draw() {
    background(250, 250, 250);

  /*shapes*/
    stroke(0)
    strokeWeight(3)
    square(100, 100, 200);
    rect(windowWidth/2-200, 50, 400, 450);
    square(windowWidth-250, 100, 200);
    rect(windowWidth-350, 400, 250, 200);
    rect(110, 375, 100, 125);

  /* lines*/
    stroke('red');
    line(windowWidth/2-190, 60, windowWidth/2+190, 490);
    line(windowWidth/2+190, 60, windowWidth/2-190, 490);

  }

    
    
    /*fill(0,110,255);
    strokeWeight(1);
    circle(400,200,40);

    fill(110,255,0);
    strokeWeight(4);
    circle(200, 100, 20);

    fill(20, 0, 0)
    strokeWeight(10);
    circle(50,30,20);

    x = x + 1;
    console.log(x);
*/
