import React, {
  useEffect,
  useRef
} from 'react';
import * as d3 from 'd3';
import draw from "../../service/plot";
import './LineChart.css';

const LineChart = ({width, height, data}) => {
  const d3Chart = useRef();
  const ref = useRef();
  useEffect(() => {
    d3.select(ref.current)
      .attr("width", width)
      .attr("height", height);
  }, []);

  useEffect(() => {
      draw(data, width, height, d3Chart);
  }, [data]);

  return (
    <div>
      <svg ref={d3Chart}></svg>
    </div>
  );
};

export default LineChart;
