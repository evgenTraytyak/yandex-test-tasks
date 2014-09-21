(function () {
  var NUMBER_OF_CIRCLES = 200,
      circleRadius = 10,
      data = [],
      width = document.body.clientWidth,
      height = 600,
      cursorRadius = 50;

  var svg = d3.select("body").append("svg")
    .attr({
      'width': width,
      'height': height
    });

  //additional function
  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  //fill data array
  for(var i = 0; i < NUMBER_OF_CIRCLES; i++) {
    data.push({
        x: width/2,
        y: height/2,
        dx: 0,
        dy: 0,
        angle: getRandom(0, 360),
        speed: getRandom(6, 12)
      });
  }

  var circles = svg.selectAll("circle")
    .data(data)
    .enter().append("circle")
    .attr({
      'cx': function(d) { return d.x; }, 
      'cy': function(d) { return d.y; },
      'r': 10,
      'fill': 'red'
    }); 

  function motionCircle(e, index, array) {
    e.dx = Math.cos(e.angle)*e.speed;
    e.dy = Math.sin(e.angle)*e.speed;  
    e.x += e.dx; 
    e.y += e.dy;
    checkCollisionWall(e);
  }        

  function checkCollisionWall(e) {
    if(e.x >= width) {
      e.angle = 90 + e.angle;
    } 
    if(e.y >= height) {
      e.angle = 270 - e.angle;
    }
    if(e.x < circleRadius) {
      e.angle = e.angle - 90; 
    }
    if(e.y < circleRadius) {
      e.angle = 90 + e.angle;
    }
  }

  svg.on("mousemove", function() {
    var cursorPos = d3.mouse(this);
    for(var i = 0; i < NUMBER_OF_CIRCLES; i++) {
      var dx = data[i].x - cursorPos[0],
          dy = data[i].y - cursorPos[1]; 
      if(Math.sqrt(dx*dx + dy*dy) < cursorRadius) {
        console.log(i);
        console.log(true);
      }
    }
  });

  circles.each(function(){
    var circle = d3.select(this);
    changeColor(circle);
  });

  function changeColor(circle){
    var randomDuration = getRandom(0, 10000);
    hasYellowColor = circle.attr('fill') == '#ffff00';
    if(hasYellowColor) {
      circle
        .transition()
        .duration(randomDuration)
        .attr('fill', 'red');
    } else {
      circle
        .transition()
        .duration(randomDuration)
        .attr('fill', 'yellow');
    }
    
    setTimeout(function() { changeColor(circle); }, getRandom(0, 10000));
  }

  d3.timer(function() {
    data.forEach(motionCircle);
        
    svg.selectAll("circle")
       .attr({
         'cx': function(d) { return d.x; },
         'cy': function(d) { return d.y; }
       });
  });

})();
