// speichtert das html canvas in der variablen 'canvas'
const canvas = document.getElementById("canvas");

const renderer = canvas.getContext("2d");

const colorSnake = '#0000ff';
const colorFood  = '#FFFF00';
const snakeSize  = 20;
const snakeHead  = [5, 5]; // Eine Liste ist im Grunde ein Zeiger auf eine Speicheraddresse
const snakeBody  = [ [4, 5], [3, 5], [2, 5], [1, 5] ];
              
                   // eine liste aus listen
                   // jede addresse zeigt auf eine liste aus addressen ->
                   // jede adresse in dieser letzten zeigt auf einen konkreten Wert
const foodPos    = [10, 10];
let direction    = 'RIGHT' // LEFT, UP, DOWN
let frameCounter = 0;
let updateSpeed  = 20;
let gameOver     = false;
const rows       = canvas.height / snakeSize - 1; // anzahl der zeilen in der arena
const columns    = canvas.width  / snakeSize - 1; // anzahl der spalten in der arena

// für das Anzeigen der GameOver Message
const gameOverTag = document.getElementById('gameover');

// draw first Frame
drawFood();
drawSnakeHead();
drawSnakeBody();
window.requestAnimationFrame(gameLoop);

// unser spielfeld hat die erlaubten positionen von [0,0] - [columns, rows]
// das sind rows * columns verschiede positionen

// wenn eine Taste gedrückt wird, rufe die Funktion keyDown auf
// (hinter den Kulissen wird der Funktion das Event übergeben
document.onkeydown = keyDown;

// function myFunction(x, y) { ... }
// (x und y nennt man Funktionsparameter)
function drawSnakeHead() {
    // renderer.fillRect(x-pos, y-pos, breite, hoehe);
    renderer.fillStyle = colorSnake;
    renderer.fillRect(snakeHead[0]*snakeSize, snakeHead[1]*snakeSize, snakeSize, snakeSize);
}

function drawSnakeBody() {
    renderer.fillStyle = colorSnake;
    for (let segment of snakeBody) {
        renderer.fillRect(segment[0]*snakeSize, segment[1]*snakeSize, snakeSize, snakeSize);
    }
}

function updateSnakeBody() {
    snakeBody.pop();                                 // entfernt das letzte Schlangenglied aus der Liste
    snakeBody.unshift([snakeHead[0], snakeHead[1]]); // schiebt die Position des Kopfes in die Liste der Koerpersegmente (an erste Position)
}

function drawFood() {
    renderer.fillStyle = colorFood;
    renderer.fillRect(foodPos[0]*snakeSize, foodPos[1]*snakeSize, snakeSize, snakeSize);
}

function clearCanvas() {
    renderer.clearRect(0, 0, 720, 480);
}

function updateSnakeHead() {
    if (direction == "RIGHT") {
        snakeHead[0] = snakeHead[0] + 1;
    }

    if (direction == "LEFT") {
        snakeHead[0] = snakeHead[0] - 1;
    }

    if (direction == "UP") {
        snakeHead[1] = snakeHead[1] - 1;
    }

    if (direction == "DOWN") {
        snakeHead[1] = snakeHead[1] + 1;
    }
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

    // Implementierung von 2)
    // TODO: Für müssen später auch den Körper hier mit verarbeiten
    while (colPos == snakeHead[0] && rowPos == snakeHead[1]) {
        rowPos = Math.floor(Math.random() * rows);
        colPos = Math.floor(Math.random() * columns);
    }

    foodPos[0] = colPos;
    foodPos[1] = rowPos;
}

// TODO: Actually do GameOver
function checkGameOver() {
    // Kollision von Schlange mit Wand
    if (snakeHead[0] < 0 || snakeHead[0] > columns || snakeHead[1] < 0 || snakeHead[1] > rows) {
        gameOver = true;
    }

    // Kollision der Schlange mit dem Koerper
    for (let segment of snakeBody) {
        if (segment[0] == snakeHead[0] && segment[1] == snakeHead[1]) {
            gameOver = true;
        }
    }
}

let innerCounter = 0;
function gameLoop(timeStamp) {
    frameCounter = frameCounter + 1;

    // zeichne nur alle 30 Frames etwas Neues
    // wenn updateSpeed kleiner wird, erhöht sich die Rate der Spielupdates und
    // damit wird das Spiel insgesamt schneller
    if (frameCounter == updateSpeed) {
        frameCounter = 1;
        clearCanvas();

        // aktualisiere die Position des Schlangenkopfes
        updateSnakeBody();
        updateSnakeHead();
        checkGameOver();

        // Kollision von Schlange mit Food
        if (snakeHead[0] == foodPos[0] && snakeHead[1] == foodPos[1]) {

            spawnNewFood();
            snakeBody.unshift([snakeHead[0], snakeHead[1]]);
        }

        drawFood();
        drawSnakeHead();
        drawSnakeBody();
    }

    // naechsten Frame
    if (gameOver == false) {
        window.requestAnimationFrame(gameLoop);
    } else {
        gameOverTag.innerHTML = 'Game Over, press F5 to restart';
    }
}

function keyDown(e) {
    if (e.code == "ArrowUp") {

        if (direction !== "DOWN") {
            direction = "UP";
        }
    }
    if (e.code == "ArrowDown") {

        if (direction !== "UP") {
            direction = "DOWN";
        }
    }
    if (e.code == "ArrowLeft") {

        if (direction !== "RIGHT") {
            direction = "LEFT";
        }
    }
    if (e.code == "ArrowRight") {

        if (direction !== "LEFT") {
            direction = "RIGHT";
        }
    }
}

