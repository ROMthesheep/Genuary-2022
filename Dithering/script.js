let img
let output
let yResolution = 50
let hResolution = 50

function preload() {
  img = loadImage("target.png")
}

function setup() {
  createCanvas(img.width, img.height)
  output = makeDither(img)
}

function draw() {
  background(220)
  image(output, 0, 0)
}

function makeDither(image) {
  img.loadPixels()
  result = createGraphics(img.width, img.height)
  result.background(0)
  spacing = [result.width / hResolution, result.height / yResolution]
  result.strokeWeight(0)
  for(let y = 0 ;y < result.height; y += spacing[0]) {
    for(let x = 0; x < result.width; x += spacing[1]) {
      result.fill(random(50,255))
      if (alpha(img.get(x,y))>0) {
        result.circle(x, y, map(img.get(x,y)[0], 0, 255, spacing[1], 0))
      }
    }
  }
  return result
}