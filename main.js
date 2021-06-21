NoseX = 0;
NoseY = 0;
function preload()
{
    loadedImage = loadImage("https://i.postimg.cc/nLBXRcBk/Clown-nose-large.png");
}

function setup()
{
    var canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotposes);
}
function modelLoaded()
{
    console.log("Posent is loaded");
}
function gotposes(results)
{
    if(results.length > 0)
    {
        console.log(results);
        NoseX = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;
        console.log("nose_x = " + NoseX);
        console.log("nose_y = " + NoseY);
    }
}
function draw()
{
    image(video, 0, 0, 300, 300);
    
    fill(255, 50, 75);
    stroke(255, 50, 75);
    circle(NoseX, NoseY, 20);

    image(loadedImage, NoseX-45, NoseY-45, 100, 100);
}

function take_snapshot()
{
    save("MyClownimage.jpg");
}