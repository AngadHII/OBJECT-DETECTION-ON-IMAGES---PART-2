img = "";
status = "";
object = [];

function preload(){
    chocolate = loadImage("chocolate.jpg");
}

function setup(){
canvas = createCanvas(640,420);
canvas.center();

video = createCapture(380,380);
video.center();

objectDetector = ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML = "Status: Objects are being detected";
}

function modelLoaded(){
console.log("The model (cocossd) has been loaded.")
status = true;
objectDetector.detect(img,gotResult);
}


function draw(){
}

function gotResult(error,results){
if(error){
    console.log(error);
}
else{
    console.log(results);
    object = results;
}
}
