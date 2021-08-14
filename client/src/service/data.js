import * as d3 from 'd3';


export default function transformData(data) {
    const parseDate = d3.timeParse('%Y-%m-%d');

    const permits = data.filter(event => (
        event.eventtype === 'Shooting Permit'
    ));

    // Get all the dates in an array
    const dates = [
        ...new Set(permits.map(date => date.enteredon.slice(0, 10)))
    ];

    let CountsByDate = [];
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
}
