var bullet,database,pos;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database = firebase.database()
 var   bulletposition= database.ref('ball/position')
       bulletposition.on("value",readposition,showerror)
        
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
    //ball.x = ball.x + x;
    //ball.y = ball.y + y;
    database.ref('ball/position').set({
        'x': pos.x+x,
        'y' : pos.y+y
    })
}
function readposition(data){
    pos=data.val()
    bullet.x=pos.x
    bullet.y=pos.y
}

function showerror(){
    console.log("could not write into database")
    
}