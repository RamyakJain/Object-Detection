img = "";
status = "";
function preload(){
    img = loadImage('dog_cat.jpg');
}
function setup(){
    canvas= createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocoSSD', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects"
}
function modelLoaded(){
    console.log("CocoSSD Is Initialized");
    status = true;
    objectDetector.detect(img, gotResult);
}
function draw(){
    image(img, 0, 0, 640, 420);
    fill('#cf1515');
    textSize(18);
    text('Dog', 35, 79);
    noFill();
    stroke('#cf1515');
    rect(30, 60, 350, 350);
    fill(255, 255, 0);
    textSize(20);
    stroke(255, 255, 0);
    text('Cat', 310 ,98);
    noFill();
    rect(300, 80, 250, 300);
}
function gotResult(error, results){
    if (error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}