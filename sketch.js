let cols, rows; let size = 30;
let tiles = []; let hoverDistance = 46;
let colors;

function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
    cols = ceil(width / size);
    rows = ceil(height / size);

    colors = [
        color(9, 54, 108),
        color(17, 80, 135),
        color(7, 112, 134),
        color(8, 148, 159),
        color(90, 190, 175),
        color(178, 124, 111),
        color(216, 138, 102),
        color(176, 96, 109),
        color(132, 63, 82),
        color(169, 130, 144),
    ];

    for (let i = 0; i < cols; i++) {
        tiles[i] = [];
        for (let j = 0; j < rows; j++) {
            let x = i * size + size / 2;
            let y = j * size + size / 2;
            tiles[i][j] = new Tile(x, y);
        }
    }
}

function draw() {
    background(30);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            tiles[i][j].update();
            tiles[i][j].display();
        }
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    cols = ceil(width / size);
    rows = ceil(height / size);

    for (let i = 0; i < cols; i++) {
        if (!tiles[i]) tiles[i] = [];
        for (let j = 0; j < rows; j++) {
            if (!tiles[i][j]) {
                let x = i * size + size / 2;
                let y = j * size + size / 2;
                tiles[i][j] = new Tile(x, y);
            }
        }
    }
}

function mousePressed() {
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let d = dist(mouseX, mouseY, tiles[i][j].x, tiles[i][j].y);
            if (d < size * 2) {
                tiles[i][j].c = colors[floor(random(colors.length))];
                tiles[i][j].isAnimating = true;
            }
        }
    }
}