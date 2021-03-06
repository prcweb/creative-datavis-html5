(function() {

  var info = {
    magnitude: d3.select('.info .magnitude'),
    depth: d3.select('.info .depth'),
    location: d3.select('.info .location')
  };

  var yScale = d3.scale.linear().domain([0, 800]).range([0, 800]);
  var colorScale = d3.scale.linear().domain([2.5, 7]).range(['black', 'yellow']);
  var radiusScale = d3.scale.sqrt().domain([2.5, 7]).range([0, 15]);

  localload('../data/earthquakes-30days-2.5.csv', function(err, csv) {
    csv.reverse();

    var lines = d3.select('svg')
      .selectAll('line')
      .data(csv)
      .enter()
      .append('line')
      .attr('x1', function(d, i) {return i;})
      .attr('y1', 0)
      .attr('x2', function(d, i) {return i;})
      .attr('y2', 0)
      .style('stroke', '#444');

    lines
      .transition()
      .duration(1000)
      .attr('y2', function(d) {return yScale(+d.depth);});

    var circles = d3.select('svg')
      .selectAll('circle')
      .data(csv)
      .enter()
      .append('circle')
      .attr('cx', function(d, i) {return i;})
      .attr('cy', 0)
      .attr('r', function(d) {return radiusScale(+d.mag);})
      .style('fill', function(d) {return colorScale(+d.mag);});

    circles
      .on('mouseover', function(d) {
        info.magnitude.text('Magnitude ' + +d.mag);
        info.depth.text('Depth ' + +d.depth);
        info.location.text(d.place);
      })

    circles
      .transition()
      .duration(1000)
      .attr('cy', function(d) {return yScale(+d.depth);});
  });


})();