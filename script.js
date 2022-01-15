// speichtert das html canvas in der variablen 'canvas'
const canvas = document.getElementById("canvas");

const renderer = canvas.getContext("2d");

const colorSnake = '#000000';
const colorFood = '#aa00aa';
const snakeSize = 20;
const snakePos = [0, 5]; // [x-pos, y-pos]
const foodPos = [10, 10];
let direction = 'RIGHT' // LEFT, UP, DOWN
let frameCounter = 0;

// wenn eine Taste gedrückt wird, rufe die Funktion keyDown auf
// (hinter den Kulissen wird der Funktion das Event übergeben
document.onkeydown = keyDown;

// function definition
function drawSnakeHead(x, y) {
    // ctx.fillRect(x-pos, y-pos, breite, hoehe);
    renderer.fillStyle = colorSnake;
    renderer.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
}

function drawFood(x, y) {
    renderer.fillStyle = colorFood;
    renderer.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
}

function clearCanvas() {
    renderer.clearRect(0, 0, 720, 480);
}

function gameLoop(timeStamp) {
    // TODO: User Input
    frameCounter = frameCounter + 1;

    // zeichne nur alle 30 Frames etwas Neues
    if (frameCounter == 30) {
        frameCounter = 0;
        clearCanvas();
        // aktualisiere die Position des Schlangenkopfes
        if (direction == "RIGHT") {
            snakePos[0] = snakePos[0] + 1;
        }

        if (direction == "LEFT") {
            snakePos[0] = snakePos[0] - 1;
        }

        if (direction == "UP") {
            snakePos[1] = snakePos[1] - 1;
        }

        if (direction == "DOWN") {
            snakePos[1] = snakePos[1] + 1;
        }

        drawFood(foodPos[0], foodPos[1]);
        drawSnakeHead(snakePos[0], snakePos[1]);
    }

    // naechsten Frame
    window.requestAnimationFrame(gameLoop);
}

function keyDown(e) {
    if (e.code == "ArrowUp") {
        direction = "UP";
    }
    if (e.code == "ArrowDown") {
        direction = "DOWN";
    }
    if (e.code == "ArrowLeft") {
        direction = "LEFT";
    }
    if (e.code == "ArrowRight") {
        direction = "RIGHT";
    }
}

// draw first Frame
drawSnakeHead(snakePos[0], snakePos[1]);
drawFood(foodPos[0], foodPos[1]);
window.requestAnimationFrame(gameLoop);

