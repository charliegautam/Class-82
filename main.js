var mouse_event="empty";
var last_position_of_x,last_position_of_y;
canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color= "red";
width_of_line= 2;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
mouse_event = "mouseDown";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouse_event = "mouseUP";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouse_event="mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_X=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_Y=e.clientY-canvas.offsetTop;

    if (mouse_event =="mouseDown"){
     ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    console.log("Last position of x and y coordinates are");
    console.log("x="+last_position_of_x+" y="+last_position_of_y);
    ctx.moveTo(last_position_of_x,last_position_of_y);
    console.log("Current position of x and y coordinates are");
    console.log("x="+current_position_of_mouse_X+" y="+current_position_of_mouse_Y);
    ctx.lineTo(current_position_of_mouse_X,current_position_of_mouse_Y);
    ctx.stroke();
    }
}