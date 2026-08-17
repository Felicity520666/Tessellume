class Tile {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.type = floor(random(2));
        this.angle = 0;
        this.amt = 0;
    }

    update() {
        this.amt += 0.01;
        if (this.amt > 1) {
            this.amt = 0;
            this.startingAngle += PI/4;
        }
        this.angle = this.startingAngle + easeInOutQuad(this.amt) * PI/4;
    }

    display() {
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        noStroke();
        fill(255);
        rect(0, 0, size, size);

        stroke(0);

        if (this.type == 0) {
            arc(-size/2, -size/2, size, size, 0, PI/2);
            arc(size/2, size/2, size, size, PI, 3*PI/2);
        } else {
            arc(-size/2, size/2, size, size, 3*PI/2, 0);
            arc(size/2, -size/2, size, size, PI/2, PI);
        }
        pop();
    }
}