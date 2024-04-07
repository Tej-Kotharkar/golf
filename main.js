
var canvas = new fabric.Canvas('myCanvas');

var ball_x = 0;
var ball_y = 0;
var hole_y = 200;
var hole_x = 400;

var block_image_width = 50; 
var block_image_height = 50; 

var ball_obj;
var hole_obj;

function load_img() {
    fabric.Image.fromURL("golf-h.png", function (Img) {
        hole_obj = Img;
        hole_obj.scaleToWidth(50);
        hole_obj.scaleToHeight(50);
        hole_obj.set({
            top: hole_y,
            left: hole_x
        });
        canvas.add(hole_obj);
    });
    new_image();
}

function new_image() {
    fabric.Image.fromURL("ball.png", function (Img) {
        ball_obj = Img;
        ball_obj.scaleToWidth(50);
        ball_obj.scaleToHeight(50);
        ball_obj.set({
            top: ball_y,
            left: ball_x
        });
        canvas.add(ball_obj);
    });
}

load_img();

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if ((ball_x == hole_x) && (ball_y == hole_y)) {
        canvas.remove(ball_obj);
        document.getElementById("hd3").innerHTML = "You have Hit the Goal!!!";
        document.getElementById("myCanvas").style.borderColor = "red";
    } else {
        if (keyPressed == '38') {
            up();
            console.log("up");
        }
        if (keyPressed == '40') {
            down();
            console.log("down");
        }
        if (keyPressed == '37') {
            left();
            console.log("left");
        }
        if (keyPressed == '39') {
            right();
            console.log("right");
        }
    }
}

function up() {
    if (ball_y > 0) {
        ball_y -= block_image_height;
        ball_obj.set({ top: ball_y });
        canvas.renderAll();
    }
}

function down() {
    if (ball_y <= canvas.height - block_image_height) {
        ball_y += block_image_height;
        ball_obj.set({ top: ball_y });
        canvas.renderAll();
    }
}

function left() {
    if (ball_x > 0) {
        ball_x -= block_image_width;
        ball_obj.set({ left: ball_x });
        canvas.renderAll();
    }
}

function right() {
    if (ball_x <= canvas.width - block_image_width) {
        ball_x += block_image_width;
        ball_obj.set({ left: ball_x });
        canvas.renderAll();
    }
}