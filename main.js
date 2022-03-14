
difference = 0;
rightWristX=0;
leftWristX=0;
function setup() {
    video = createCapture(VIDEO);
    video.size(500, 450);
    video.position(50, 110)

    canvas = createCanvas(700, 375);
    canvas.position(550, 145);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)

}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
      
        
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference= floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + "| rightWristX = " + rightWristX + "| difference = " + difference);
    }
}

function modelLoaded(){
    console.log('PoseNet is Initialized!');
}

function draw() {
    background('#42e6f5');
    textSize(difference);
    text('Srivar',10,300);
    fill('#ed943b');
    stroke('#56ed3b');
    
    
}







