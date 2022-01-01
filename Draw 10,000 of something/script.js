let c = 8, a = 0, r = 0
var angle = 100
function setup() {
  createCanvas(520, 520)
  textSize(64)
  text("Click me!",width/4,height/2)
}

function mouseClicked() {
  angle++
  drawGraphic()
}

function drawGraphic() {
    background(230)
    noStroke()
    for (let i = 0; i<1000; i++) {
      r = c*sqrt(i)
      a = i*angle
      fill(i%120)
      if (r*cos(a) != 0 && r*sin(a) != 0) {
        circle(r*cos(a)+width/2, r*sin(a)+height/2, c*1.2)
      }
    }
    console.log("printed " + angle)
    //save("angle " + angle)
}
