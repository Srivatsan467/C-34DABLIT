var ball,Position;
var database;

function setup(){
    createCanvas(500,500);
    ball = createSprite(50,50,10,10);
    ball.shapeColor = "red";
    database=firebase.database();
    console.log(database);
    var BallPosition = database.ref("Ball/Position");
    BallPosition.on("value",ReadPosition,ShowError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
   // ball.x = ball.x + x;
   // ball.y = ball.y + y;
   //Tp write data inside the db
   database.ref("Ball/Position").set({
    "x":Position.x+x,
    "y":Position.y+y
   })
}
function ReadPosition(data){
Position = data.val();
ball.x = Position.x;
ball.y = Position.y;
}
function ShowError(){
    console.log("Error")
}