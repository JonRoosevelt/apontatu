const {missingDays} = require("./missingDays");
const html = '        <p class="dia">RESUMO DO DIA</p>' +
    '\n' +
    '        <p class="dia">16/06/2021 - QUA\n</p>'+
    '\n' +
    '        <p class="dia">15/06/2021 - TER\n</p>'
test('should return every item but RESUMO DO DIA', () => {
    const days = missingDays(html);
    const expectedDays = ['16/06/2021', '15/06/2021']
    expect(days).toEqual(expectedDays)
})