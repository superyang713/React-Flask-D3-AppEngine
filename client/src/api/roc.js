import axios from 'axios';
import config from "../context/config";
import * as d3 from 'd3';

const endpoint = `${config.API_URL}/roc`;
const parseDate = d3.timeParse('%Y-%m-%d');

const getRoc = () => (
  axios.get(endpoint)
  .then(response => response.data)
  .then(data => {
    // Transform data
    const permits = data.filter(event => (
      event.eventtype === 'Shooting Permit'
    ));

    // Get all the dates in an array
    const dates = [...new Set(permits.map(date => date.enteredon
      .slice(0, 10)))];

    return {
      permits: permits,
      dates: dates
    };
  })
  .then(({
    permits,
    dates
  }) => {
    let CountsByDate = [];
    // Get counts(number of times a permit entered) on each date
    dates.map(date => {
      let count = 0;
      permits.forEach(item => {
        let timestamp = item.enteredon.slice(0, 10);
        if (timestamp === date) count += 1;
      });

      const counts = {
        date: parseDate(date),
        count: count
      };

      CountsByDate.push(counts);
      return CountsByDate;
    });
    return CountsByDate;
  })
);

export default getRoc;
