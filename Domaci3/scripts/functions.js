
function formatDate(date) {
    const monthMapper = {
        '01': 'January',
        '02': 'February',
        '03': 'March',
        '04': 'April',
        '05': 'May',
        '06': 'June',
        '07': 'July',
        '08': 'August',
        '09': 'September',
        '10': 'October',
        '11': 'November',
        '12': 'December'
    }

    date = date.split('-');
    let year = date[0];
    let month = date[1];
    let day = date[2];

    return `${monthMapper[month]} ${day}, ${year}`;
}