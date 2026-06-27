const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Ball
let ballX = canvas.width / 2;
let ballY = canvas.height - 40;

let dx = 4;
let dy = -4;

const ballRadius = 10;

// Paddle
const paddleHeight = 12;
const paddleWidth = 120;

let paddleX = (canvas.width - paddleWidth) / 2;

// Keyboard
let rightPressed = false;
let leftPressed = false;

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

function keyDown(e){

if(e.key=="Right" || e.key=="ArrowRight"){
rightPressed=true;
}
