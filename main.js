var img = "";
var Status = "";
objects = [];
var video = "";

function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide;
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = 'Status = Detecting';
}
function preload(){
    img = loadImage("dog_cat.jpg");
}
function draw(){
    r = random(255);
    g = random(255);
    b = random(255);
    objectDetector.detect(video, gotResults);
    image(video, 0, 0, 380, 380);
    if(Status != ""){
      for(i = 0; i< objects.length; i++) {
        document.getElementById('status').innerHTML = 'Status = Person Detected';

        fill(r, g, b);
        percent = floor(objects[i].confidence *100);
        text(objects[i].label + " " + percent + "%", objects[i].x +15, objects[i].y +15);
        noFill();
        stroke(r, g, b);
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}
function modelLoaded(){
    console.log("Model loaded!");
    Status = true;
}
function gotResults(error, results){
    if (error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}
if (objects[i].label == 'person'){
    document.getElementById('Babydetected').innerHTML = 'Person has been detected';
}
else{
    document.getElementById('Babydetected').innerHTML = 'Person has NOT been detected';
    var audio = new Audio('alarm.mp3');
    audio.loop = true;
    audio.play();
}