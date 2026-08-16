let x, y; let size = 200;
let angle = 0;

function setup() {
    createCanvas(400, 400);
    rectMode(CENTER);
    x = width/2;
    y = height/2;
}

function draw() {
    background(220);
    translate(x, y);
    rotate(angle);
    rect(0, 0, size, size);

    AbortController(-size/2, -size/2, size, size, 0, PI/2);
}