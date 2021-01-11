img = "";
status = "";
objects = [];
function preload(){
    img = loadImage('dog_cat.jpg');
}
function setup(){
    canvas= createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    objectDetector = ml5.objectDetector('cocoSSD', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function modelLoaded(){
    console.log("CocoSSD Is Initialized");
    status = true;
}
function draw(){
    image(video, 0, 0, 380, 380);
    if (status != ""){
        objectDetector.detect(video, gotResult);
        for (i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status: Object Detected";
            document.getElementById("number_of_objects").innerHTML = "Number Of Objects Detected Are: " + objects.length;
            r = random(255);
            g = random(255);
            b = random(255);
            fill(r,g,b);
            percent = floor(objects[i].confidence * 100);
            textSize(18);
            text(objects[i].label+" "+ percent + "%", objects[i].x +11, objects[i].y+15);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}
function gotResult(error, results){
    if (error){
        console.log(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}