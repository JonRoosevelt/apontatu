const cheerio = require("cheerio");

const DATE_REGEX = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/

function isANumber(value) {
    return DATE_REGEX.test(value)
}

function missingDays(data) {
    const $ = cheerio.load(data)
    const days = $('.dia').toArray()
        .map(d => d.children[0].data.split(' '))
        .flat()
    return days.filter(isANumber);
}

module.exports = { missingDays }