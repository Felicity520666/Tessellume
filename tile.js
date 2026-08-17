class Tile {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.type = floor(random(2));
        this.angle = 0;
        this.amt = 0;
        this.startingAngle = 0;
        this.isAnimating = false;
        this.c = colors[floor(random(colors.length))];
        this.baseAlpha = 255;
    }

    update() {
        let distance = dist(mouseX, mouseY, this.x, this.y);
        if (distance < hoverDistance && !this.isAnimating) {
            this.isAnimating = true;
        }
        if (this.isAnimating) {
            this.amt += 0.02;
            if (this.amt > 1) {
                this.amt = 0;
                this.startingAngle += TWO_PI;
                this.isAnimating = false;
            }
        }

        this.angle = this.startingAngle + easeInOutQuad(this.amt) * TWO_PI;

        // Glow effect based on proximity to mouse
        let glowDist = dist(mouseX, mouseY, this.x, this.y);
        this.baseAlpha = map(constrain(glowDist, 0, 150), 0, 150, 255, 180);
    }

    display() {
        push();
        translate(this.x, this.y);
        rotate(this.angle);
        noStroke();
        fill(40, 38, 45);
        rect(0, 0, size, size);

        strokeWeight(3);
        let c = this.c;
        stroke(red(c), green(c), blue(c), this.baseAlpha);

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