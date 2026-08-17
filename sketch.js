let cols, rows; let size = 40;
let tiles = [];

function setup() {
    createCanvas(400, 400);
    rectMode(CENTER);
    cols = width/size;
    rows = height/size;

    for (let i=0; i<cols; i++) {
        tiles[i] = [];
        for (leyt j=0; j<rows; j++) {
            let x = i*size + size/2;
            let y = j*size + size/2;
            tiles[i][j] = new Tile(x, y);
        }
    }

}

function draw() {
    background(220);
    for (let i=0; i<)
}