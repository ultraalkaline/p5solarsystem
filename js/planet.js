function Planet(name, radius, distance, orbitSpeed, color, angle) {
    this.radius = radius / 1000 / 2;
    this.name = name;

    this.distance = distance / 10 / 2;
    this.orbitSpeed = orbitSpeed / 100000;

    this.orbitHidden = false;

    if (color != undefined) {
        this.color = color;
    }

    if (angle != undefined) {
        this.angle = angle;
    } else {
        this.angle = 0;
    }

    this.x = this.distance * zoomMulti * cos(this.angle);
    this.y = this.distance * zoomMulti * sin(this.angle);
    this.position = createVector(this.x, this.y);

    this.planets = [];

    this.orbit = function() {
        this.angle += this.orbitSpeed * speedMulti;
        this.showOrbit();

        if (this.planets.length != 0) {
            for (var i = 0; i < this.planets.length; i++) {
                this.planets[i].orbit();
                this.planets[i].showOrbit();
            }
        }
    }


    this.show = function() {
        push();
        rotate(this.angle);
        this.x = this.distance * zoomMulti * cos(this.angle);
        this.y = this.distance * zoomMulti * sin(this.angle);
        this.position = createVector(this.x, this.y);
        translate(this.distance * zoomMulti, 0);
        noStroke();
        fill(this.color[0], this.color[1], this.color[2]);
        ellipse(0, 0, this.radius * 2 * zoomMulti, this.radius * 2 * zoomMulti);
        if (this.name == "Saturn") {
            push();
            noFill();
            strokeWeight(0.2);
            stroke(206, 206, 206, 80);
            for (var i = 1; i < 1.5; i += 0.01) {
                ellipse(0, 0, (this.radius + 0.5 * i) * 2 * zoomMulti, (this.radius + 0.5 * i) * 2 * zoomMulti);
            }
            pop();
        } else if (this.name == "Uranus") {
            push();
            noFill();
            strokeWeight(0.2);
            stroke(248, 248, 255, 50);
            for (var i = 1; i < 1.1; i += 0.01) {
                ellipse(0, 0, (this.radius + 0.2 * i) * 2 * zoomMulti, (this.radius + 0.2 * i) * 2 * zoomMulti);
            }
            pop();
        }
        if (this.planets.length != 0) {
            for (var i = 0; i < this.planets.length; i++) {
                if (!this.orbitHidden) {
                    push();
                    translate(0, 0);
                    noFill();
                    strokeWeight(0.15);
                    stroke(255);
                    ellipse(0, 0, this.planets[i].distance * 2 * zoomMulti,
                        this.planets[i].distance * 2 * zoomMulti);
                    pop();
                } else {

                }
                this.planets[i].show();
            }
        }
        pop();
    }

    this.setColor = function(color1, color2, color3, alpha) {
        // Example: planet.setColor(255, 255, 255);
        if (color1 != undefined
            && color2 != undefined
            && color3 != undefined
            && alpha == undefined) {
            this.color = [color1, color2, color3];
        }
        // Example: planet.setColor(255, 255, 255, 200);
        else if (color1 != undefined
            && color2 != undefined
            && color3 != undefined
            && alpha != undefined) {
            this.color = [color1, color2, color3, alpha];
        } else {
            console.log("Please specify a color in the RGB or RGBA format.");
        }
    }

    this.getColor = function() {
        return  this.color;
    }

    this.addMoon = function(radius, distance, orbitSpeed, moonColor) {
        this.planets.push(new Planet(radius, distance, orbitSpeed, moonColor));
    }

    this.addMoonObject = function(planet) {
        this.planets.push(planet);
    }

    this.getMoons = function() {
        return this.planets;
    }

    this.hideOrbit = function() {
        this.orbitHidden = true;
    }

    this.showOrbit = function() {
        this.orbitHidden = false;
    }

    this.getName = function() {
        return this.name;
    }
}
