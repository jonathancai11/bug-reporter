export function getMDY(dt) {
    return (dt.getMonth() + 1) + "/" + dt.getDate() + "/" + dt.getFullYear();
}

export function getHM(dt) {
    return dt.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });
}

export function groupByMDY(reports) {
    // https://www.robinwieruch.de/javascript-groupby
    return reports.reduce((acc, value) => {
        let date = getMDY(new Date(value.date_created));
        // Group initialization
        if (!acc[date]) {
            acc[date] = [];
        }
        // Grouping
        acc[date].push(value);
        return acc;
    }, {});
}

export function groupByTag(reports) {
    // https://www.robinwieruch.de/javascript-groupby
    return reports.reduce((acc, value) => {
        // Group initialization
        if (!acc[value.tag]) {
            acc[value.tag] = [];
        }
        // Grouping
        acc[value.tag].push(value);
        return acc;
    }, {});
}
