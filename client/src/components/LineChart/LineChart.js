import React, {useEffect, useRef} from 'react';
import './LineChart.css';
import getRoc from "../../api/roc";
import plotLineChart from "../../service/plot";

const LineChart = () => {
  const d3Chart = useRef();
  useEffect(() => {
    getRoc().then(data => plotLineChart(data, d3Chart));
  }, []);

  return (
    <div id='d3demo'>
      <svg ref={d3Chart}></svg>
    </div>
  );
};


export default LineChart;
