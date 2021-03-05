const { fabric } = require("./fabric");

var canvas = new fabric.Canvas("myCanvas");

playerX = 10;
playerY = 10;

blockImageWidth = 30;
blockImageHeight = 30;

var playerobject = "";
var blockobject = "";

function playerUpdate() {
    fabric.Image.fromURL("player.png", function (Img) {
        playerobject = Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(140);
        playerobject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(playerobject);

    });
}

function newImage(getImage) {
    fabric.Image.fromURL(getImage, function (Img) {
        blockobject = Img;
        blockobject.scaleToWidth(blockImageWidth);
        blockobject.scaleToHeight(blockImageHeight);
        blockobject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(blockobject);

    });
}

window.addEventListener("keydown", MyKeydown);
function MyKeydown(e) {
    keyPressed = e.keyCode;
    if (e.shiftKey == true && keyPressed == '80') {
        blockImageWidth = blockImageWidth + 10;
        blockImageHeight = blockImageHeight + 10;
        document.getElementById("current_width").innerHTML = blockImageWidth;
        document.getElementById("current_width").innerHTML = blockImageHeight;
    }

    if (e.shiftKey == true && keyPressed == '77') {
        blockImageWidth = blockImageWidth - 10;
        blockImageHeight = blockImageHeight - 10;
        document.getElementById("current_width").innerHTML = blockImageWidth;
        document.getElementById("current_width").innerHTML = blockImageHeight;
    }

    if (keyPressed == '37') {
        left();

    }

    if (keyPressed == '38') {
        up();

    }

    if (keyPressed == '39') {
        right();

    }

    if (keyPressed == '40') {
        down();

    }

    if (keyPressed == '87') {
        newImage('wall.jpg');
        console.log("w")
    }

    if (keyPressed == '71') {
        newImage('ground.png');
        console.log("g")
    }

    if (keyPressed == '76') {
        newImage('light_green.png');
        console.log("l")
    }

    if (keyPressed == '84') {
        newImage('trunk.jpg');
        console.log("t")
    }

    if (keyPressed == '82') {
        newImage('roof.jpg');
        console.log("r")
    }

    if (keyPressed == '89') {
        newImage('yellow_wall.png');
        console.log("y")
    }

    if (keyPressed == '68') {
        newImage('dark_green.png');
        console.log("d")
    }

    if (keyPressed == '67') {
        newImage('cloud.jpg');
        console.log("c")
    }

    if (keyPressed == '85') {
        newImage('unique.png');
        console.log("u")
    }
}

