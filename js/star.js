function Star() {
    this.x = random(width);
    this.y = random(height);
    this.z = random(500);

    // Speed multipliers based on the z value.
    this.ySpeedMult = map(this.z, 0, 500, 0.5, 1.0);
    this.xSpeedMult = map(this.z, 0, 500, 0.5, 1.0);

    // Controls base, max and min speed.
    this.baseSpeed = 2;
    this.maxSpeed = this.baseSpeed;
    this.minSpeed = -this.baseSpeed;

    if (this.x <= width/2 && this.y <= height/2) {
        // Q1 of the screen.
        this.xSpeed = this.minSpeed * this.xSpeedMult;
        this.ySpeed = this.minSpeed * this.ySpeedMult;
    } else if (this.x >= width/2 && this.y <= height/2) {
        // Q2 of the screen.
        this.xSpeed = this.maxSpeed * this.xSpeedMult;
        this.ySpeed = this.minSpeed * this.ySpeedMult;
    } else if (this.x <= width/2 && this.y >= height/2) {
        // Q3 of the screen.
        this.xSpeed = this.minSpeed * this.xSpeedMult;
        this.ySpeed = this.maxSpeed * this.ySpeedMult;
    } else if (this.x >= width/2 && this.y >= height/2) {
        // Q4 of the screen.
        this.xSpeed = this.maxSpeed * this.xSpeedMult;
        this.ySpeed = this.maxSpeed * this.ySpeedMult;
    }

    this.show = function() {
        push();
        var thick = map(this.z, 0, 500, 0.2, 1.2);
        strokeWeight(thick);
        var color = map(this.z, 0, 500, 40, 255);
        stroke(color);
        fill(color);
        translate(this.x, this.y);
        beginShape(TRIANGLES);
        // Facing up
        vertex(2*thick, 0);
        vertex(1*thick, 2*thick);
        vertex(3*thick, 2*thick);
        // Facing left
        vertex(0, 2*thick);
        vertex(2*thick, 1*thick);
        vertex(2*thick, 3*thick);
        // Facing right
        vertex(4*thick, 2*thick);
        vertex(2*thick, 1*thick);
        vertex(2*thick, 3*thick);
        // Facing down
        vertex(2*thick, 4*thick);
        vertex(1*thick, 2*thick);
        vertex(3*thick, 2*thick);
        endShape();
        pop();
    }

    this.move = function() {

        this.x = this.x + this.xSpeed;
        this.y = this.y + this.ySpeed;
    }

    this.edges = function() {
        // If the star goes off-screen in the x-axis.
        if (this.x > width || this.x < 0) {
            return true;
        }

        // If the star goes off-screen in the y-axis.
        if (this.y > height || this.y < 0) {
            return true;
        }
    }

    this.reposition = function() {
        this.x = random(width);
        this.y = random(height);
        this.z = random(500);

        if (this.x <= width/2 && this.y <= height/2) {
            // Q1 of the screen.
            this.xSpeed = this.minSpeed * this.xSpeedMult;
            this.ySpeed = this.minSpeed * this.ySpeedMult;
        } else if (this.x >= width/2 && this.y <= height/2) {
            // Q2 of the screen.
            this.xSpeed = this.maxSpeed * this.xSpeedMult;
            this.ySpeed = this.minSpeed * this.ySpeedMult;
        } else if (this.x <= width/2 && this.y >= height/2) {
            // Q3 of the screen.
            this.xSpeed = this.minSpeed * this.xSpeedMult;
            this.ySpeed = this.maxSpeed * this.ySpeedMult;
        } else if (this.x >= width/2 && this.y >= height/2) {
            // Q4 of the screen.
            this.xSpeed = this.maxSpeed * this.xSpeedMult;
            this.ySpeed = this.maxSpeed * this.ySpeedMult;
        }
    }
}
