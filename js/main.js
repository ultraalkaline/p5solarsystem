var canvas;
var framerate = 60;

var stars = new Array(50);

var speedMulti;
var zoomMulti;

var sun, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune;

var solarSystem = [];

var currentPerspective = undefined;

function setup() {
   canvas = createCanvas(windowWidth, windowHeight);
   canvas.position(0, 0);
   frameRate(framerate);

   speedMulti = $("#speed-slider").val() / 1000;
   zoomMulti = $("#zoom-slider").val() / 1000;

   for (var i = 0; i < stars.length; i++) {
       stars[i] = new Star();
   }

   sun = new Planet("Sun", 10000, 0, 0);
   sun.setColor(255, 206, 0, 50);
   solarSystem.push(sun);

   // Mercury
   mercury = new Planet("Mercury", 35, 830, 2760);
   mercury.setColor(114, 114, 114);
   sun.addMoonObject(mercury);
   solarSystem.push(mercury);

   // Venus
   venus = new Planet("Venus", 87, 1552, 1080);
   venus.setColor(212, 147, 47);
   sun.addMoonObject(venus);
   solarSystem.push(venus);

   // Earth
   earth = new Planet("Earth", 92, 2146, 665);
   earth.setColor(51, 160, 210);
   sun.addMoonObject(earth);
   solarSystem.push(earth);

   // Mars
   mars = new Planet("Mars", 49, 3269, 353);
   mars.setColor(193, 68, 14);
   sun.addMoonObject(mars);
   solarSystem.push(mars);

   // Jupiter
   jupiter = new Planet("Jupiter", 1011, 11167, 55);
   jupiter.setColor(216, 202, 157);
   sun.addMoonObject(jupiter);
   solarSystem.push(jupiter);

   // Saturn
   saturn = new Planet("Saturn", 842, 20498, 22.75);
   saturn.setColor(227, 224, 192);
   sun.addMoonObject(saturn);
   solarSystem.push(saturn);

   // Uranus
   uranus = new Planet("Uranus", 367, 41182, 7.85);
   uranus.setColor(198, 211, 227);
   sun.addMoonObject(uranus);
   solarSystem.push(uranus);

   // Neptune
   neptune = new Planet("Neptune", 356, 64520, 4);
   neptune.setColor(63, 84, 186);
   sun.addMoonObject(neptune);
   solarSystem.push(neptune);

   // Handle clicks to change perspective.
   $("#sun-list-item").click(function(){
       if (currentPerspective != sun)
           currentPerspective = sun;
   });
   $("#mercury-list-item").click(function(){
       if (currentPerspective != mercury)
           currentPerspective = mercury;
   });
   $("#venus-list-item").click(function(){
       if (currentPerspective != venus)
           currentPerspective = venus;
   });
   $("#earth-list-item").click(function(){
       if (currentPerspective != earth)
           currentPerspective = earth;
   });
   $("#mars-list-item").click(function(){
       if (currentPerspective != mars)
           currentPerspective = mars;
   });
   $("#jupiter-list-item").click(function(){
       if (currentPerspective != jupiter)
           currentPerspective = jupiter;
   });
   $("#saturn-list-item").click(function(){
       if (currentPerspective != saturn)
           currentPerspective = saturn;
   });
   $("#uranus-list-item").click(function(){
       if (currentPerspective != uranus)
           currentPerspective = uranus;
   });
   $("#neptune-list-item").click(function(){
       if (currentPerspective != neptune)
           currentPerspective = neptune;
   });

}

function draw() {
    background(31, 31, 31);

    speedMulti = $("#speed-slider").val() / 1000;
    zoomMulti = $("#zoom-slider").val() / 1000;



    $("#speed-indicator").html("Speed: " + speedMulti + "x");
    $("#zoom-indicator").html("Zoom: " + zoomMulti * 2 + "x");

    for (var i = 0; i < stars.length; i++) {
       stars[i].move();
       stars[i].show();
       if (stars[i].edges()) {
           stars[i].reposition();
       }
    }

    changePerspective(currentPerspective);
    sun.show();
    sun.orbit();


}





// function mouseClicked() {
//     if (currentPerspective != uranus) {
//         currentPerspective = uranus;
//     } else {
//         currentPerspective = undefined;
//     }
// }

function windowResized() {
    canvas.size(windowWidth, windowHeight);
    canvas.position(0, 0);
}

// Change the perspective of the camera to respective planet.
function changePerspective(planet) {
    if (planet != undefined)
        translate(width/2 - planet.position.x, height/2 - planet.position.y);
    else
        translate(width/2, height/2);
}
