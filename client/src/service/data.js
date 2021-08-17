import * as d3 from 'd3';


export default function transformData(data) {
    const permits = data.filter(event => (
        event.eventtype === 'Shooting Permit'
    ));

    // Get all the dates in an array
    const dates = [
        ...new Set(permits.map(date => date.enteredon.slice(0, 10)))
    ];

    let CountsByDate = [];
    dates.map((date, i) => {
        let count = 0;
        permits.forEach(item => {
            let timestamp = item.enteredon.slice(0, 10);
            if (timestamp === date) count += 1;
        });

        const counts = {
            label: i,
            value: count
        };

        CountsByDate.push(counts);
        return CountsByDate;
    });
    return CountsByDate;
}
