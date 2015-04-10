var count = 30,
threshold = 0.8,
dots = [],
locations = [];

for (var i=0; i< count; i++){

  if (i % 2 === 0){
    var randomHue = (Math.random() * 30) + 0;
    var dot = new Shape.Circle({
      center : Point.random() * view.size,
      radius: 2 * threshold,
      fillColor : { hue: randomHue, saturation: 0.6, lightness: 0.6 },
      blendMode: 'multiply'
    });

  } else {
    var randomHue = (Math.random() * 30) + 180;
    var dot = new Shape.Circle({
      center : Point.random() * view.size,
      radius: 2 * threshold,
      fillColor : { hue: randomHue, saturation: 0.6, lightness: 0.6 },
      blendMode: 'multiply'
    });
  }
    // attach data
    dot.data = {
      startingRadius: dot.radius ,
      radiusDiff: 8 * threshold,
      totalDist: Math.round((destination - dot.position).length),
      growing: true
    };

    var destination = Point.random() * view.size,
    vector = destination - dot.position;
    dot.data.percentTraveled = dot.data.totalDist - Math.round(vector.length);
    dots.push(dot);
    locations.push(destination);
  }

  var completed = 1,
  visibile = 1;

  function onFrame(event) {

    var CurrentRadius,
    RadiusDiff,
    PercentTraveled;

    for (var i = 0; i < count; i++) {
      var item = project.activeLayer.children[i];
      var vector = locations[i] - item.position;
      item.position += vector / (item.data.totalDist / 6);
        // x = the input value
        // a,b = range that input is involved with
        // c,d = range that y will return
        // y = (x-a)/(b-a) * (d-c) + c
        var input = item.radius,
        rMin = item.data.startingRadius,
        rMax = (item.data.startingRadius) + (item.data.radiusDiff),
        oMin = 0,
        oMax = 1.1,
        output = (input - rMin) / ((rMax - rMin) * (oMax  -oMin)) + oMin;
        item.fillColor.saturation = output;




        var totalDist = item.data.totalDist,
        vectorL = Math.round(vector.length),
        percentage = (totalDist - vectorL) / totalDist,
        diff = item.data.radiusDiff,
        sR = item.data.startingRadius;


        if (item.data.growing === true){
          item.radius = Math.abs((percentage * diff) + sR);
        } else {
          sR = (sR + diff) * threshold;
          item.radius = Math.abs(sR - (percentage * diff));
        }

        if (percentage > threshold) {

          locations[i] = Point.random() * view.size;
          var Testvector = locations[i] - item.position;

            // if the vector is too short, make it twice as long
            if(Testvector.length < 50 ){
              locations[i] = Point.random() * view.size * 2;

            }
            var newVector = locations[i] - item.position;
            item.data.totalDist = newVector.length;
            item.data.growing = !item.data.growing;
          }


        }
      }