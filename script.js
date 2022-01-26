// speichtert das html canvas in der variablen 'canvas'
const canvas = document.getElementById("canvas");

const renderer = canvas.getContext("2d");

const colorSnake = '#0000ff';
const colorFood = '#FFFF00';
const snakeSize = 20;
const snakePos = [0, 5]; // [x-pos, y-pos]
const foodPos = [10, 10];
let direction = 'RIGHT' // LEFT, UP, DOWN
let frameCounter = 0;
const rows    = canvas.height / snakeSize - 1; // anzahl der zeilen in der arena
const columns = canvas.width / snakeSize - 1; // anzahl der spalten in der arena

// unser spielfeld hat die erlaubten positionen von [0,0] - [columns, rows]
// das sind rows * columns verschiede positionen

// wenn eine Taste gedrückt wird, rufe die Funktion keyDown auf
// (hinter den Kulissen wird der Funktion das Event übergeben
document.onkeydown = keyDown;

// function definition (x und y nennt man Funktionsparameter)
function drawSnakeHead() {
    // ctx.fillRect(x-pos, y-pos, breite, hoehe);
    renderer.fillStyle = colorSnake;
    renderer.fillRect(snakePos[0]*snakeSize, snakePos[1]*snakeSize, snakeSize, snakeSize);
}

function drawFood() {
    renderer.fillStyle = colorFood;
    renderer.fillRect(foodPos[0]*snakeSize, foodPos[1]*snakeSize, snakeSize, snakeSize);
}

function clearCanvas() {
    renderer.clearRect(0, 0, 720, 480);
}

function spawnNewFood() {
    // Algorithmus für das Spawnen von neuem Food
    // 1) Berechne eine zulässige Position zwischen [0,0] und [columns, rows] zufaellig
    // 2) Pruefe, ob der Schlangenkopf (spaeter der Koerper) diese Position besetzt
    // Falls Nein -> Setze Food an die Position
    // Fals Ja -> Wiederhole
    //
    // Implementierung von 1)
    let rowPos = Math.floor(Math.random() * rows);
    let colPos = Math.floor(Math.random() * columns);
    foodPos[0] = colPos;
    foodPos[1] = rowPos;

    // Implementierung von 2)
}

function gameLoop(timeStamp) {
    frameCounter = frameCounter + 1;

    // zeichne nur alle 30 Frames etwas Neues
    if (frameCounter == 30) {
        frameCounter = 1;
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

        // Kollision von Schlange mit Food
        if (snakePos[0] == foodPos[0] && snakePos[1] == foodPos[1]) {
            spawnNewFood();
        }

        // Kollision von Schlange mit Wand
        // Kollision mit linker Wand
        if (snakePos[0] < 0) {
            // gameOver
            snakePos[0] = 0;
        }
        // Kollision mit rechter Wand
        if (snakePos[0] > columns) {
            // gameOver
            snakePos[0] = columns;
        }
        // Kollison mit oberer Wand
        if (snakePos[1] < 0) {
            // gameOver
            snakePos[1] = 0;
        }
        if (snakePos[1] > rows) {
            // gameOver
            snakePos[1] = rows;
        }
        
        /**
        if (snakePos[0] < 0 || snakePos[0] > columns || snakePos[1] < 0 || snakePos[1] > rows) {
            // gameOver
        }
        */

        drawFood();
        drawSnakeHead();
        
    }

    // naechsten Frame
    window.requestAnimationFrame(gameLoop);
}

// TODO: Schlange darf sich nicht um 180 Grad drehen können
function keyDown(e) {
    if (e.code == "ArrowUp") {

        if (direction !== "DOWN") {
            direction = "UP";
        }
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
drawFood();
drawSnakeHead();
window.requestAnimationFrame(gameLoop);

