import * as d3 from 'd3';
import './LineChart.css';

function LineChart(props) {
  d3.select('#plot')
    .select('svg')
    .remove();
  const {data, width, height, margin} = props;

  var svg = d3.select("#plot")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  // Add X axis
  var x = d3.scaleLinear()
    .domain([0, 50])
    .range([0, width]);
  svg.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 40])
    .range([height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));

  svg.append('text')
    .attr('x', (width / 2))
    .attr('y', (margin.top / 5 + 20))
    .attr('text-anchor', 'middle')
    .attr('font-size', '16px')
    .attr('fill', 'black')
    .text('This is just a test using d3 for line plot');

  // Create the circle that travels along the curve of chart
  var focus = svg
    .append('g')
    .append('circle')
    .style("fill", "none")
    .attr("stroke", "black")
    .attr('r', 8.5)
    .style("opacity", 0);

  // Create the text that travels along the curve of chart
  var focusText = svg
    .append('g')
    .append('text')
    .style("opacity", 0)
    .attr("text-anchor", "left")
    .attr("alignment-baseline", "middle");

  // Add the line
  svg
    .append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr("d", d3.line()
      .x(function(d) {
        return x(d.label);
      })
      .y(function(d) {
        return y(d.value);
      })
    );

  // Create a rect on top of the svg area: this rectangle recovers mouse position
  svg
    .append('rect')
    .style("fill", "none")
    .style("pointer-events", "all")
    .attr('width', width)
    .attr('height', height)
    .on('mouseover', mouseover)
    .on('mousemove', mousemove)
    .on('mouseout', mouseout);

  // What happens when the mouse move -> show the annotations at the right positions.
  function mouseover() {
    focus.style("opacity", 1);
    focusText.style("opacity", 1);
  }

  function mousemove(event) {
    // This allows to find the closest X index of the mouse:
    var bisect = d3.bisector(d => d.label).right;

    // recover coordinate we need
    var x0 = x.invert(d3.pointer(event, this)[0]);
    var i = bisect(data, x0) - 1;
    var selectedData = data[i];

    focus
      .attr("cx", x(selectedData.label))
      .attr("cy", y(selectedData.value));
    focusText
      .html(`x:${selectedData.label}-y:${selectedData.value}`)
      .attr("x", x(selectedData.label) + 15)
      .attr("y", y(selectedData.value));
  }

  function mouseout() {
    focus.style("opacity", 0);
    focusText.style("opacity", 0);
  }

  return <div id="plot" />;
}

export default LineChart;
