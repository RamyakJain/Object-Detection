img = ""
function preload(){
    img = loadImage('dog_cat.jpg');
}
function setup(){
    canvas= createCanvas(640, 420);
    canvas.center();
}
function draw(){
    image(img, 0, 0, 640, 420);
    fill('#cf1515');
    textSize(18);
    text('Dog', 35, 79);
    noFill();
    stroke('#cf1515');
    rect(30, 60, 350, 350);
}